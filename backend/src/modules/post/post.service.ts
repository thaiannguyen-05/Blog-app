import { CACHE_MANAGER } from '@nestjs/cache-manager';
import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { Request } from 'express';
import { CustomCacheService } from '../custom-cache/customCache.service';
import { GetDetailPostDto } from './dto/get.detail.post.dto';
import { GetManyPostDto } from './dto/get.many.post.dto';
import { POST_CONSTANTS } from './post.constants';
import { USER_CONSTANTS } from '../user/user.constants';
import { randomUUID } from 'node:crypto';
import { LoadingAuthorPostDto } from './dto/LoadingAuthorPost.dto';
import Redis from 'ioredis';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(
    private readonly prismaService: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly customCache: CustomCacheService,
    @Inject('IORedis') private redis: Redis,
  ) { }

  // increment view post
  async increamentView(postId: string) {
    const key = POST_CONSTANTS.CACHE_KEY.ViewPostKey(postId);
    return await this.redis.incr(key);
  }

  // get views post
  async getViewsPost(postId: string) {
    const key = POST_CONSTANTS.CACHE_KEY.ViewPostKey(postId);
    const views = await this.redis.get(key);
    return Number(views) || 0;
  }

  // find post
  async getPostObject(postId: string) {
    return await this.prismaService.post.findUnique({
      where: { id: postId },
    });
  }

  // create post
  async createPost(req: Request, content: string, title: string, paths: string[]) {
    const userId = req.user?.id || 'unknow';

    const availableUser = await this.customCache.getUserInCache(userId);

    if (!availableUser) throw new NotFoundException('user not found');

    if (!content?.trim()) {
      throw new BadRequestException('Post content cannot be empty');
    }

    // create post
    const newPostId = randomUUID();
    const [newPost] = await this.prismaService.$transaction([
      this.prismaService.post.create({
        data: {
          id: newPostId,
          title: title,
          description: content,
          imgUrl: paths,
          userId: availableUser.id,
        },
      }),
      this.prismaService.owner.create({
        data: {
          nameRole: 'OWNER',
          objectId: newPostId,
          userId: availableUser.id,
        },
      }),
    ]);

    // cache post
    const key = `post:${newPost.id}`;
    await this.cacheManager.set(key, newPost, POST_CONSTANTS.TIME_LIFE_CACHE);
    return newPost;
  }

  // edit post
  async editPost(req: Request, filePaths: string[], postId: string, newContent?: string) {
    // find available post
    const exitingPost = await this.prismaService.post.findUnique({
      where: { id: postId },
    });

    if (!exitingPost) throw new NotFoundException('Post not found');

    if (!newContent?.trim()) {
      throw new BadRequestException('Post content cannot be empty');
    }

    // check validate author post
    if (req.user?.id !== exitingPost.userId) {
      await this.customCache.fallBackCacheTemporaryObject(`post:${postId}`);
      throw new UnauthorizedException('You are not author post');
    }

    // tao array linkPaths
    let urlImgs: string[] = exitingPost.imgUrl;

    if (Array.isArray(filePaths) && filePaths.length > 0) {
      urlImgs = urlImgs.concat(filePaths);
    }

    const data = { imgUrl: urlImgs, description: newContent };

    // del cache
    const key = `post:${postId}`;
    await this.cacheManager.del(key);

    // update post
    const newPost = await this.prismaService.post.update({
      where: { id: exitingPost.id },
      data,
    });

    // change cache
    await this.cacheManager.set(key, newPost, POST_CONSTANTS.TIME_LIFE_CACHE);

    return newPost;
  }

  // delete post
  async deletePost(postId: string, req: Request) {
    const userId = req.user?.id || 'unknown';

    const exitingUser = await this.customCache.getUserInCache(userId);

    if (!exitingUser) {
      await this.customCache.fallBackCacheTemporaryObject(`account:${userId}`);
      throw new NotFoundException('user not found');
    }

    // available post
    const exitingPost = await this.prismaService.post.findUnique({
      where: { id: postId },
    });

    if (!exitingPost) {
      await this.customCache.fallBackCacheTemporaryObject(`account:${userId}`);
      throw new NotFoundException('Post is not found');
    }

    if (exitingPost.userId !== exitingUser.id)
      throw new UnauthorizedException('User is not author post');

    // del cache
    const key = `post:${postId}`;
    await this.cacheManager.del(key);

    // delete post
    await this.prismaService.post.delete({
      where: { id: exitingPost.id },
    });

    return {
      message: 'Done',
    };
  }

  // get detail post
  async getPost(postId: string, query: GetDetailPostDto) {
    const exitingPost = await this.customCache.getPostInCache(postId, query);

    if (!exitingPost) {
      await this.customCache.fallBackCacheTemporaryObject(`post:${postId}`);
      throw new NotFoundException('Post not found');
    }

    return exitingPost;
  }

  // find post by name
  async findPostByName(name: string, query: GetManyPostDto) {
    if (!name?.trim()) {
      throw new BadRequestException('Search content cannot be empty');
    }
    const cache = await this.customCache.getManyPostInCache(name, query);

    if (!cache) {
      const key = POST_CONSTANTS.CACHE_KEY.KeyUserWithPosts(name);
      await this.customCache.fallBackCacheTemporaryObject(key);
      throw new NotFoundException('Posts not found');
    }

    return cache;
  }

  // like post
  async likePost(req: Request, postId: string) {
    // get user in cache
    const userId = req.user?.id || 'unknow';
    const cached = await this.customCache.getUserInCache(userId);

    if (!cached) {
      const key = USER_CONSTANTS.CACHE_KEY.KeyUserWithId(userId);
      await this.customCache.fallBackCacheTemporaryObject(key);
      throw new BadRequestException('User are not existed');
    }

    // find post
    const existingPost = await this.customCache.getPostInCache(postId, {});

    const key = POST_CONSTANTS.CACHE_KEY.Postkey(postId);

    if (!existingPost) {
      await this.customCache.fallBackCacheTemporaryObject(key);
      throw new NotFoundException('Post is not available');
    }

    // del cache
    await this.cacheManager.del(key);

    const currentBehavior = await this.prismaService.behaviorWithPost.findUnique({
      where: { userId_postId: { userId, postId } },
    });

    if (currentBehavior?.behaviorIs) {
      throw new BadRequestException('Post already liked');
    }

    // update statusPost
    const behaviorWithPost = await this.prismaService.behaviorWithPost.upsert({
      where: { userId_postId: { userId, postId } },
      update: {
        behaviorIs: 'LIKE',
      },
      create: {
        postId,
        userId,
        behaviorIs: 'LIKE',
      },
    });
    // update cache
    await this.customCache.updateCache(key, behaviorWithPost);

    return {
      post: behaviorWithPost,
    };
  }

  // unliked post
  async unLikePost(req: Request, postId: string) {
    // get user in cache
    const userId = req.user?.id || 'unknow';
    const cached = await this.customCache.getUserInCache(userId);

    if (!cached) {
      const key = USER_CONSTANTS.CACHE_KEY.KeyUserWithId(userId);
      await this.customCache.fallBackCacheTemporaryObject(key);
      throw new BadRequestException('User are not existed');
    }

    // find post
    const existingPost = await this.customCache.getPostInCache(postId, {});

    const key = POST_CONSTANTS.CACHE_KEY.Postkey(postId);

    if (!existingPost) {
      await this.customCache.fallBackCacheTemporaryObject(key);
      throw new NotFoundException('Post is not available');
    }

    // del cache
    await this.cacheManager.del(key);

    const currentBehavior = await this.prismaService.behaviorWithPost.findUnique({
      where: { userId_postId: { userId, postId } },
    });

    if (!currentBehavior?.behaviorIs) {
      throw new BadRequestException('Post already unLiked');
    }

    // update statusPost
    const behaviorWithPost = await this.prismaService.behaviorWithPost.upsert({
      where: { userId_postId: { userId, postId } },
      update: {
        behaviorIs: 'DISLIKE',
      },
      create: {
        postId,
        userId,
        behaviorIs: 'DISLIKE',
      },
    });

    // update cache
    await this.customCache.updateCache(key, behaviorWithPost);

    return {
      post: behaviorWithPost,
    };
  }

  // load all author post
  async loadAllAuthorPost(authorId: string, query: LoadingAuthorPostDto) {
    const key = USER_CONSTANTS.CACHE_KEY.KeyUserPosts(authorId);

    const posts = await this.customCache.getAllUserPosts(authorId, query);

    if (!posts) {
      await this.customCache.fallBackCacheTemporaryObject(key);
      throw new NotFoundException('User have no available post');
    }

    return posts;
  }
}
