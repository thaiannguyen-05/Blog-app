import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { MyLogger } from './modules/logger/my.logger.dev';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // logger: false
  })

  app.useLogger(new MyLogger())

  app.use(cookieParser())
  app.enableCors({
    origin: "http://localhost:3000", // your frontend origin
    credentials: true,
  });

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'email_queue',
      queueOptions: {
        durable: false,
      },
    },
  })

  app.getHttpAdapter().getInstance().set('trust proxy', 1)

  await app.startAllMicroservices();
  await app.listen(4000);
}
bootstrap();