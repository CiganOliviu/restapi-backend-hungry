import { Request, Response } from 'express';
import countriesModel from '../models/countries.model';
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

export async function operateCountriesController(request: Request, response: Response) {
    
    if (isGetRequest(request)) {
        return processGetRequest(response, countriesModel);
    }

    if (isPostRequest(request)) {
        return processPostRequest(request, response, countriesModel);
    }

    if (isDeleteRequest(request)) {
        return processDeleteRequest(request, response,  countriesModel);
    }

    if (isUpdateRequest(request)) {
        const requestData = request.body;
        const oldData = await countriesModel.find({ _id: requestData._id });

        const updatedData = {
            name: requestData.name || oldData[0].name,
        }

        return processUpdateRequest(response, requestData, updatedData, countriesModel);
    }
}