import { Request, Response } from "express";
import reviewsModel from "../models/reviews.model";

export async function getReviewsEntriesControllers(request: Request, response: Response) {

    const data = await reviewsModel.find({});

    return response.send(data);
}