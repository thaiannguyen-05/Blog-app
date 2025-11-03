import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMessageDto } from '../dto/create-message.dto';
import { Request } from 'express';
import { DeleteMessageDto } from '../dto/delete-message.dto';
import { FindMessageDto } from '../dto/find-message.dto';
import { LoadAllMessageDto } from '../dto/loading-all-message.dto';
import { UpdateMessageDto } from '../dto/edit-message.dto';
@Injectable()
export class MessgaeService {
  constructor(private readonly prismaService: PrismaService) {}

  // create message
  async createMessage(req: Request, dto: CreateMessageDto, conversationId: string) {
    // validate request
    const userId = req.user?.id;
    if (!userId) throw new BadRequestException('Access required');

    // check available conversation
    const conversation = await this.prismaService.conversation.findUnique({
      where: { id: conversationId },
    });

    if (!conversation) throw new NotFoundException('Conversation not found');

    // total messages
    const totalMessage = conversation.totalMessage;

    // checkout id
    let receiverId;
    userId === conversation.creatorId
      ? (receiverId = conversation.friendId)
      : (receiverId = userId);

    // create message
    const [newMessage, newConversation] = await this.prismaService.$transaction([
      this.prismaService.privateMessage.create({
        data: {
          content: dto.content,
          conversationId,
          senderId: userId,
          receiverId: receiverId,
          messageIndex: totalMessage + 1,
        },
      }),
      this.prismaService.conversation.update({
        where: { id: conversationId },
        data: { totalMessage: totalMessage + 1 },
      }),
    ]);

    return {
      success: 'Done',
      data: newMessage,
    };
  }

  // edit message
  async editMessage(req: Request, dto: UpdateMessageDto, conversationId: string) {
    // validate request
    const userId = req.user?.id;
    if (!userId) throw new BadRequestException('Access required');

    // check available conversation
    const conversation = await this.prismaService.conversation.findUnique({
      where: { id: conversationId },
    });

    if (!conversation) throw new NotFoundException('Conversation not found');

    // check message
    const message = await this.prismaService.privateMessage.findUnique({
      where: { id: dto.messageId },
    });

    if (!message) throw new NotFoundException('Message not available');

    // check isAuthor message
    if (userId !== message.senderId || userId !== message.receiverId) {
      throw new ForbiddenException('You are not author message');
    }

    // edit message
    const newMessage = await this.prismaService.privateMessage.update({
      where: { id: message.id },
      data: {
        content: dto.content,
      },
    });

    return {
      success: 'Done',
      data: newMessage,
    };
  }

  // delete message
  async deleteMessage(req: Request, dto: DeleteMessageDto, conversationId: string) {
    // validate request
    const userId = req.user?.id;
    if (!userId) throw new BadRequestException('Access required');

    // check available conversation
    const conversation = await this.prismaService.conversation.findUnique({
      where: { id: conversationId },
    });

    if (!conversation) throw new NotFoundException('Conversation not found');

    // total messages
    const totalMessage = conversation.totalMessage;

    // check message
    const message = await this.prismaService.privateMessage.findUnique({
      where: { id: dto.messageId },
    });

    if (!message) throw new NotFoundException('Message not available');

    // check isAuthor message
    if (userId !== message.senderId && userId !== message.receiverId) {
      throw new ForbiddenException('You are not author message');
    }

    // delete message and update total message
    const [deletedMessage, newConversation] = await this.prismaService.$transaction([
      this.prismaService.privateMessage.delete({
        where: { id: dto.messageId },
      }),
      this.prismaService.conversation.update({
        where: { id: conversation.id },
        data: { totalMessage: totalMessage - 1 },
      }),
    ]);

    return {
      success: 'Done',
    };
  }

  // find message
  async findMessage(req: Request, query: FindMessageDto, conversationId: string) {
    // validate request
    const userId = req.user?.id;
    if (!userId) throw new BadRequestException('Access required');

    // check available conversation
    const conversation = await this.prismaService.conversation.findUnique({
      where: { id: conversationId },
      include: { privateMessage: true },
    });

    if (!conversation) throw new NotFoundException('Conversation not found');

    if (conversation.privateMessage.length < 0) {
      return { data: null };
    }

    //  handle panigation
    const { page = 1, limit = 20, cursor } = query;
    const whereClause: any = {
      content: {
        startsWith: query.content,
        contains: query.content,
        endsWith: query.content,
        mode: 'insensitive',
      },
    };

    // if have cursor
    if (cursor) {
      whereClause.id = { lt: parseInt(cursor) };
    }

    // find message
    const messages = await this.prismaService.conversation.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' },
      take: limit + 1,
    });

    const hasNextPage = messages.length > limit;
    const resultMessages = hasNextPage ? messages.slice(0, limit) : messages;
    const nextCursor =
      messages.length > 0 ? resultMessages[messages.length - 1].id.toString() : null;

    return {
      resultMessages: resultMessages.reverse(),
      panigation: {
        page,
        limit,
        nextCursor,
        total: resultMessages.length,
      },
    };
  }

  // load all message
  async loadAllMessage(req: Request, query: LoadAllMessageDto, conversationId: string) {
    // validate request
    const userId = req.user?.id;
    if (!userId) throw new BadRequestException('Access required');

    // check available conversation
    const conversation = await this.prismaService.conversation.findUnique({
      where: { id: conversationId },
      include: { privateMessage: true },
    });

    if (!conversation) throw new NotFoundException('Conversation not found');

    if (conversation.privateMessage.length < 0) {
      return { data: null };
    }

    const { page = 1, limit = 20, cursor } = query;

    const whereClause: any = {
      conversationId,
    };

    if (cursor) {
      whereClause.id = { lt: parseInt(cursor) };
    }

    const messages = await this.prismaService.privateMessage.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' },
      take: limit + 1,
    });

    const hasMore = messages.length > limit;
    const resultMessage = hasMore ? messages.slice(0, limit) : messages;
    const nextCursor =
      resultMessage.length > 0 ? resultMessage[resultMessage.length - 1].id.toString() : null;

    return {
      messages: resultMessage.reverse(),
      pagination: {
        page,
        limit,
        nextCursor,
        total: resultMessage.length,
      },
    };
  }
}
