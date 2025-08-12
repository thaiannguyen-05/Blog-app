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
        const pubClient = createClient({ url: 'redis://localhost:6379' });
        const subClient = pubClient.duplicate();

        await Promise.all([pubClient.connect(), subClient.connect()]);

        this.server.adapter(createAdapter(pubClient, subClient));
        console.log('✅ Redis adapter connected');
    }

    handleConnection(client: Socket) {
        console.log(`🔌 Client connected: ${client.id}`);
    }

    handleDisconnect(client: Socket) {
        console.log(`❌ Client disconnected: ${client.id}`);
    }

    @SubscribeMessage('send_message')
    async handleSendMessage(
        @ConnectedSocket() client: Socket,
        @MessageBody() data: SendMessageDto
    ) {
        this.chatService.storeMessage(client.handshake.auth.access_token, data)
        this.server.emit("receive_message", data.content)
    }

    @SubscribeMessage('get_messages')
    async handleGetMessage(@ConnectedSocket() client: Socket, @MessageBody() data: { roomId: string }) {
        this.server.emit("receive_message", await this.chatService.loadingMessage(client.handshake.auth.access_token, data.roomId))
    }

}