import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { ExmailProducerService } from './email.producer';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { EmailConumer } from './email.consumer';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'EMAIL_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'email_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [EmailConumer],
  providers: [EmailService, ExmailProducerService],
  exports: [EmailService, ExmailProducerService],
})
export class EmailModule {}
