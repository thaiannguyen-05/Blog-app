import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Cache } from "cache-manager";
import { Request } from 'express';
import { Message, User } from "prisma/generated/prisma";
import { PrismaService } from "src/prisma/prisma.service";
import { PresenceService } from "../presence/presence.service";
import { SendMessageDto } from "./dto/send-message.dto";
import { AuthService } from "../auth/auth.service";

const TIME_FILE_MESSAGE_IN_CACHE = 24 * 60 * 60 * 7
const LIMIT_LOAD = 20
@Injectable()
export class ChatService {

    constructor(
        private readonly prismaService: PrismaService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
        private readonly presenceService: PresenceService,
        private readonly authService: AuthService
    ) { }

    // get user
    private async getUser(userId: string) {
        // get user from cache
        const key = `account:${userId}`
        const cached = await this.cacheManager.get(key) as User

        if (cached) return cached

        // fall back
        const exitingUser = await this.prismaService.user.findUnique({
            where: { id: userId }
        })

        return exitingUser
    }

    // save message
    async storeMessage(access_token: string, data: SendMessageDto) {

        const exitingUser = await this.authService.validate(access_token)

        if (!exitingUser) throw new NotFoundException("User not found")

        // check status user
        const isUserOnline = await this.presenceService.isUserOnline(exitingUser.id)

        if (isUserOnline) {
            // save message in database
            const newMessage = await this.prismaService.message.create({
                data: {
                    content: data.content,
                    senderID: exitingUser.id,
                    receiverID: data.receiverId,
                    roomId: data.roomId,
                }
            })

            return newMessage
        }

        // fallback save message in cache
        const key = `message:${data.content}:${data.roomId}`
        const cacheMessage = await this.cacheManager.set(key, data.content, TIME_FILE_MESSAGE_IN_CACHE)
        return cacheMessage
    }

    // loading message
    async loadingMessage(access_token: string, roomId: string) {
        const exitingUser = await this.authService.validate(access_token)

        if (!exitingUser) throw new NotFoundException("User not found")

        const readProcess = await this.prismaService.readProgress.findFirst({
            where: {
                roomId: roomId,
                userId: exitingUser.id
            }
        })

        const numberMessage = readProcess?.messageId || 0 + LIMIT_LOAD

        // loading message in cache
        const key = `messages:${roomId}:${readProcess?.messageId || 0}:${numberMessage}`
        const cached = await this.cacheManager.get(key) as Message[]

        if (cached) return cached

        // fall back get message from database
        const messages = await this.prismaService.message.findMany({
            where: { roomId: roomId },
            take: numberMessage,
            skip: readProcess?.messageId || 0
        })

        // update read progress
        await this.prismaService.readProgress.update({
            where: {
                roomId: roomId,
                userId: exitingUser.id
            },
            data: { messageId: numberMessage }
        })

        // cache message
        await this.cacheManager.set(key, messages, TIME_FILE_MESSAGE_IN_CACHE)

        return messages
    }
}