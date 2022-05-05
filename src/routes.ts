import express from "express";
import { prisma } from "./prisma";

import { SubmitFeedback } from "./services/submit-feedback";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
    const { type, comment, screenshot } = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();

    const submitFeedback = new SubmitFeedback(
        prismaFeedbacksRepository, 
        nodemailerMailAdapter
    );

    const feedback = await submitFeedback.execute({
        type,
        comment,
        screenshot
    })

    return res.status(201).json({data: feedback});
})