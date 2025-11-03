import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AUTH_CONSTANTS } from '../auth/auth.constant';
import { isUUID } from 'class-validator';
import { Post, User } from 'prisma/generated/prisma';
import { USER_CONSTANTS } from '../user/user.constants';
import { GetDetailPostDto } from '../post/dto/get.detail.post.dto';
import { POST_CONSTANTS } from '../post/post.constants';
import { GetManyPostDto } from '../post/dto/get.many.post.dto';
import { LoadingAuthorPostDto } from '../post/dto/LoadingAuthorPost.dto';
import { UserWithPasswordExplicit } from '../auth/auth.interface';

const TIME_LIFE_CACHE = 10 * 24 * 60 * 60;

@Injectable()
export class CustomCacheService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly prismaService: PrismaService,
  ) {}

  // validate email
  private isEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  // get or set cache
  async getOrSet<T>(key: string, fetchFn: () => Promise<T>): Promise<T> {
    // check available cache
    const cache = await this.cacheManager.get<T>(key);

    if (cache) return cache;

    const data = await fetchFn();

    await this.cacheManager.set(key, data, TIME_LIFE_CACHE);

    return data;
  }

  // get user with email in cache
  async getUserInCache(mainkey: string) {
    const key = `account:${mainkey}`;
    const cached = (await this.cacheManager.get(key)) as UserWithPasswordExplicit;

    if (cached) return cached;

    let whereCondition: any = {};

    if (isUUID(mainkey)) {
      whereCondition = { id: mainkey };
    } else if (this.isEmail(mainkey)) {
      whereCondition = { email: mainkey };
    } else {
      whereCondition = { userName: mainkey };
    }

    // fall back
    const exitingUser = await this.prismaService.user.findFirst({
      where: whereCondition,
      omit: { hashingPassword: false },
    });

    return exitingUser;
  }

  // cache temporary
  async fallBackCacheTemporaryObject(key: string) {
    await this.cacheManager.set(key, null, AUTH_CONSTANTS.MAX_AGE_CACHE_TEMPORARY);
  }

  // update cache
  async updateCache(key: string, object: any) {
    await this.cacheManager.set(key, object, AUTH_CONSTANTS.MAX_AGE_CACHE);
  }

  // get post
  async getPostInCache(postId: string, query: GetDetailPostDto) {
    const key = `post:${postId}`;
    const cache = (await this.cacheManager.get(key)) as Post;

    if (cache) return cache;

    const { page = 1, limit = 20, cursor } = query;
    const skip = (page - 1) * limit;

    const whereClaude: any = { postId, deleteAt: null };

    if (cursor) {
      whereClaude.id = { lt: parseInt(cursor) };
    }

    // Fallback to database
    const existingPost = await this.prismaService.post.findUnique({
      where: whereClaude,
      include: {
        user: {
          select: { id: true, name: true, email: true },
        },
        comments: {
          orderBy: { createAt: 'desc' },
          take: limit + 1, // Limit initial comments
          skip: cursor ? 0 : skip,
          include: {
            user: { select: { id: true, name: true } },
          },
        },
      },
    });

    // Cache the result if found
    if (existingPost) {
      await this.cacheManager.set(key, existingPost, TIME_LIFE_CACHE);
    }

    return existingPost;
  }

  // get many posts in cache
  async getManyPostInCache(mainkey: string, query: GetManyPostDto) {
    const key = POST_CONSTANTS.CACHE_KEY.KeyUserWithPosts(mainkey);
    const cache = (await this.cacheManager.get(key)) as Post[];

    if (cache) return cache;

    const { page = 1, limit = 20, cursor } = query;

    const skip = (page - 1) * limit;

    const whereClause: any = {
      status: 'PUBLIC',
      content: {
        contains: mainkey,
        mode: 'insensitive',
      },
      deleteAt: null,
    };

    if (cursor) {
      whereClause.id = { lt: parseInt(cursor) };
    }

    const [posts, total] = await Promise.all([
      this.prismaService.post.findMany({
        where: whereClause,
        orderBy: { createAt: 'desc' },
        take: limit + 1,
        skip: cursor ? 0 : skip,
        include: {
          user: { select: { id: true, name: true } },
        },
      }),
      this.prismaService.post.count({ where: whereClause }),
    ]);

    if (posts.length > 0) {
      await this.cacheManager.set(key, posts, AUTH_CONSTANTS.TIME_LIFE_CACHE);
    }

    return {
      posts,
      total,
    };
  }

  async getAllUserPosts(mainkey: string, query: LoadingAuthorPostDto) {
    const key = USER_CONSTANTS.CACHE_KEY.KeyUserPosts(mainkey);
    const cache = (await this.cacheManager.get(key)) as Post[];

    if (cache) return cache;

    // fall back
    const { page = 1, limit = 20, cursor } = query;

    const whereClause: any = { userId: mainkey };

    const skip = (page - 1) * limit;

    if (cursor) {
      whereClause.id = { lt: parseInt(cursor) };
    }

    const [posts, total] = await Promise.all([
      this.prismaService.post.findMany({
        where: whereClause,
        orderBy: { createAt: 'desc' },
        take: limit + 1,
        skip: cursor ? 0 : skip,
        include: {
          user: { select: { id: true, name: true } },
        },
      }),
      this.prismaService.post.count({ where: whereClause }),
    ]);

    if (posts.length > 0) {
      await this.cacheManager.set(key, posts, AUTH_CONSTANTS.TIME_LIFE_CACHE);
    }

    return {
      posts,
      total,
    };
  }

  async cacheLagerOfDatauser(mainkey: string, listUser: User[]) {
    try {
      const key = USER_CONSTANTS.CACHE_KEY.KeyUserWithName(mainkey);
      return await this.cacheManager.set(key, listUser, USER_CONSTANTS.MAX_AGE_CACHE_TEMPORARY);
    } catch (error) {
      throw new BadRequestException('Do not set the cache', error);
    }
  }

  async getListUserByName(mainkey: string) {
    const key = USER_CONSTANTS.CACHE_KEY.KeyUserWithName(mainkey);
    return await this.cacheManager.get(key);
  }
}
