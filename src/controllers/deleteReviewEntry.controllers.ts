import { Request, Response } from "express";
import reviewsModel from "../models/reviews.model";

export async function deleteReviewEntryControllers(request: Request, response: Response) {

    const { id } = request.body;
    const deleteReviewEntry = await reviewsModel.deleteOne({ _id : id });

    return response.send(deleteReviewEntry);
}