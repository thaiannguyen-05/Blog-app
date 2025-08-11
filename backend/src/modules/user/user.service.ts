import { Cache, CACHE_MANAGER } from "@nestjs/cache-manager";
import { BadRequestException, ForbiddenException, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Request } from 'express';
import { PrismaService } from "src/prisma/prisma.service";
import { EditDetailDto } from "./dto/EditDetailDto";
import { CustomCacheService } from "../custom-cache/customCache.service";
import { User } from "prisma/generated/prisma";

const TIME_LIFE_CACHE = 10 * 24 * 60 * 60

@Injectable()
export class UserService {

    constructor(
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
        private readonly prismaService: PrismaService,
        private readonly customCacheService: CustomCacheService
    ) { }

    // pipe data
    private parseDateString(dateStr: string): Date | null {
        // yyyy/mm/dd
        const match = dateStr.match(/^(\d{4})\/(\d{2})\/(\d{2})$/);
        if (!match) return null;
        const [_, year, month, day] = match;

        const date = new Date(Number(year), Number(month) - 1, Number(day));

        if (isNaN(date.getTime())) return null;

        return date
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

    // edit information
    async editDetailUser(req: Request, data: EditDetailDto) {

        // check available user 
        const userId = req.user?.id

        if (!userId) throw new ForbiddenException("Require accesstoken")

        const exitingUser = await this.getUser(userId)

        if (!exitingUser) throw new NotFoundException("user not found")

        let date

        if (data.dateOfBirth !== undefined && data.dateOfBirth !== null) {
            date = this.parseDateString(data.dateOfBirth)
        }

        // update
        const newUser = await this.prismaService.user.update({
            where: { id: exitingUser.id },
            data: {
                dateOfBirth: date,
                name: data.name
            }
        })

        // cache user
        const key = `account:${exitingUser.id}`
        await this.cacheManager.del(key)
        await this.cacheManager.set(key, newUser, TIME_LIFE_CACHE)

        return newUser
    }

    // change avate
    async changeAvt(req: Request, file: Express.Multer.File) {

        // find available user
        const userId = req.user?.id

        if (!userId) throw new ForbiddenException("Require accesstoken")

        const exitingUser = await this.getUser(userId)

        if (!exitingUser) throw new NotFoundException("user not found")

        // get file path
        const fileUrls = file.filename

        if (!fileUrls) throw new BadRequestException("File path is not empty")

        // update avt user
        const newUser = await this.prismaService.user.update({
            where: { id: exitingUser.id },
            data: { avtUrl: fileUrls }
        })

        // update cache
        const key = `account:${exitingUser.id}`
        await this.cacheManager.del(key)
        await this.cacheManager.set(key, newUser, TIME_LIFE_CACHE)

        return newUser
    }

    // load all author post
    async loadAllAuthorPost(req: Request) {
        // check cache
        const key = `account-all-post:${req.user?.id}`

        let listPost = await this.customCacheService.getOrSet(key, () =>
            this.prismaService.post.findMany({
                where: { userId: req.user?.id }
            })
        )

        return listPost
    }

    // find user
    async getFrolife(userId: string) {
        // check user in cache
        const key = `user:${userId}`

        // call get or set cache
        const exitingUser = await this.customCacheService.getOrSet(key, () =>
            this.prismaService.user.findUnique({
                where: { id: userId }
            })
        )

        return exitingUser
    }

    // get permission
    async getPermisson(userId: string) {
        // get user
        const exitingUser = await this.prismaService.user.findUnique({
            where: { id: userId },
            include: { userRoles: { select: { role: true }} }
        })

        return exitingUser
    }
}