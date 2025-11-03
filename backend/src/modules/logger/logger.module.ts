import { Module } from '@nestjs/common';
import { MyLogger } from './my.logger.dev';

@Module({
  providers: [MyLogger],
})
export class LoggerModule {}
