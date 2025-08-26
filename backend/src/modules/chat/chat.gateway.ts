import { Logger } from "@nestjs/common";
import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer, WsException } from "@nestjs/websockets";
import { Server, Socket } from 'socket.io'
import { PrismaService } from "src/prisma/prisma.service";
import { ChatService } from "./chat.service";
import { CHAT_CONSTANTS } from "./chat.constants";
import { ChatGatewayService } from "./chat.gateway.service";
import { CreateMessageDto } from "./dto/create.message.dto";
@WebSocketGateway({
	cors: {
		origin: "http://localhost:3000",
		credentials: true,
	},
})
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
	private readonly logger = new Logger(ChatGateway.name)

	@WebSocketServer()
	server: Server

	constructor(
		private readonly prismaService: PrismaService,
		private readonly chatGatewayService: ChatGatewayService,
		private readonly chatService: ChatService
	) { }

	afterInit(server: Server) {
		this.logger.log("Private chat Connected")
	}

	async handleConnection(client: Socket) {
		try {
			const userId = client.handshake.auth.userId
			const token = client.handshake.auth.token

			// validate auth
			if (!userId || !token) {
				this.logger.warn("Unauthor connected")
				client.disconnect()
				return
			}

			// verify user and token
			const user = await this.chatService.validateUser(userId, token)
			if (!user) {
				this.logger.warn(`❌ Invalid user or token: ${userId}`)
				client.disconnect()
				return
			}

			client.data.userId = userId
			client.data.user = user

			// set status user
			this.chatService.setUserOnline(userId, true)

			// join 
			client.join(CHAT_CONSTANTS.KEY.PersonalRoom(userId))

			this.server.emit('userStatusChanged', {
				userId,
				status: 'online',
				lastSeen: new Date()
			})
		} catch (error) {
			this.logger.error(`Error in handleConnection:`, error);
			client.disconnect();
		}
	}

	async handleDisconnect(client: Socket) {
		try {
			const userId = client.handshake.auth.userId
			const user = client.handshake.auth.user

			if (userId) {
				this.logger.log(`❌ User disconnected: ${user?.fullname || userId}`)

				// set user offline
				await this.chatService.setUserOnline(userId, false)

				// notification
				this.server.emit('userStatusChanged', {
					userId,
					status: 'offline',
					lastSeen: new Date()
				})
			}
		} catch (error) {
			this.logger.error(`Error in handleDisconnect:`, error)
		}
	}

	@SubscribeMessage('joinChat')
	async onJoinChat(
		@MessageBody() data: { chatId: string },
		@ConnectedSocket() client: Socket
	) {
		try {
			const { chatId } = data
			const userId = client.data.userId
			const user = client.data.user

			if (!chatId) throw new WsException('Access denied to this chat')

			const hasAccess = await this.chatService.verifyChatAccess(userId, chatId)
			if (!hasAccess) throw new WsException("Access denied to this chat")

			// leave chat rooms
			const rooms = Array.from(client.rooms)
			rooms.forEach(room => {
				if (room.startsWith('chat:')) {
					client.leave(room)
				}
			})

			await this.chatGatewayService.handleJoinRoom(client, user, chatId)

			this.logger.log(`User ${userId} joined chat ${chatId}`)

			await this.chatService.markMessagesAsRead(chatId, userId)

			return {
				success: true,
				message: 'Join chat successfully',
				chatId
			}
		} catch (error) {
			this.logger.error(`Error joining chat:`, error);
			throw new WsException(error.message || 'Failed to join chat')
		}
	}

	@SubscribeMessage('markAsRead')
	async onMarkAsRead(
		@MessageBody() data: { chatId: string },
		@ConnectedSocket() client: Socket
	) {
		try {
			const { chatId } = data
			const userId = client.data.userId

			await this.chatService.markMessagesAsRead(chatId, userId)

			client.to(CHAT_CONSTANTS.KEY.Room(chatId)).emit('messagesRead', {
				chatId,
				readBy: userId,
				timestamp: new Date()
			})

			return { success: true }
		} catch (error) {
			this.logger.error(`Error marking messages as read:`, error);
			throw new WsException('Failed to mark messages as read');
		}
	}

	@SubscribeMessage('message')
	async handleMessage(
		@MessageBody() dto: CreateMessageDto,
		@ConnectedSocket() client: Socket
	) {
		try {
			const userId = client.data.userId

			const hasAccess = await this.chatService.verifyChatAccess(userId, dto.chatId)
			if (!hasAccess) throw new WsException("Access denied to this chat")

			const newMessage = await this.chatService.createMessage(userId, dto)

			this.server.to(CHAT_CONSTANTS.KEY.Room(dto.chatId)).emit('newMessage', newMessage)

			this.logger.log(`📨 Message sent in chat ${dto.chatId} by user ${userId}`)

			return {
				success: true,
				message: 'Message sent successfully',
				data: newMessage
			}
		} catch (error) {
			this.logger.error(`Error sending message:`, error);
			throw new WsException(error.message || 'Failed to send message')
		}
	}

	async broadcastToUser(userId: string, event: string, data: any) {
		this.server.to(`user:${userId}`).emit(event, data);
	}

	async broadcastToChat(chatId: string, event: string, data: any) {
		this.server.to(`chat:${chatId}`).emit(event, data);
	}

	async broadcastNewMessage(message: any) {
		this.server.to(`chat:${message.chatId}`).emit('newMessage', message);
	}

}