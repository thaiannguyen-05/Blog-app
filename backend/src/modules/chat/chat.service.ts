import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Cache } from "cache-manager";
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

    // create or get room
    async createOrGetRoom(userId1: string, userId2: string) {
        // Check if room already exists by looking for rooms with both users as members
        const existingRoom = await this.prismaService.room.findFirst({
            where: {
                members: {
                    every: {
                        userId: {
                            in: [userId1, userId2]
                        }
                    }
                }
            },
            include: {
                members: true
            }
        });

        if (existingRoom && existingRoom.members.length === 2) {
            return existingRoom;
        }

        // Create new room
        const newRoom = await this.prismaService.room.create({
            data: {
                roomId: `room_${Date.now()}`,
                nameRoom: `Chat between ${userId1} and ${userId2}`,
                members: {
                    create: [
                        { userId: userId1 },
                        { userId: userId2 }
                    ]
                }
            },
            include: {
                members: true
            }
        });

        return newRoom;
    }

    // save message
    async storeMessage(access_token: string, data: SendMessageDto) {
        const exitingUser = await this.authService.validate(access_token)

        if (!exitingUser) throw new NotFoundException("User not found")

        // save message in database
        const newMessage = await this.prismaService.message.create({
            data: {
                content: data.content,
                senderID: exitingUser.id,
                receiverID: data.receiverId,
                roomId: data.roomId,
                messageType: data.messageType || 'text',
            },
            include: {
                sender: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        avtUrl: true
                    }
                },
                receiver: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        avtUrl: true
                    }
                }
            }
        })

        // Clear cache for this room
        const cacheKey = `messages:${data.roomId}`
        await this.cacheManager.del(cacheKey)

        return newMessage
    }

    // loading message
    async loadingMessage(access_token: string, roomId: string, page: number = 1, limit: number = LIMIT_LOAD) {
        const exitingUser = await this.authService.validate(access_token)

        if (!exitingUser) throw new NotFoundException("User not found")

        const skip = (page - 1) * limit;

        // loading message in cache
        const key = `messages:${roomId}:${page}:${limit}`
        const cached = await this.cacheManager.get(key) as Message[]

        if (cached) return cached

        // fall back get message from database
        const messages = await this.prismaService.message.findMany({
            where: { roomId: roomId },
            take: limit,
            skip: skip,
            orderBy: { createAt: 'desc' },
            include: {
                sender: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        avtUrl: true
                    }
                },
                receiver: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        avtUrl: true
                    }
                }
            }
        })

        // cache message
        await this.cacheManager.set(key, messages, TIME_FILE_MESSAGE_IN_CACHE)

        return messages.reverse(); // Return in chronological order
    }

    // Get user's chat rooms
    async getUserRooms(access_token: string) {
        const exitingUser = await this.authService.validate(access_token)

        if (!exitingUser) throw new NotFoundException("User not found")

        const rooms = await this.prismaService.room.findMany({
            where: {
                members: {
                    some: {
                        userId: exitingUser.id
                    }
                }
            },
            include: {
                members: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                name: true,
                                email: true,
                                avtUrl: true
                            }
                        }
                    }
                },
                messages: {
                    take: 1,
                    orderBy: { createAt: 'desc' },
                    include: {
                        sender: {
                            select: {
                                id: true,
                                name: true,
                                avtUrl: true
                            }
                        }
                    }
                }
            },
            orderBy: {
                updateAt: 'desc'
            }
        });

        return rooms;
    }

    // Mark messages as read
    async markMessagesAsRead(access_token: string, roomId: string) {
        const exitingUser = await this.authService.validate(access_token)

        if (!exitingUser) throw new NotFoundException("User not found")

        await this.prismaService.message.updateMany({
            where: {
                roomId: roomId,
                receiverID: exitingUser.id,
                isRead: false
            },
            data: {
                isRead: true
            }
        });

        return { success: true };
    }
}