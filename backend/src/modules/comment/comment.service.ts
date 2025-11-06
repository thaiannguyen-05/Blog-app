import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Request } from 'express';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CommentService {
  constructor(private readonly prismaService: PrismaService) {}

  // get post
  private async getPostOrThrow(postId: string) {
    const exitingPost = await this.prismaService.post.findUnique({
      where: { id: postId },
    });

    return exitingPost;
  }

  // get only object comment
  async getComment(commentId: string) {
    return await this.prismaService.comment.findUnique({
      where: { id: commentId },
    });
  }

  // get comment
  private async getCommentOrThrow(commentId: string) {
    const exitingComment = await this.prismaService.comment.findUnique({
      where: { id: commentId },
      include: {
        repComments: true,
      },
    });

    return exitingComment;
  }

  // add comment
  async comment(req: Request, postId: string, content: string) {
    const exitingPost = await this.getPostOrThrow(postId);
    if (!exitingPost) throw new NotFoundException('Post not found');

    if (!content?.trim()) {
      throw new BadRequestException('Comment content cannot be empty');
    }

    // create comment
    const newCommentId = randomUUID();
    const [newComment] = await this.prismaService.$transaction([
      this.prismaService.comment.create({
        data: {
          id: newCommentId,
          content: content,
          postId: postId,
          userId: req.user?.id || 'unknow',
        },
      }),
      this.prismaService.owner.create({
        data: {
          nameRole: 'ADMIN',
          userId: req.user?.id || 'unknow',
          objectId: postId,
        },
      }),
    ]);

    return newComment;
  }

  // edit comment
  async editComment(commentId: string, newContent: string) {
    const existingComment = await this.getCommentOrThrow(commentId);

    if (!existingComment) throw new NotFoundException('Comment not found');

    if (!newContent?.trim()) {
      throw new BadRequestException('Comment content cannot be empty');
    }

    const newComment = await this.prismaService.comment.update({
      where: { id: existingComment.id },
      data: { content: newContent },
    });

    return newComment;
  }

  // delete comment
  async deleteComment(commentId: string) {
    const exitingComment = await this.getCommentOrThrow(commentId);
    if (!exitingComment) throw new NotFoundException('Comment not found');

    await this.prismaService.comment.delete({
      where: { id: exitingComment.id },
    });

    return {
      message: 'Done',
    };
  }

  // rep comment
  async repComment(req: Request, commentId: string, content: string) {
    const exitingComment = await this.getCommentOrThrow(commentId);

    if (!exitingComment) {
      throw new NotFoundException('Comment not found');
    }

    if (!content?.trim()) {
      throw new BadRequestException('Reply content cannot be empty');
    }

    const newRepcomment = await this.prismaService.repComment.create({
      data: {
        content: content,
        userId: req.user?.id,
        commentId: exitingComment.id,
      },
    });

    return newRepcomment;
  }
}
