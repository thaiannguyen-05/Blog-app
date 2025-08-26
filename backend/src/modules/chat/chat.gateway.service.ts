import { Injectable, Logger } from "@nestjs/common";
import { User } from "prisma/generated/prisma";
import { Socket } from "socket.io";
import { PrismaService } from "src/prisma/prisma.service";
import { CHAT_CONSTANTS } from "./chat.constants";

@Injectable()
export class ChatGatewayService {

	private readonly logger = new Logger(ChatGatewayService.name)

	constructor(
		private readonly prismaService: PrismaService
	) { }

	async handleJoinRoom(client: Socket, user: User, chatId: string): Promise<boolean> {
		try {
			const chat = await this.prismaService.privateChat.findUnique({
				where: { id: chatId },
				select: {
					id: true,
					user1Id: true,
					user2Id: true
				}
			})

			if (!chat) {
				client.emit('joinRoomError', { message: 'Chat not found' })
				return false
			}

			// check if user is either user1 or user2 in this chat
			if (chat.user1Id !== user.id && chat.user2Id !== user.id) {
				client.emit('joinRoomError', { message: 'you are not client in this chat' })
				return false
			}

			const room = CHAT_CONSTANTS.KEY.Room(chatId)
			await client.join(room)

			client.emit('joinedRoom', { chatId, room })
			this.logger.log(`User ${user.id} joined private chat room ${room}`)
			return true
		} catch (error) {
			this.logger.error(`Error joining room: ${error.message}`, error.stack)
			client.emit('joinRoomError', { message: 'Failed to join room' })
			return false
		}
	}



}