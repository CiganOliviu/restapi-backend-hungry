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

export async function operateCountryController(request: Request, response: Response) {
    
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
            // empty object for now
        }

        return processUpdateRequest(response, requestData, updatedData, reviewsModel);
    }
}