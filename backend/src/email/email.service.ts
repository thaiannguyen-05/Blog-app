import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Cache } from "cache-manager";
import { promises as fs } from 'fs';
import * as nodemailer from 'nodemailer';
import { join } from 'path';

@Injectable()
export class EmailService {

    private readonly logger = new Logger()
    private transporter: nodemailer.Transporter
    private templateCache = new Map<string, string>()

    constructor(
        private readonly configService: ConfigService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ) {
        // create transport
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: configService.getOrThrow<string>("EMAIL_USER"),
                pass: configService.getOrThrow<string>("EMAIL_PASS")
            }
        })
    }

    // get template
    async getTemplate(templateName: string): Promise<string> {
        if (this.templateCache.has(templateName)) {
            return this.templateCache.get(templateName)!
        }

        try {
            const templatePath = join(__dirname, 'templates', `${templateName}.html`)
            const content = await fs.readFile(templatePath, 'utf8')
            this.templateCache.set(templateName, content)
            return content
        } catch (error) {
            this.logger.error(`Template not found: ${templateName}`, error);
            throw new Error(`Template "${templateName}" not found.`);
        }
    }

    // send notification register
    async sendNotificationRegister(toEmail: string, verifyLink: string) {
        try {
            // get template 
            const deleteLink = 'http://localhost:4000/auth/delete-email?email=' + toEmail

            const template = await this.getTemplate('notification-register')
            const subject = "Verify Account"
            const html = (await template)
                .replace("{verify_link}", verifyLink)
                .replace("{delete_link}", deleteLink)

            const mailOptions = {
                from: `Thaiandev Service: ${this.configService.getOrThrow<string>("EMAIL_USER")}`,
                to: toEmail,
                subject,
                html
            }

            // send email
            return await this.transporter.sendMail(mailOptions)

        } catch (error) {
            this.logger.error('Send email failed:', error)
            return null
        }
    }

    // send email notification changepassword
    async sendNotificationChangePassword(toEmail: string) {
        // get template 
        const template = await this.getTemplate("notification-changepassword")

        const subject = "Notification"

        const html = await template

        const mailOptions = {
            from: `Thaiandev Service: ${this.configService.getOrThrow<string>("EMAIL_USER")}`,
            to: toEmail,
            subject,
            html
        }

        // send email
        return await this.transporter.sendMail(mailOptions)
    }

    // send email notification other device
    async sendNotificaitonOtherDevice(toEmail: string, userAgent: string, userIp: string) {
        // get template 
        const template = await this.getTemplate('notification-other-device-login')

        const subject = "Detect Other device"

        const html = await template
                    .replace('{USER_AGENT}', userAgent)
                    .replace('{USER_IP}', userIp)
        const mailOptions = {
            from: `Thaiandev Service: ${this.configService.getOrThrow<string>("EMAIL_USER")}`,
            to: toEmail,
            subject,
            html
        }

        // send email
        return await this.transporter.sendMail(mailOptions)
    }


}