import { BadRequestException, Injectable, NotFoundException, OnModuleDestroy } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { Redis } from 'ioredis'
import { PayLoad } from "../auth/auth.interface";
import { PrismaService } from "src/prisma/prisma.service";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { CreateMessageDto } from "./dto/create.message.dto";
import { FindAllPrivateMessageDto } from "./dto/find.message.chat.dto";
@Injectable()
export class ChatService implements OnModuleDestroy {
	private redis: Redis

	constructor(
		private readonly configService: ConfigService,
		private readonly jwtService: JwtService,
		private readonly prismaService: PrismaService,
		private readonly evenEmitter: EventEmitter2
	) {
		const redisUrl = this.configService.getOrThrow<string>("REDIS_URL")
		this.redis = new Redis(redisUrl)

		this.redis.on('error', (error) => {
			console.log('Redis connection error:', error)
		})
	}

	async onModuleDestroy() {
		await this.redis.disconnect()
	}

	async validateUser(userId: string, token: string) {
		try {
			// verify jwt token
			const payload: PayLoad = this.jwtService.verify(token)
			if (payload.sub != userId) return null

			// get user in db
			const user = await this.prismaService.user.findUnique({
				where: { id: userId },
				select: {
					id: true,
					name: true,
					email: true
				}
			})

			return user
		} catch (error) {
			console.error('Error validating user:', error)
			return null
		}
	}

	async setUserOnline(userId: string, isOnline: boolean) {
		try {

			const status = isOnline ? 'online' : 'offline'
			const timestamp = new Date().toISOString()

			await this.redis.hset('user_status', userId, JSON.stringify({
				status,
				lastSeen: timestamp
			}))

			// update database last seen
			if (!isOnline) {
				await this.prismaService.user.update({
					where: { id: userId },
					data: { lastSeen: new Date() }
				})
			}
		} catch (error) {
			console.error('Error setting user online status', error)
			throw error
		}
	}

	async verifyChatAccess(userId: string, chatId: string): Promise<boolean> {
		try {
			const chat = await this.prismaService.privateChat.findFirst({
				where: {
					id: chatId,
					OR: [
						{ user1Id: userId },
						{ user2Id: userId }
					]
				}
			})

			return !!chat
		} catch (error) {
			console.error("Error verifying chat access", error)
			return false
		}
	}

	async markMessagesAsRead(chatId: string, userId: string) {
		try {
			// verify user has access this chat
			const chat = await this.prismaService.privateChat.findFirst({
				where: {
					id: chatId,
					OR: [
						{ user1Id: userId },
						{ user2Id: userId }
					]
				}
			})

			if (!chat) throw new NotFoundException("Chat not found or access denied")

			// update lastReadIndex 
			const isUser1 = chat.user1Id === userId
			const updateuser = isUser1
				? { user1LastReadIndex: chat.totalMessage }
				: { user2LastReadIndex: chat.totalMessage }

			// emit event for real-time updates
			this.evenEmitter.emit('messages.read', {
				chatId,
				userId,
				readIndex: chat.totalMessage
			})

		} catch (error) {
			console.error('Error marking messages as read:', error);
			if (error instanceof NotFoundException) throw error;
			throw new BadRequestException('Failed to mark messages as read')
		}
	}

	async createMessage(userId: string, dto: CreateMessageDto) {
		try {
			// verify chat and user has access
			const chat = await this.prismaService.privateChat.findFirst({
				where: {
					id: dto.chatId,
					OR: [
						{ user1Id: userId },
						{ user2Id: userId }
					]
				},
				include: {
					user1: { select: { id: true, name: true } },
					user2: { select: { id: true, name: true } }
				}
			})

			if (!chat) throw new NotFoundException("Chat not found or access denied")

			const totalMessage = chat?.totalMessage + 1

			// create message
			const result = await this.prismaService.$transaction(async (tx) => {
				const newMessage = await tx.privateMessage.create({
					data: {
						content: dto.content,
						senderId: userId,
						chatId: dto.chatId,
						messageIndex: totalMessage
					},
					include: {
						sender: {
							select: { id: true, name: true }
						}
					}
				})

				await tx.privateChat.update({
					where: { id: dto.chatId },
					data: {
						lastMessageAt: new Date(),
						lastMessage: dto.content,
						totalMessage: { increment: 1 }
					}
				})

				// emit event
				this.evenEmitter.emit('private.message.created', {
					newMessage: result,
					chat,
					recipientId: chat.user1Id === userId ? chat.user2Id : chat.user1Id
				})

				return newMessage
			})

			return result
		} catch (error) {
			console.error('Error creating message :', error)
			if (error instanceof NotFoundException) throw error
			throw new BadRequestException('Failed to create message')
		}
	}

	async createOrChat(user1Id: string, user2Id: string) {
		try {
			if (user1Id === user2Id) {
				throw new BadRequestException('Cannot create chat with yourself')
			}

			// check if chat already exists
			let chat = await this.prismaService.privateChat.findFirst({
				where: {
					OR: [
						{ user1Id, user2Id },
						{ user1Id: user2Id, user2Id: user1Id }
					]
				},
				include: {
					user1: { select: { id: true, name: true } },
					user2: { select: { id: true, name: true } }
				}
			})

			// fall back new chat
			if (!chat) {
				chat = await this.prismaService.privateChat.create({
					data: {
						user1Id,
						user2Id
					},
					include: {
						user1: { select: { id: true, name: true } },
						user2: { select: { id: true, name: true } }
					}
				})
			}

			return chat
		} catch (error) {
			console.error('Error creating/getting chat:', error)
			throw new BadRequestException('Failed to create or get chat')
		}
	}

}