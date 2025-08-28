import { Module } from '@nestjs/common';
import { CustomCacheModule } from '../custom-cache/customCache.module';
import { UserController } from './user.controller';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
    imports: [CustomCacheModule],
    controllers: [UserController],
    providers: [UserService, UserResolver],
    exports: [UserService]
})
export class UserModule { }
