import { Module } from '@nestjs/common';
import { CustomCacheModule } from '../custom-cache/customCache.module';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [CustomCacheModule],
  controllers: [PostController],
  providers: [PostService],
  exports: [PostService],
})
export class PostModule {}
