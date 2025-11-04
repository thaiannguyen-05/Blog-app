import { createKeyv } from '@keyv/redis';
import { CacheModule } from '@nestjs/cache-manager';
import { forwardRef, Global, Module } from '@nestjs/common';
import { CacheableMemory, Keyv } from 'cacheable';
import Redis from 'ioredis';
import { CustomCacheService } from './customCache.service';
import { AuthModule } from '../auth/auth.module';
@Global()
@Module({
  imports: [
    CacheModule.registerAsync({
      useFactory: async () => {
        return {
          stores: [
            new Keyv({
              store: new CacheableMemory({ ttl: 60000, lruSize: 5000 }),
            }),
            createKeyv('redis://localhost:6379'),
          ],
        };
      },
    }),
    forwardRef(() => AuthModule),
  ],
  providers: [
    CustomCacheService,
    {
      provide: 'IORedis',
      useFactory: () => new Redis({ host: 'localhost', port: 6379 }),
    },
  ],
  exports: [CustomCacheService, CacheModule, 'IORedis'],
})
export class CustomCacheModule {}
