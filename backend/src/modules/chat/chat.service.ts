import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Request } from 'express'
import { SendMessageDto } from "./dto/send-message.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Cache } from "cache-manager";
import { channel } from "diagnostics_channel";
import { User } from "prisma/generated/prisma";

@Injectable()
export class ChatService {

    constructor(
        private readonly prismaService: PrismaService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache
    ) { }

    // get user
    private async getUser(userId: string) {
        // get user from cache
        const key = `account:${userId}`
        const cached = await this.cacheManager.get(key) as User

        if (cached) return channel

        // fall back
        const exitingUser = await this.prismaService.user.findUnique({
            where: { id: userId }
        })
    }


    // save message
    async sendMessage(req: Request, data: SendMessageDto) {

        const userId = req.user?.id || 'unknown'

        const exitingUser = await this.getUser(data.receiverId)

        if(!exitingUser) throw new NotFoundException("User not found")

        // save message in cache 

    }
}