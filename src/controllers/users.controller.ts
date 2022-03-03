import { Request, Response } from 'express';
import usersModel from '../models/users.model';
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

export async function operateUsersController(request: Request, response: Response) {
    
    if (isGetRequest(request)) {
        return processGetRequest(response, usersModel);
    }

    if (isPostRequest(request)) {
        return processPostRequest(request, response, usersModel);
    }

    if (isDeleteRequest(request)) {
        return processDeleteRequest(request, response,  usersModel);
    }

    if (isUpdateRequest(request)) {
        const requestData = request.body;
        const oldData = await usersModel.find({ _id: requestData._id });

        const updatedData = {
            username: requestData.username || oldData[0].username,
            first_name: requestData.first_name || oldData[0].firstName,
            last_name: requestData.last_name || oldData[0].lastName,
            email: requestData.email || oldData[0].email,
            password: requestData.password || oldData[0].password,
            isAdmin: requestData.isAdmin || oldData[0].isAdmin
        }

        return processUpdateRequest(response, requestData, updatedData, usersModel);
    }
}