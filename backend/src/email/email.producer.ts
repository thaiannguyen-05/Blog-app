import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ExmailProducerService {
  constructor(@Inject('EMAIL_SERVICE') private readonly client: ClientProxy) {}

  async sendNotificationRegister(data: { to: string; verifyLink: string }) {
    await this.client.emit('email_send_register', data);
  }

  async sendChangePasswordEmail(data: { to: string }) {
    await this.client.emit('email_send_change_password', data);
  }

  async sendDetectDevice(data: { to: string; userAgent: string; userIp: string }) {
    await this.client.emit(`email_send_detect_device`, data);
  }
}
