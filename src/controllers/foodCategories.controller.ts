import { Request, Response } from 'express';
import foodCategoriesModel from '../models/foodCategories.model';
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

export async function operateFoodCategoriesController(request: Request, response: Response) {

    if (isGetRequest(request)) {
        return processGetRequest(response, foodCategoriesModel);
    }

    if (isPostRequest(request)) {
        return processPostRequest(request, response, foodCategoriesModel);
    }

    if (isDeleteRequest(request)) {
        return processDeleteRequest(request, response,  foodCategoriesModel);
    }

    if (isUpdateRequest(request)) {
        const requestData = request.body;
        const oldData = await foodCategoriesModel.find({ _id: requestData._id });

        const updatedData = {
            name: requestData.name || oldData[0].name,
        }

        return processUpdateRequest(response, requestData, updatedData, foodCategoriesModel);
    }
}