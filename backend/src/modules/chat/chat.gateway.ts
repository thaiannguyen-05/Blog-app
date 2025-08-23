import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    MessageBody,
    ConnectedSocket,
    OnGatewayConnection,
    OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import { createClient } from 'redis';
import { ChatService } from './chat.service';
import { SendMessageDto } from './dto/send-message.dto';
import { JoinRoomDto } from './dto/join-room.dto';

@WebSocketGateway({
    cors: { origin: '*' },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    constructor(private readonly chatService: ChatService) { }

    async afterInit() {
        await this.initRedisAdapter();
    }

    async initRedisAdapter() {
        const pubClient = createClient({ url: 'redis://localhost:6379' })
        const subClient = pubClient.duplicate()

        await Promise.all([pubClient.connect(), subClient.connect()])

        this.server.adapter(createAdapter(pubClient, subClient))
        console.log('✅ Redis adapter connected')
    }

    handleConnection(client: Socket) {
        console.log(`🔌 Client connected: ${client.id}`)
    }

    handleDisconnect(client: Socket) {
        console.log(`❌ Client disconnected: ${client.id}`)
    }

    @SubscribeMessage('join_room')
    async handleJoinRoom(
        @ConnectedSocket() client: Socket,
        @MessageBody() data: JoinRoomDto
    ) {
        client.join(data.roomId);
        console.log(`👤 User ${data.userId} joined room ${data.roomId}`)

        // Notify others in the room
        client.to(data.roomId).emit('user_joined', {
            userId: data.userId,
            roomId: data.roomId
        });
    }

    @SubscribeMessage('leave_room')
    async handleLeaveRoom(
        @ConnectedSocket() client: Socket,
        @MessageBody() data: JoinRoomDto
    ) {
        client.leave(data.roomId);
        console.log(`👤 User ${data.userId} left room ${data.roomId}`)

        // Notify others in the room
        client.to(data.roomId).emit('user_left', {
            userId: data.userId,
            roomId: data.roomId
        });
    }

    @SubscribeMessage('send_message')
    async handleSendMessage(
        @ConnectedSocket() client: Socket,
        @MessageBody() data: SendMessageDto
    ) {
        try {
            const savedMessage = await this.chatService.storeMessage(
                client.handshake.auth.access_token,
                data
            );

            // Emit to all clients in the room
            this.server.to(data.roomId).emit("receive_message", {
                ...savedMessage,
                timestamp: new Date()
            });
        } catch (error) {
            client.emit('error', { message: 'Failed to send message' })
        }
    }

    @SubscribeMessage('get_messages')
    async handleGetMessage(
        @ConnectedSocket() client: Socket,
        @MessageBody() data: { roomId: string; page?: number; limit?: number }
    ) {
        try {
            const messages = await this.chatService.loadingMessage(
                client.handshake.auth.access_token,
                data.roomId,
                data.page || 1,
                data.limit || 20
            );

            client.emit("messages_loaded", {
                roomId: data.roomId,
                messages: messages
            });
        } catch (error) {
            client.emit('error', { message: 'Failed to load messages' })
        }
    }

    @SubscribeMessage('get_rooms')
    async handleGetRooms(@ConnectedSocket() client: Socket) {
        try {
            const rooms = await this.chatService.getUserRooms(
                client.handshake.auth.access_token
            );

            client.emit("rooms_loaded", rooms);
        } catch (error) {
            client.emit('error', { message: 'Failed to load rooms' })
        }
    }

    @SubscribeMessage('typing_start')
    async handleTypingStart(
        @ConnectedSocket() client: Socket,
        @MessageBody() data: { roomId: string; userId: string }
    ) {
        client.to(data.roomId).emit('user_typing', {
            userId: data.userId,
            roomId: data.roomId,
            isTyping: true
        });
    }

    @SubscribeMessage('typing_stop')
    async handleTypingStop(
        @ConnectedSocket() client: Socket,
        @MessageBody() data: { roomId: string; userId: string }
    ) {
        client.to(data.roomId).emit('user_typing', {
            userId: data.userId,
            roomId: data.roomId,
            isTyping: false
        });
    }

    @SubscribeMessage('mark_read')
    async handleMarkRead(
        @ConnectedSocket() client: Socket,
        @MessageBody() data: { roomId: string }
    ) {
        try {
            await this.chatService.markMessagesAsRead(
                client.handshake.auth.access_token,
                data.roomId
            );

            client.to(data.roomId).emit('messages_read', {
                roomId: data.roomId,
                readBy: client.handshake.auth.userId
            });
        } catch (error) {
            client.emit('error', { message: 'Failed to mark messages as read' });
        }
    }
}