import { Cache, CACHE_MANAGER } from "@nestjs/cache-manager";
import { BadRequestException, ForbiddenException, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Request } from 'express';
import { PrismaService } from "src/prisma/prisma.service";
import { CustomCacheService } from "../custom-cache/customCache.service";
import { EditDetailDto } from "./dto/EditDetailDto";
import { FindUserByName } from "./dto/FindUserByName";
import { USER_CONSTANTS } from "./user.constants";
import { LoadingAuthorPostDto } from "../post/dto/LoadingAuthorPost.dto";

@Injectable()
export class UserService {

    constructor(
        @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
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

    // get blackList
    public async getBlackList(authorId: string) {
        const blackList = await this.prismaService.blockedUser.findMany({
            where: { userId: authorId }
        })

        return blackList
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
    async changeAvt(req: Request, filePath: string) {
        // find available user
        const userId = req.user?.id || 'unknow'
        if (!userId) throw new ForbiddenException("Require accesstoken")

        const exitingUser = await this.customCacheService.getUserInCache(userId)

        const key = USER_CONSTANTS.CACHE_KEY.KeyUserWithId(userId)

        if (!exitingUser) {
            await this.customCacheService.fallBackCacheTemporaryObject(key)
            throw new NotFoundException("user not found")
        }

        if (!filePath) throw new BadRequestException("File path is not empty")

        // update avt user
        const newUser = await this.prismaService.user.update({
            where: { id: exitingUser.id },
            data: { avtUrl: filePath }
        })

        // update cache
        await this.customCacheService.updateCache(key, newUser)

        return newUser
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

    // find user by name
    async findUserByName(name: string, query: FindUserByName) {
        const { page = 1, limit = 20, cursor } = query;
        const skip = (page - 1) * limit;

        // get in cache
        const cachedUsers = await this.customCacheService.getListUserByName(name)
        if (Array.isArray(cachedUsers) && cachedUsers.length > 0) {
            const hasMore = cachedUsers.length > limit;
            const items = hasMore ? cachedUsers.slice(0, -1) : cachedUsers;
            const nextCursor = items.length > 0 ? items[items.length - 1].id.toString() : null;
            let total: number | null = null;
            if (page === 1 && !cursor) {
                total = cachedUsers.length;
            }
            return {
                items,
                pagination: {
                    page,
                    limit,
                    hasMore,
                    nextCursor,
                    total
                }
            };
        }

        const whereClause: any = { name: { contains: name, mode: 'insensitive' } };
        if (cursor) {
            whereClause.id = { lt: parseInt(cursor) };
        }

        const listUser = await this.prismaService.user.findMany({
            where: whereClause,
            take: limit + 1,
            skip: cursor ? 0 : skip,
        });

        const hasMore = listUser.length > limit;
        const items = hasMore ? listUser.slice(0, -1) : listUser;
        const nextCursor = items.length > 0 ? items[items.length - 1].id.toString() : null;

        let total: number | null = null;
        if (page === 1 && !cursor) {
            total = await this.prismaService.user.count({
                where: { name: { contains: name, mode: 'insensitive' } },
            });
        }

        // cache
        await this.customCacheService.cacheLagerOfDatauser(name, items);

        return {
            items,
            pagination: {
                page,
                limit,
                hasMore,
                nextCursor,
                total
            }
        };
    }

    // following
    async following(req: Request, addressUserId: string) {
        // get user in cache
        const userId = req.user?.id || 'unknow'
        const cached = await this.customCacheService.getUserInCache(userId)

        if (!cached) {
            const key = USER_CONSTANTS.CACHE_KEY.KeyUserWithId(userId)
            await this.customCacheService.fallBackCacheTemporaryObject(key)
            throw new BadRequestException('User are not existed')
        }

        // get addressUser in cache
        const addressCached = await this.customCacheService.getUserInCache(addressUserId)

        if (!addressCached) {
            const key = USER_CONSTANTS.CACHE_KEY.KeyUserWithId(addressUserId)
            await this.customCacheService.fallBackCacheTemporaryObject(key)
            throw new BadRequestException('Address user are not existed')
        }

        const existedFollowing = await this.prismaService.following.findUnique({
            where: { userId_addressUserId: { userId, addressUserId } }
        })

        if (existedFollowing) {
            throw new BadRequestException("User is already followed")
        }

        // create relation following
        const [newFollowing, newFollower] = await this.prismaService.$transaction([
            this.prismaService.following.create({
                data: { addressUserId, userId }
            }),
            this.prismaService.follower.create({
                data: { followerId: userId, userId: addressUserId }
            })
        ]);

        return {
            newFollowing: newFollowing,
            newFollower: newFollower
        }
    }

    // unfollowing
    async unfollowing(req: Request, addressUserId: string) {
        // get user in cache
        const userId = req.user?.id || 'unknow'
        const cached = await this.customCacheService.getUserInCache(userId)

        if (!cached) {
            const key = USER_CONSTANTS.CACHE_KEY.KeyUserWithId(userId)
            await this.customCacheService.fallBackCacheTemporaryObject(key)
            throw new BadRequestException('User are not existed')
        }

        // get addressUser in cache
        const addressCached = await this.customCacheService.getUserInCache(addressUserId)

        if (!addressCached) {
            const key = USER_CONSTANTS.CACHE_KEY.KeyUserWithId(addressUserId)
            await this.customCacheService.fallBackCacheTemporaryObject(key)
            throw new BadRequestException('Address user are not existed')
        }

        const existedFollowing = await this.prismaService.following.findUnique({
            where: { userId_addressUserId: { userId, addressUserId } }
        })

        if (!existedFollowing) {
            throw new BadRequestException("Relation is not existed")
        }

        // delete relation 
        await this.prismaService.$transaction([
            this.prismaService.following.delete({
                where: { userId_addressUserId: { userId, addressUserId } }
            }),
            this.prismaService.follower.delete({
                where: {
                    userId: addressUserId,
                    followerId: userId
                }
            })
        ])

        return {
            success: true
        }
    }

    // block user
    async blockUser(req: Request, addressUserId: string) {
        // get user in cache
        const userId = req.user?.id || 'unknow'
        const cached = await this.customCacheService.getUserInCache(userId)

        if (!cached) {
            const key = USER_CONSTANTS.CACHE_KEY.KeyUserWithId(userId)
            await this.customCacheService.fallBackCacheTemporaryObject(key)
            throw new BadRequestException('User are not existed')
        }

        // get addressUser in cache
        const addressCached = await this.customCacheService.getUserInCache(addressUserId)

        if (!addressCached) {
            const key = USER_CONSTANTS.CACHE_KEY.KeyUserWithId(addressUserId)
            await this.customCacheService.fallBackCacheTemporaryObject(key)
            throw new BadRequestException('Address user are not existed')
        }

        // block user
        await this.prismaService.blockedUser.create({
            data: { userId: addressCached.id }
        })

        return {
            status: "successful"
        }
    }
}