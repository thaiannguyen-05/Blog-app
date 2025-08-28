import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, Reflector } from '@nestjs/core';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { GraphQLModule } from '@nestjs/graphql';
import { ThrottlerModule } from '@nestjs/throttler';
import { join } from 'node:path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthCookieGuard } from './modules/auth/guard/auth-cookie.guard';
import { ChatModule } from './modules/chat/chat.module';
import { CommentModule } from './modules/comment/comment.module';
import { CustomCacheModule } from './modules/custom-cache/customCache.module';
import { LoggerModule } from './modules/logger/logger.module';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { FilesModule } from './modules/files/files.module';
@Module({
  imports: [AuthModule, UserModule, PrismaModule, EmailModule, CustomCacheModule, CommentModule, ChatModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      graphiql: process.env.NODE_ENV !== 'production',
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      installSubscriptionHandlers: true,// ho tro realtime socket
      context: ({ req }) => ({ req })
    }),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60000,
          limit: 10,
        },
      ],
    }),
    EventEmitterModule.forRoot(),
    ChatModule,
    LoggerModule,
    FilesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      inject: [Reflector],
      useFactory: (reflector: Reflector) => new AuthCookieGuard(reflector),
    },
  ],
})
export class AppModule { }
