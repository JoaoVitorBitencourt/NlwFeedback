import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbackReturnData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create ({ type, comment, screenshot }: FeedbackCreateData) {
        const feedback = await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot
            }
        });

        const content: FeedbackReturnData = {
            id: feedback.id,
            comment: feedback.comment,
            type: feedback.type,
            screenshot: feedback.screenshot || undefined
        }

        return content;
    };
}