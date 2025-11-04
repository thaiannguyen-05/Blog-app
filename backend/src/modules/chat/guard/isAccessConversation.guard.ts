import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { User } from '../../../../prisma/generated/prisma';

@Injectable()
export class IsAccessConversation implements CanActivate {
  constructor(private readonly prismaService: PrismaService) {}

  async canActivate(context: ExecutionContext) {
    // get request in http
    const request = context.switchToHttp().getRequest();
    const { user }: { user: User } = request;

    // validate user
    const userId = user.id;

    if (!userId) throw new BadRequestException('Accesstoken required');

    const hasAccess = await this.prismaService.conversation.findFirst({
      where: {
        OR: [{ user1Id: userId }, { user2Id: userId }],
      },
    });

    if (!hasAccess) throw new ForbiddenException('User is not access in chat');

    return true;
  }
}
