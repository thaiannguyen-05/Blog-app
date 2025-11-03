import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from 'prisma/generated/prisma';
import { PostService } from '../post.service';
import { CommonFunc } from 'src/common/func/func.common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IsCreatorPostGuard implements CanActivate {
  constructor(
    private readonly postService: PostService,
    private readonly commonFuncion: CommonFunc,
    private readonly prismaSerive: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext) {
    // get user in request
    const request = context.switchToHttp().getRequest();
    const user: User = request.user;
    const postId: string = request.query?.postId || request.params?.postId;

    const availableUser = await this.prismaSerive.user.findUnique({
      where: { id: user.id },
    });

    if (!availableUser) throw new NotFoundException('User not in request');

    // user with roles
    const owner = await this.commonFuncion.getOwn(availableUser.id, postId);
    if (owner?.nameRole !== 'ADMIN') {
      throw new ForbiddenException('You are not author');
    }

    // find post
    const post = await this.postService.getPostObject(postId);

    // validate
    if (post?.userId === owner.userId) {
      return true;
    } else {
      throw new ForbiddenException('You are not author');
    }
  }
}
