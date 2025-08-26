import { Cache, CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable } from "@nestjs/common";
import { UserWithPasswordExplicit } from "../auth/auth.interface";
import { PrismaService } from "src/prisma/prisma.service";
import { AUTH_CONSTANTS } from "../auth/auth.constant";
import { isUUID } from "class-validator";
import { Post } from "prisma/generated/prisma";
import { USER_CONSTANTS } from "../user/user.constants";

const TIME_LIFE_CACHE = 10 * 24 * 60 * 60

@Injectable()
export class CustomCacheService {

    constructor(
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
        private readonly prismaService: PrismaService
    ) { }

    // validate email
    private isEmail(value: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    // get or set cache
    async getOrSet<T>(key: string, fetchFn: () => Promise<T>): Promise<T> {

        // check available cache 
        const cache = await this.cacheManager.get<T>(key)

        if (cache) return cache

        const data = await fetchFn()

        await this.cacheManager.set(key, data, TIME_LIFE_CACHE)

        return data
    }

    // get user with email in cache
    async getUserInCache(mainkey: string) {
        const key = `account:${mainkey}`
        const cached = await this.cacheManager.get(key) as UserWithPasswordExplicit

        if (cached) return cached

        let whereCondition: any = {};

        if (isUUID(mainkey)) {
            whereCondition = { id: mainkey };
        } else if (this.isEmail(mainkey)) {
            whereCondition = { email: mainkey };
        } else {
            throw new Error("mainkey must be a valid UUID or email");
        }

        // fall back 
        const exitingUser = await this.prismaService.user.findFirst({
            where: whereCondition,
            omit: { hashingPassword: false }
        })

        return exitingUser
    }

    // cache temporary
    async fallBackCacheTemporaryObject(key: string) {
        await this.cacheManager.set(key, null, AUTH_CONSTANTS.MAX_AGE_CACHE_TEMPORARY)
    }

    // update cache
    async updateCache(key: string, object: any) {
        await this.cacheManager.set(key, object, AUTH_CONSTANTS.MAX_AGE_CACHE)
    }

    // get post
    async getPostInCache(postId: string) {
        const key = `post:${postId}`
        const cache = await this.cacheManager.get(key) as Post

        if (cache) return cache

        // Fallback to database
        const existingPost = await this.prismaService.post.findUnique({
            where: {
                id: postId,
                deleteAt: null // Don't return soft-deleted posts
            },
            include: {
                user: {
                    select: { id: true, name: true, email: true }
                },
                comments: {
                    take: 10, // Limit initial comments
                    orderBy: { createAt: 'desc' },
                    include: {
                        user: { select: { id: true, name: true } }
                    }
                }
            },
        })

        // Cache the result if found
        if (existingPost) {
            await this.cacheManager.set(key, existingPost, TIME_LIFE_CACHE)
        }

        return existingPost
    }

    // get many posts in cache
    async getManyPostInCache(mainkey: string, page: number, limit: number) {
        const key = `posts:${mainkey}:${page}:${limit}`
        const cache = await this.cacheManager.get(key) as Post[]

        if (cache) return cache

        const skip = (page - 1) * limit

        const where: any = {
            status: 'PUBLIC',
            content: {
                contains: mainkey,
                mode: 'insensitive'
            },
            deleteAt: null
        }

        const [posts, total] = await Promise.all([
            this.prismaService.post.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createAt: 'desc' },
                include: {
                    user: { select: { id: true, name: true } }
                }
            }),
            this.prismaService.post.count({ where })
        ])

        if (posts.length > 0) {
            await this.cacheManager.set(key, posts, AUTH_CONSTANTS.TIME_LIFE_CACHE)
        }

        return {
            posts,
            total
        }
    }

    async getAllUserPosts(mainkey: string, page: number, limit: number) {
        const key = USER_CONSTANTS.CACHE_KEY.KeyUserPosts(mainkey)
        const cache = await this.cacheManager.get(key) as Post[]

        if (cache) return cache

        // fall back
        const skip = (page - 1) * limit

        const existingPosts = await this.prismaService.post.findMany({
            where: { userId: mainkey },
            skip,
            take: limit,
            orderBy: { createAt: 'desc' }
        })

        return existingPosts
    }
}