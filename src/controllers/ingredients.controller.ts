import { Request, Response } from 'express';
import ingredientsModel from '../models/ingredients.model';
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

export async function operateIngredientController(request: Request, response: Response) {

    if (isGetRequest(request)) {
        return processGetRequest(response, ingredientsModel);
    }

    if (isPostRequest(request)) {
        return processPostRequest(request, response, ingredientsModel);
    }

    if (isDeleteRequest(request)) {
        return processDeleteRequest(request, response,  ingredientsModel);
    }

    if (isUpdateRequest(request)) {
        const requestData = request.body;
        const oldData = await ingredientsModel.find({ _id: requestData._id });

        const updatedData = {
            name: requestData.name || oldData[0].name,
        }

        return processUpdateRequest(response, requestData, updatedData, ingredientsModel);
    }
}