import {
  BadGatewayException,
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Request } from 'express';
import { CHAT_CONSTANTS } from '../chat.constants';
import { LoadAllConversationDto } from '../dto/loading-all-conversation.dto';
import { PrismaService } from '../../../prisma/prisma.service';
@Injectable()
export class ConversationService {
  constructor(private readonly prismaService: PrismaService) {}

  // validate iscreator conversation
  async isCreatorConversation(userId, conversationId): Promise<boolean> {
    // check available conversation
    const conversation = await this.prismaService.conversation.findUnique({
      where: { id: conversationId },
    });

    if (!conversation) throw new NotFoundException('Conversation is not available');

    // check iscreator
    return conversation.user1Id === userId ? true : false;
  }

  // conversation(room)
  async createConversation(req: Request, friendId: string) {
    // check accesstoken
    const creatorId = req.user?.id;

    if (!creatorId) throw new BadRequestException('Access_token reqired');

    // check available
    const conversation = await this.prismaService.conversation.findUnique({
      where: {
        user1Id_user2Id: { user1Id: creatorId, user2Id: friendId },
      },
    });

    if (conversation) {
      // fall back
      return this.getConversation(req, friendId);
    }

    // socket id
    const socketId = CHAT_CONSTANTS.SOCKET_ID(creatorId, friendId);

    return await this.prismaService.conversation.create({
      data: {
        conversationId: socketId,
        user1Id: creatorId,
        user2Id: friendId,
      },
    });
  }

  // get conversation
  async getConversation(req: Request, friendId: string) {
    // check accesstoken
    const creatorId = req.user?.id;

    if (!creatorId) throw new BadRequestException('Access_token reqired');

    // find conversation
    const availableConversation = await this.prismaService.conversation.findUnique({
      where: { user1Id_user2Id: { user1Id: creatorId, user2Id: friendId } },
    });

    if (!availableConversation) {
      // fall back
      return await this.createConversation(req, friendId);
    }

    return availableConversation;
  }

  // del conversation
  async delConversation(req: Request, conversationId: string): Promise<boolean> {
    const creatorId = req.user?.id;

    if (!creatorId) throw new BadGatewayException('Accesstoken required');

    // find conversation
    const availableConversation = await this.prismaService.conversation.findUnique({
      where: { id: conversationId },
    });

    if (!availableConversation) throw new BadRequestException('Conversation is not found');

    // del conversation
    await this.prismaService.conversation.delete({
      where: { id: conversationId },
    });

    return true;
  }

  // loading conversation
  async loadingConversation(req: Request, query: LoadAllConversationDto) {
    // validate req
    const userId = req.user?.id;

    if (!userId) throw new ForbiddenException('Accesstoken required');

    // handle panigation
    const { page = 1, limit = 20, cursor } = query;
    const whereClause: any = {
      OR: [{ creatorId: userId }, { friendId: userId }],
    };

    // if have cursor, using cursor
    if (cursor) {
      whereClause.id = { lt: parseInt(cursor) };
    }

    // loading all conversation
    const conversations = await this.prismaService.conversation.findMany({
      where: whereClause,
      orderBy: { lastMessageAt: 'desc' },
      take: limit + 1,
      include: {
        user1: {
          select: {
            id: true,
            userName: true,
          },
        },
        user2: {
          select: {
            id: true,
            userName: true,
          },
        },
      },
    });

    const hasNextPage = conversations.length > limit;
    const resultConversations = hasNextPage ? conversations.slice(0, limit) : conversations;
    const nextCursor =
      conversations.length > 0 ? resultConversations[conversations.length - 1].id : null;

    return {
      conversations,
      panigation: {
        page,
        limit,
        nextCursor,
      },
    };
  }
}
