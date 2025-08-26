import { Cache, CACHE_MANAGER } from "@nestjs/cache-manager";
import { BadRequestException, ForbiddenException, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Request } from 'express';
import { PrismaService } from "src/prisma/prisma.service";
import { EditDetailDto } from "./dto/EditDetailDto";
import { CustomCacheService } from "../custom-cache/customCache.service";
import { User } from "prisma/generated/prisma";
import { USER_CONSTANTS } from "./user.constants";

const TIME_LIFE_CACHE = 10 * 24 * 60 * 60

@Injectable()
export class UserService {

    constructor(
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
        private readonly prismaService: PrismaService,
        private readonly customCacheService: CustomCacheService
    ) { }

    // trans data
    private parseDateString(dateStr: string): Date | null {
        // yyyy/mm/dd
        const match = dateStr.match(/^(\d{4})\/(\d{2})\/(\d{2})$/);
        if (!match) return null;
        const [_, year, month, day] = match;

        const date = new Date(Number(year), Number(month) - 1, Number(day));

        if (isNaN(date.getTime())) return null;

        return date
    }

    // edit information
    async editDetailUser(req: Request, data: EditDetailDto) {
        // check available user 
        const userId = req.user?.id || 'unknow'
        const exitingUser = await this.customCacheService.getUserInCache(userId)

        const key = USER_CONSTANTS.CACHE_KEY.KeyUserWithId(userId)

        if (!exitingUser) {
            await this.customCacheService.fallBackCacheTemporaryObject(key)
            throw new NotFoundException("user not found")
        }

        let date

        if (data.dateOfBirth !== undefined) {
            date = this.parseDateString(data.dateOfBirth)
        }

        // del cache
        await this.cacheManager.del(key)

        // update
        const newUser = await this.prismaService.user.update({
            where: { id: exitingUser.id },
            data: {
                dateOfBirth: date,
                name: data.name
            }
        })

        // update cache
        await this.customCacheService.updateCache(key, newUser)

        return newUser
    }

    // change avata
    async changeAvt(req: Request, file: Express.Multer.File) {
        // find available user
        const userId = req.user?.id || 'unknow'
        if (!userId) throw new ForbiddenException("Require accesstoken")

        const exitingUser = await this.customCacheService.getUserInCache(userId)

        const key = USER_CONSTANTS.CACHE_KEY.KeyUserWithId(userId)

        if (!exitingUser) {
            await this.customCacheService.fallBackCacheTemporaryObject(key)
            throw new NotFoundException("user not found")
        }

        // get file path
        const fileUrls = file.filename

        if (!fileUrls) throw new BadRequestException("File path is not empty")

        // update avt user
        const newUser = await this.prismaService.user.update({
            where: { id: exitingUser.id },
            data: { avtUrl: fileUrls }
        })

        // update cache
        await this.customCacheService.updateCache(key, newUser)

        return newUser
    }

    // load all author post
    async loadAllAuthorPost(req: Request, page: number, limit: number) {
        const userId = req.user?.id;
        if (!userId) throw new ForbiddenException("Require accesstoken");
        const key = USER_CONSTANTS.CACHE_KEY.KeyUserPosts(userId);

        const posts = await this.customCacheService.getAllUserPosts(userId, page, limit);

        if (!posts) {
            await this.customCacheService.fallBackCacheTemporaryObject(key);
            throw new NotFoundException("User have no available post");
        }

        return posts;
    }

    // find user
    async getFrolife(userId: string) {
        // check user in cache
        const cache = await this.customCacheService.getUserInCache(userId)

        if (!cache) {
            const key = USER_CONSTANTS.CACHE_KEY.KeyUserWithId(userId)
            await this.customCacheService.fallBackCacheTemporaryObject(key)
            throw new NotFoundException("User not found")
        }

        return cache
    }
}