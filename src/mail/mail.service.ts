import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendNotice(vehicle: string, email: string) {
    await this.mailerService.sendMail({
      to: 'peanutfalcon2020@gmail.com',
      subject: 'High Emmitting Vehicle',
      template: './notice',
      context: {
        vehicle: vehicle,
      },
    });
  }
}
