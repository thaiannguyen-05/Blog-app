import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';
import { ChatGatewayService } from './chat.gateway.service';

@Module({
	providers: [ChatGateway, ChatService, ChatGatewayService]
})
export class ChatModule { }
