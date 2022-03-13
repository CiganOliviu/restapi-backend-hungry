import { Request, Response } from 'express';
import schemasModel from '../models/schemas.model';

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

export async function operateSchemasController(request: Request, response: Response) {

    if (isGetRequest(request)) {
        return processGetRequest(response, schemasModel);
    }

    if (isPostRequest(request)) {
        return processPostRequest(request, response, schemasModel);
    }

    if (isDeleteRequest(request)) {
        return processDeleteRequest(request, response, schemasModel);
    }

    if (isUpdateRequest(request)) {
        const requestData = request.body;
        const oldData = await schemasModel.find({ _id: requestData._id });

        const updatedData = {
            name: requestData.name || oldData[0].name,
            routes: requestData.routes || oldData[0].routes,
        }

        return processUpdateRequest(response, requestData, updatedData, schemasModel);
    }
}