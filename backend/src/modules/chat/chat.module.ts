import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { ChatGatewayService } from './chat.gateway.service';
import { ChatService } from './chat.service';
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
	providers: [ChatGateway, ChatService, ChatGatewayService]
})
export class ChatModule { }
