import { Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { PayLoad } from '../auth/auth.interface';
import { CHAT_CONSTANTS } from './chat.constants';
import { ChatGatewayService } from './service/chat.gateway.service';
import { ConversationService } from './service/connversation.service';
import { MessgaeService } from './service/message.service';
import { AuthService } from '../auth/service/auth.service';

@WebSocketGateway({
  cors: {
    origin: '*',
    credentials: true,
  },
})
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  constructor(
    private readonly jwtService: JwtService,
    private readonly authService: AuthService,
    private readonly chatGatewayService: ChatGatewayService,
    private readonly messageService: MessgaeService,
    private readonly conversationService: ConversationService, // Thêm vào constructor
  ) {}

  private readonly logger = new Logger(ChatGateway.name);

  @WebSocketServer()
  server: Server;

  afterInit(server: Server) {
    this.logger.log('Server socket connected');
    server.use((socket: Socket, next) => {
      const token = socket.handshake.auth?.token;
      if (!token) {
        return next(new Error('Accesstoken required'));
      }

      try {
        const payload: PayLoad = this.jwtService.verify(token);
        if (!payload.sub) return null;

        socket.handshake.auth.userId = payload.sub;
        next();
      } catch (error) {
        return next(new Error('Unauthorized'));
      }
    });
  }

  async handleConnection(client: Socket) {
    try {
      const userId = client.handshake.auth.userId;
      const token = client.handshake.auth.accessToken;

      if (!userId || !token) {
        this.logger.warn('Unauthor connected');
        return client.disconnect();
      }

      // validate user
      const user = await this.authService.validate(token);
      if (user.id !== userId) {
        this.logger.warn(`Invalid user or token: ${userId}`);
        return client.disconnect();
      }

      client.data.user = user;
      client.data.userId = user.id;

      // set status
      await this.chatGatewayService.setUserOnline(user.id, true);

      // join
      await client.join(CHAT_CONSTANTS.PERSONAL_ROOM(user.id));

      // notification
      this.server.emit('userStatusChanged', {
        userId,
        status: 'online',
        lastSeen: new Date(),
      });
    } catch (error) {
      this.logger.error(`Error in handleConnection:`, error);
      client.disconnect();
    }
  }

  async handleDisconnect(client: Socket) {
    try {
      const userId = client.handshake.auth.userId;

      if (userId) {
        // set status
        await this.chatGatewayService.setUserOnline(userId, false);

        // notification
        await client.emit('userStatusChanged', {
          userId,
          status: 'offline',
          lastSeen: new Date(),
        });
      }
    } catch (error) {
      this.logger.error('Error handel', error);
    }
  }

  @SubscribeMessage('joinChat')
  async joinConversation(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { conversationId: string },
  ) {
    return await this.chatGatewayService.joinConversation(client, data.conversationId);
  }

  @SubscribeMessage('send-message')
  async sendMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { conversationId: string; content: string },
  ) {
    // Tạo DTO cho message
    const dto = { content: data.content };
    const req = { user: client.data.user } as any;
    return await this.messageService.createMessage(req, dto, data.conversationId);
  }

  @SubscribeMessage('edit-message')
  async editMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody()
    data: { conversationId: string; messageId: string; content: string },
  ) {
    const dto = { messageId: data.messageId, content: data.content };
    const req = { user: client.data.user } as any;
    return await this.messageService.editMessage(req, dto, data.conversationId);
  }

  @SubscribeMessage('delete-message')
  async deleteMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { conversationId: string; messageId: string },
  ) {
    const dto = { messageId: data.messageId };
    const req = { user: client.data.user } as any;
    return await this.messageService.deleteMessage(req, dto, data.conversationId);
  }

  @SubscribeMessage('find-message')
  async findMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody()
    data: {
      conversationId: string;
      content?: string;
      page?: number;
      limit?: number;
      cursor?: string;
    },
  ) {
    // Tạo DTO cho truy vấn tìm kiếm
    const dto = {
      content: data.content ?? '',
      page: data.page ?? 1,
      limit: data.limit ?? 20,
      cursor: data.cursor,
    };
    const req = { user: client.data.user } as any;
    return await this.messageService.findMessage(req, dto, data.conversationId);
  }

  @SubscribeMessage('load-all-message')
  async loadAllMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody()
    data: {
      conversationId: string;
      page?: number;
      limit?: number;
      cursor?: string;
    },
  ) {
    const req = { user: client.data.user } as any;
    return await this.messageService.loadAllMessage(req, data, data.conversationId);
  }

  @SubscribeMessage('create-room')
  async createRoom(@ConnectedSocket() client: Socket, @MessageBody() data: { friendId: string }) {
    const req = { user: client.data.user } as any;
    return await this.conversationService.createConversation(req, data.friendId);
  }

  @SubscribeMessage('get-room')
  async getRoom(@ConnectedSocket() client: Socket, @MessageBody() data: { friendId: string }) {
    const req = { user: client.data.user } as any;
    return await this.conversationService.getConversation(req, data.friendId);
  }

  @SubscribeMessage('delete-room')
  async deleteRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { conversationId: string },
  ) {
    const req = { user: client.data.user } as any;
    return await this.conversationService.delConversation(req, data.conversationId);
  }

  @SubscribeMessage('load-all-room')
  async loadAllRoom(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { page?: number; limit?: number; cursor?: string },
  ) {
    const req = { user: client.data.user } as any;
    return await this.conversationService.loadingConversation(req, data);
  }
}
