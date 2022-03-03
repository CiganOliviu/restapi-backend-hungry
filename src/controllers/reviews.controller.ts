import { Request, Response } from 'express';
import reviewsModel from '../models/reviews.model';

import { 
    isDeleteRequest, 
    isGetRequest, 
    isPostRequest, 
    isUpdateRequest, 
    processDeleteRequest, 
    processGetRequest, 
    processPostRequest,
    processUpdateRequest,
} from '../utils/general.controllers';

export async function operateReviewsController(request: Request, response: Response) {
    
    if (isGetRequest(request)) {
        return processGetRequest(response, reviewsModel);
    }

    if (isPostRequest(request)) {
        return processPostRequest(request, response, reviewsModel);
    }

    if (isDeleteRequest(request)) {
        return processDeleteRequest(request, response, reviewsModel);
    }

    if (isUpdateRequest(request)) {
        const requestData = request.body;
        const oldData = await reviewsModel.find({ _id: requestData._id });

        const updatedData = {
            numberOfStars: requestData.numberOfStars || oldData[0].numberOfStars,
            comment: requestData.comment || oldData[0].comment,
            postedOn: requestData.postedOn || oldData[0].postedOn,
            editedAt: requestData.editedAt || oldData[0].editedAt,
            author: requestData.author || oldData[0].author,
        }

        return processUpdateRequest(response, requestData, updatedData, reviewsModel);
    }
}