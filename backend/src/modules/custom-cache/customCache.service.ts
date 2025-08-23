import { Cache, CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable } from "@nestjs/common";
import { UserWithPasswordExplicit } from "../auth/auth.interface";
import { PrismaService } from "src/prisma/prisma.service";
import { AUTH_CONSTANTS } from "../auth/auth.constant";
import { isUUID } from "class-validator";

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
    async fallBackCacheTemporaryUser(mainkey: string) {
        const key = `account:${mainkey}`
        await this.cacheManager.set(key, null, AUTH_CONSTANTS.MAX_AGE_CACHE_TEMPORARY)
    }

    // update cache
    async updateCache(mainkey: string, object: any) {
        const key = `account:${mainkey}`
        await this.cacheManager.set(key, object, AUTH_CONSTANTS.MAX_AGE_CACHE)
    }
}