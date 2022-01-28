import { Request, Response } from "express";
import reviewsModel from "../models/reviews.model";

export async function createReviewEntryControllers(request: Request, response: Response) {

    const { numberOfStars, comment, postedOn, editedAt, author } = request.body;
    const newReviewEntry = await reviewsModel.create({ numberOfStars, comment, postedOn, editedAt, author });

    return response.send(newReviewEntry);
}