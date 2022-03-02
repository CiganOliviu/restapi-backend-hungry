import { Request, response, Response } from 'express';
import { request } from 'http';
import { requestMethods } from '../configurations/configurations';
import countriesModel from '../models/countries.model';
import { isDeleteRequest, isGetRequest, isPostRequest, isUpdateRequest } from '../utils/general.controllers';

export async function operateCountryController(request: Request, response: Response) {
    
    if (isGetRequest(request)) {
        return 'GET';
    }

    if (isPostRequest(request)) {
        return 'POST';
    }

    if (isDeleteRequest(request)) {
        return 'DELETE'; 
    }

    if (isUpdateRequest(request)) {
        return 'UPDATE';
    }
}