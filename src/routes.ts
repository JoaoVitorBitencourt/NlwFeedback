import express from "express";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";

export const routes = express.Router();

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "3757ca5e3bf612",
      pass: "87bc9c6cb7558a"
    }
});

routes.post("/feedbacks", async (req, res) => {
    const { type, comment, screenshot } = req.body;

    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot
        }
    });

    await transport.sendMail({
        from: 'Equipe Feedget <teste@feedget.com>',
        to: 'João Vitor <joaov.vbsb@gmail.com>',
        subject: 'Novo feedback',
        html: [
            `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
            `<p>Tipo do feedback: ${type}</p>`,
            `<p>Comentário: ${comment}</p>`,
            `</div>`
        ].join('\n')
    });

    return res.status(201).json({ data: feedback });
})