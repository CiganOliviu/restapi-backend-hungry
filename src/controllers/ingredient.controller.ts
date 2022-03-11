import { Request, Response } from 'express';
import ingredientsModel from '../models/ingredients.model';
import { getInstanceById } from '../utils/general.controllers';

export async function getIngredientController(request: Request, response: Response) {
    
    return getInstanceById(request, response, ingredientsModel); 
}