import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { CustomCacheModule } from '../custom-cache/customCache.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EmailModule } from '../../email/email.module';
import { AuthCookieStrategy } from './strategy/auth-cookie.strategy';
import { AuthConstantsService } from './auth.constant';
import { AuthService } from './service/auth.service';
import { TokenService } from './service/token.service';

@Module({
  imports: [
    CustomCacheModule,
    EmailModule,
    CustomCacheModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.getOrThrow<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1d' },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthCookieStrategy, TokenService, AuthConstantsService],
  exports: [AuthService, AuthConstantsService],
})
export class AuthModule {}
