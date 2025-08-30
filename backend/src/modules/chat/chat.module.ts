import { Module } from '@nestjs/common';
import { ChatGatewayService } from './service/chat.gateway.service';
import { ConversationService } from './service/connversation.service';
import { MessgaeService } from './service/message.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
	imports: [
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: async (configService: ConfigService) => ({
				secret: configService.getOrThrow<string>("JWT_SECRET"),
				signOptions: { expiresIn: '1d' }
			})
		}),
	],
	providers: [ChatGatewayService, ConversationService, MessgaeService],
	exports: [ChatGatewayService, ConversationService, MessgaeService]
})
export class ChatExampleModule { }
