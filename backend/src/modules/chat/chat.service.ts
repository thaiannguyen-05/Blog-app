import { BadRequestException, ForbiddenException, Injectable, NotFoundException, OnModuleDestroy } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { JwtService } from "@nestjs/jwt";
import { Redis } from 'ioredis';
import { PrismaService } from "src/prisma/prisma.service";
import { PayLoad } from "../auth/auth.interface";
import { CreateMessageDto } from "./dto/create.message.dto";
import { FindAllPrivateChatDto } from "./dto/find.all.message.dto";
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

	async findMessage(currendUserId: string, chatId: string, query: FindAllPrivateMessageDto) {
		try {
			// verify access
			const hasAccess = await this.verifyChatAccess(currendUserId, chatId)
			if (!hasAccess) throw new ForbiddenException('Access denied to this chat')

			const { page = 1, limit = 20, cursor } = query
			const skip = (page - 1) * limit

			const whereClaude: any = { chatId }

			if (cursor) {
				whereClaude.id = { lt: parseInt(cursor) }
			}

			const messages = await this.prismaService.privateMessage.findMany({
				where: whereClaude,
				orderBy: { createdAt: 'desc' },
				take: limit + 1,
				skip: cursor ? 0 : skip,
				include: {
					sender: {
						select: {
							id: true,
							name: true
						}
					}
				}
			})

			const hasMore = messages.length > limit
			const items = hasMore ? messages.slice(0, -1) : messages
			const nextCursor = items.length > 0 ? items[items.length - 1].id.toString() : null

			return {
				items: items.reverse(),
				pagination: {
					page,
					limit,
					hasMore,
					nextCursor,
					total: await this.prismaService.privateMessage.count({ where: { chatId } })
				}
			}

		} catch (error) {
			console.error('Error finding messages:', error);
			if (error instanceof ForbiddenException) {
				throw error;
			}
			throw new BadRequestException('Failed to retrieve messages')
		}
	}

	async findChatHistory(userId: string, query: FindAllPrivateChatDto) {
		try {
			const { page = 1, limit = 20, search } = query
			const skip = (page - 1) * limit

			const whereClaude: any = {
				OR: [
					{ user1Id: userId },
					{ user2Id: userId }
				]
			}

			if (search) {
				whereClaude.AND = {
					OR: [
						{ user1: { name: { contains: search, mode: 'insensitive' } } },
						{ user2: { name: { contains: search, mode: 'insensitive' } } }
					]
				}
			}

			const chats = await this.prismaService.privateChat.findMany({
				where: whereClaude,
				orderBy: { lastMessageAt: 'desc' },
				take: limit,
				skip,
				include: {
					user1: {
						select: {
							id: true,
							name: true
						}
					},
					user2: {
						select: {
							id: true,
							name: true
						}
					}
				}
			})

			const total = await this.prismaService.privateChat.count({ where: whereClaude })

			return {
				items: chats.map(chat => {
					const isUser1 = chat.user1Id === userId
					const lastReadIndex = isUser1 ? chat.user1LastReadIndex : chat.user2LastReadIndex
					const unreadCount = Math.max(0, chat.totalMessage - lastReadIndex)

					return {
						...chat,
						otheruser: isUser1 ? chat.user2 : chat.user1,
						unreadCount
					}
				}),
				pagination: {
					page,
					limit,
					total,
					totalPages: Math.ceil(total / limit),
					hasMore: skip + limit < total
				}
			}
		} catch (error) {
			console.error('Error finding chat history:', error);
			throw new BadRequestException('Failed to retrieve chat history');
		}
	}

}