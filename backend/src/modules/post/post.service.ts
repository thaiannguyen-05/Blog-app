import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { Cache } from "cache-manager";
import { Request } from 'express'
import { Post, User } from "prisma/generated/prisma";
import { PrismaService } from "src/prisma/prisma.service";

const TIME_LIFE_CACHE = 10 * 24 * 60 * 60

@Injectable()
export class PostService {

    constructor(
        private readonly prismaService: PrismaService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache
    ) { }

    // get post
    private async getPost(postId: string) {
        // get post in cache 
        const key = `post:${postId}`
        const cache = await this.cacheManager.get(key) as Post

        if (cache) return cache

        // fall back
        const exitingPost = await this.prismaService.post.findUnique({
            where: { id: postId }
        })

        return exitingPost
    }

    // get user
    private async getUser(userId: string) {
        const key = `account:${userId}`
        const cache = await this.cacheManager.get(key) as User

        if (cache) return cache

        // fall back 
        const exitingUser = await this.prismaService.user.findUnique({
            where: { id: userId }
        })

        return exitingUser
    }

    // create post
    async createPost(req: Request, content: string, files: Array<Express.Multer.File>) {
        const userId = req.user?.id || ""

        const exitingUser = await this.getUser(userId)

        if (!exitingUser) throw new NotFoundException("user not found")

        // filter file name
        const urlFiles = files.map(file => file.filename)

        // cache user
        const keyUser = `account:${exitingUser.id}`
        await this.cacheManager.set(keyUser, exitingUser, TIME_LIFE_CACHE)

        // create post
        const newPost = await this.prismaService.post.create({
            data: {
                content: content,
                urlImgs: urlFiles,
                userId: exitingUser.id
            }
        })

        // cache post
        const key = `post:${newPost.id}`
        await this.cacheManager.set(key, newPost, TIME_LIFE_CACHE)

        return newPost
    }

    // edit post
    async editPost(req: Request, files: Array<Express.Multer.File>, newContent: string, postId: string) {
        const exitingPost = await this.getPost(postId)

        if (!exitingPost) throw new NotFoundException("Post not found")

        // check author post
        if (req.user?.id !== exitingPost.userId) {
            throw new UnauthorizedException("You are not author post")
        }

        let urlFiles: string[] = exitingPost.urlImgs || [];

        if (Array.isArray(files) && files.length > 0) {
            const newFileNames = files.map(file => file.filename)
            urlFiles = urlFiles.concat(newFileNames)
        }

        const data = { urlImgs: urlFiles, content: newContent }

        // update post
        const newPost = await this.prismaService.post.update({
            where: { id: exitingPost.id },
            data
        })

        // change cache
        const key = `post:${postId}`
        await this.cacheManager.del(key)
        await this.cacheManager.set(key, newPost, TIME_LIFE_CACHE)

        return newPost
    }

    // delete post
    async deletePost(postId: string, req: Request) {
        const userId = req.user?.id || ""

        const exitingUser = await this.getUser(userId)

        if (!exitingUser) throw new NotFoundException("user not found")

        // cache user
        const keyUser = `account:${exitingUser?.id}`
        await this.cacheManager.set(keyUser, exitingUser, TIME_LIFE_CACHE)

        // available post
        const exitingPost = await this.getPost(postId)

        if (!exitingPost) throw new NotFoundException("Post is not found")

        if (exitingPost.userId !== exitingUser.id) throw new UnauthorizedException("User is not author post")

        // delete post
        await this.prismaService.post.delete({
            where: { id: exitingPost.id }
        })

        // delete cache post
        const key = `post:${postId}`
        await this.cacheManager.del(key)

        return {
            message: "Done"
        }
    }

    // get detail post
    async getDetailPost(postId: string) {

        const exitingPost = await this.getPost(postId)

        if (!exitingPost) throw new NotFoundException("Post not found")

        // cache
        const key = `post:${postId}`
        await this.cacheManager.set(key, exitingPost, TIME_LIFE_CACHE)

        return exitingPost
    }
}