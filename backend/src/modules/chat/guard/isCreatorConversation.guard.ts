import { BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ConversationService } from '../service/connversation.service';
import { User } from '../../../../prisma/generated/prisma';

@Injectable()
export class IsCreatorConversation implements CanActivate {
  constructor(private readonly conversationService: ConversationService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // get request from http
    const request = context.switchToHttp().getRequest();

    // get user from request
    const { user, conversationId }: { user: User; conversationId: string } = request;

    const userId = user.id;

    if (!conversationId || !userId) throw new BadRequestException('Something went wrong');

    return await this.conversationService.isCreatorConversation(userId, conversationId);
  }
}
