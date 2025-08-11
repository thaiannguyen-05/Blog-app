import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MulterModule } from '@nestjs/platform-express';
import { PostModule } from '../post/post.module';
import { CustomCacheModule } from '../custom-cache/customCache.module';
import { UserResolver } from './user.resolver';
import { CommentModule } from '../comment/comment.module';

@Module({
    imports: [
        PostModule, CustomCacheModule, CommentModule,
        MulterModule.registerAsync({
            useFactory: () => ({
                dest: './upload',
            }),
        }),
    ],
    controllers: [UserController],
    providers: [UserService, UserResolver],
    exports: [UserService]
})
export class UserModule { }
