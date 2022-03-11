import { Request, Response } from 'express';
import schemasModel from '../models/schemas.model';
import { getInstanceById } from '../utils/general.controllers';

export async function getSchemaController(request: Request, response: Response) {
    
    return getInstanceById(request, response, schemasModel);
}