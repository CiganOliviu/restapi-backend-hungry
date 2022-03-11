import { Request, Response } from 'express';
import countriesModel from '../models/countries.model';
import { getInstanceById } from '../utils/general.controllers';

export async function getCountryController(request: Request, response: Response) {
    
    return getInstanceById(request, response, countriesModel);
}