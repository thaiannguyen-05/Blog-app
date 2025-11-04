import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthConstantsService {
  constructor(private readonly configService: ConfigService) {}

  get TIME_LIFE_CACHE() {
    return 10 * 24 * 60 * 60; // 10 days
  }

  get TIME_LIFE_SESSION() {
    return 10 * 365 * 24 * 60 * 60 * 1000; // 10 years
  }

  get TIME_LIFE_ACCESS_TOKEN() {
    return this.configService.get<number>('JWT_ACCESS_EXPIRES_IN', 1000 * 60 * 60); // 1h
  }

  get TIME_LIFE_REFRESH_TOKEN() {
    return this.configService.get<number>('JWT_REFRESH_EXPIRES_IN', 24 * 60 * 60 * 7); // 7d
  }

  get MAX_AGE_CACHE_TEMPORARY() {
    return 60 * 1000; // 60 seconds
  }

  get MAX_AGE_CACHE() {
    return 60 * 60 * 1000; // 1 hour
  }

  CACHE_KEY = {
    KeyUserWithId: (mainkey: string) => `account:${mainkey}`,
    KeyUserWithEmail: (mainkey: string) => `account:${mainkey}`,
  };

  get COOKIE_CONFIG() {
    const isProduction = this.configService.get<string>('NODE_ENV') === 'production';

    return {
      SESSION: {
        httpOnly: true,
        secure: isProduction,
        sameSite: 'lax' as const,
      },
      REFRESH_TOKEN: {
        httpOnly: true,
        secure: isProduction,
        sameSite: 'lax' as const,
        path: '/',
      },
      ACCESS_TOKEN: {
        httpOnly: true,
        secure: isProduction,
        sameSite: 'lax' as const,
        path: '/',
      },
    };
  }
}
