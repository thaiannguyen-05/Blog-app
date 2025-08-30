import { BadRequestException, Injectable, Logger, NotFoundException, OnModuleDestroy } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import Redis from "ioredis";
import { Socket } from "socket.io";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ChatGatewayService implements OnModuleDestroy {

	private readonly logger = new Logger(ChatGatewayService.name)
	private redis: Redis
	// using redis adapter
	constructor(
		private readonly prismaService: PrismaService,
		private readonly configService: ConfigService
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

	// join conversation
	async joinConversation(client: Socket, conversationId: string): Promise<boolean> {
		try {
			// get data
			const user = client.data.user
			const userId = user.id

			if (!userId) throw new BadRequestException("Accesstoken required")

			// check availabe conversation
			const availableConversation = await this.prismaService.conversation.findUnique({
				where: { id: conversationId }
			})

			if (!availableConversation) throw new NotFoundException("Conversation not found")

			const socketId = availableConversation.socketId

			// join conversation
			await client.join(socketId)

			// notification join
			client.emit('joinedConversation', { socketId })
			this.logger.log(`User: ${userId} joined ${socketId}`)

			return true
		} catch (error) {
			this.logger.log(`${error}`)
			client.emit('joinError', { message: 'Failed to join room' })
			return false
		}
	}

	// set user online
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
			this.logger.log('Error set user online', error)
		}
	}

	// get status user
	async isUserOnline(userId: string) {
		const data = await this.redis.hget('user_status', userId)
		if (!data) return false

		try {
			const { status } = JSON.parse(data)
			return status === 'online'
		} catch (error) {
			return false
		}
	}

}