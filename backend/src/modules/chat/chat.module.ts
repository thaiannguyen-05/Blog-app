import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { ChatGatewayService } from './chat.gateway.service';
import { ChatService } from './chat.service';

@Module({
	providers: [ChatGateway, ChatService, ChatGatewayService]
})
export class ChatModule { }
