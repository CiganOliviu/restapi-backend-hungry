import { Request, Response } from "express";
import reviewsModel from "../models/reviews.model";

export async function updateReviewEntryController(request: Request, response: Response) {
    const { numberOfStars, numberOfStarsToUpdate,
            comment, commentToUpdate,
            postedOn, postedOnToUpdate,
            editedAt, editedAtToUpdate,
            author, authorToUpdate,
        } = request.body;

    const filterData = {
        numberOfStars: numberOfStars,
        comment: comment,
        postedOn: postedOn,
        editedAt: editedAt,
        author: author
    };

    const updateData = {
        numberOfStars: numberOfStarsToUpdate,
        comment: commentToUpdate,
        postedOn: postedOnToUpdate,
        editedAt: editedAtToUpdate,
        author: authorToUpdate
    };

    const data = await reviewsModel.findOneAndUpdate(filterData, updateData);

    if (data) {
        console.log(`Data ${data} was updated!`);
    }

    return response.status(200).json;
}