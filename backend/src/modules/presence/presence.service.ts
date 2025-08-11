import { Injectable, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { createClient, RedisClientType } from 'redis';

@Injectable()
export class PresenceService implements OnModuleInit {

    constructor(
        private readonly configService: ConfigService
    ) { }

    private redisClient: RedisClientType

    async onModuleInit() {
        this.redisClient = createClient({
            url: this.configService.getOrThrow<string>('REDIS_URL')
        })
        await this.redisClient.connect()
    }

    async setUserOnline(userId: string) {
        await this.redisClient.sAdd('onlineUsers', userId)
    }

    async setUserOffline(userId: string) {
        await this.redisClient.sRem('online', userId)
    }

    async isUserOnline(userId: string){
        return await this.redisClient.sIsMember('onlineUsers', userId)
    }

    async getAllOnlineUsers(): Promise<string[]> {
        return await this.redisClient.sMembers('onlineUsers')
    }

}