import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { BadRequestException, Inject, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { Cache } from "cache-manager";
import { Request } from 'express';
import { PrismaService } from "src/prisma/prisma.service";
import { CustomCacheService } from "../custom-cache/customCache.service";
import { GetDetailPostDto } from "./dto/get.detail.post.dto";
import { GetManyPostDto } from "./dto/get.many.post.dto";
import { POST_CONSTANTS } from "./post.constants";

const TIME_LIFE_CACHE = 10 * 24 * 60 * 60

@Injectable()
export class PostService {

    constructor(
        private readonly prismaService: PrismaService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
        private readonly customCache: CustomCacheService,
    ) { }

    // create post
    async createPost(req: Request, content: string, paths: string[]) {
        const userId = req.user?.id || 'unknow'

        const availableUser = await this.customCache.getUserInCache(userId)

        if (!availableUser) throw new NotFoundException("user not found")

        if (!content?.trim()) {
            throw new BadRequestException("Post content cannot be empty")
        }

        // create post
        const newPost = await this.prismaService.post.create({
            data: {
                content: content,
                urlImgs: paths,
                userId: availableUser.id
            }
        })

        // cache post
        const key = `post:${newPost.id}`
        await this.cacheManager.set(key, newPost, TIME_LIFE_CACHE)
        return newPost
    }

    // edit post
    async editPost(req: Request, filePaths: string[], postId: string, newContent?: string) {
        // find available post
        const exitingPost = await this.prismaService.post.findUnique({
            where: { id: postId }
        })

        if (!exitingPost) throw new NotFoundException("Post not found")

        if (!newContent?.trim()) {
            throw new BadRequestException("Post content cannot be empty")
        }

        // check validate author post
        if (req.user?.id !== exitingPost.userId) {
            await this.customCache.fallBackCacheTemporaryObject(`post:${postId}`)
            throw new UnauthorizedException("You are not author post")
        }

        // tao array linkPaths
        let urlImgs: string[] = exitingPost.urlImgs || []


        if (Array.isArray(filePaths) && filePaths.length > 0) {
            urlImgs = urlImgs.concat(filePaths)
        }

        const data = { urlImgs: urlImgs, content: newContent }

        // del cache
        const key = `post:${postId}`
        await this.cacheManager.del(key)

        // update post
        const newPost = await this.prismaService.post.update({
            where: { id: exitingPost.id },
            data
        })

        // change cache
        await this.cacheManager.set(key, newPost, TIME_LIFE_CACHE)

        return newPost
    }

    // delete post
    async deletePost(postId: string, req: Request) {
        const userId = req.user?.id || "unknown"

        const exitingUser = await this.customCache.getUserInCache(userId)

        if (!exitingUser) {
            await this.customCache.fallBackCacheTemporaryObject(`account:${userId}`)
            throw new NotFoundException("user not found")
        }

        // available post
        const exitingPost = await this.prismaService.post.findUnique({
            where: { id: postId }
        })

        if (!exitingPost) {
            await this.customCache.fallBackCacheTemporaryObject(`account:${userId}`)
            throw new NotFoundException("Post is not found")
        }

        if (exitingPost.userId !== exitingUser.id) throw new UnauthorizedException("User is not author post")

        // del cache
        const key = `post:${postId}`
        await this.cacheManager.del(key)

        // delete post
        await this.prismaService.post.delete({
            where: { id: exitingPost.id }
        })

        return {
            message: "Done"
        }
    }

    // get detail post
    async getPost(postId: string, query: GetDetailPostDto) {
        const exitingPost = await this.customCache.getPostInCache(postId, query)

        if (!exitingPost) {
            await this.customCache.fallBackCacheTemporaryObject(`post:${postId}`)
            throw new NotFoundException("Post not found")
        }

        return exitingPost
    }

    // find post by name
    async findPostByName(name: string, query: GetManyPostDto) {
        if (!name?.trim()) {
            throw new BadRequestException("Search content cannot be empty")
        }
        const cache = await this.customCache.getManyPostInCache(name, query)

        if (!cache) {
            const key = POST_CONSTANTS.CACHE_KEY.KeyUserWithPosts(name)
            await this.customCache.fallBackCacheTemporaryObject(key)
            throw new NotFoundException("Posts not found")
        }

        return cache

    }
}