import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "3757ca5e3bf612",
      pass: "87bc9c6cb7558a"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <teste@feedget.com>',
            to: 'João Vitor <joaov.vbsb@gmail.com>',
            subject: subject,
            html: body
        });
    };
}