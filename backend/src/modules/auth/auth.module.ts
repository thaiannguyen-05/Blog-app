import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CustomCacheModule } from '../custom-cache/customCache.module';
import { EmailModule } from 'src/email/email.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthCookieStrategy } from 'src/modules/auth/strategy/auth-cookie.strategy';
import { TokenService } from './token.service';

@Module({
    imports: [
        CustomCacheModule, EmailModule, CustomCacheModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.getOrThrow<string>("JWT_SECRET"),
                signOptions: { expiresIn: '1d'}
            })
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, AuthCookieStrategy, TokenService],
    exports: [AuthService]
})
export class AuthModule { }
