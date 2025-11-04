import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { randomUUID } from 'crypto';
import { Request } from 'express';
import { Comment, Post } from '../../../prisma/generated/prisma';
import { PrismaService } from '../../prisma/prisma.service';

type CommentWithRep = Comment & { repComments: Comment[] };

const TIME_LIFE_CACHE = 10 * 24 * 60 * 60;

@Injectable()
export class CommentService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cachemanager: Cache,
    private readonly prismaService: PrismaService,
  ) {}

  // get post
  private async getPostOrThrow(postId: string) {
    const keyPost = `post:${postId}`; // key
    const cache = (await this.cachemanager.get(keyPost)) as Post;
    if (cache) return cache;

    // fall back
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
    // get comment in cache
    const key = `comment:${commentId}`;
    const cache = (await this.cachemanager.get(key)) as CommentWithRep;
    if (cache) return cache;

    // fall back
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

    const keyPost = `post:${postId}`;

    // cache post
    await this.cachemanager.set(keyPost, exitingPost, TIME_LIFE_CACHE);

    // cache comment
    await this.cachemanager.set(`comment:${newComment.id}`, newComment, TIME_LIFE_CACHE);

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

    const key = `comment:${commentId}`;

    // cache comment
    await this.cachemanager.del(key);

    await this.cachemanager.set(key, newComment, TIME_LIFE_CACHE);

    return newComment;
  }

  // delete comment
  async deleteComment(commentId: string) {
    const exitingComment = await this.getCommentOrThrow(commentId);

    if (!exitingComment) throw new NotFoundException('Comment not found');

    const listRepComment = exitingComment.repComments;

    for (const comment of listRepComment) {
      const keyComment = `comment:${comment.id}`;
      await this.cachemanager.del(keyComment);
    }

    await this.prismaService.comment.delete({
      where: { id: exitingComment.id },
    });

    const key = `comment:${commentId}`;

    // del cache
    await this.cachemanager.del(key);

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
