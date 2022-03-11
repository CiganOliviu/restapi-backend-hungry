import { Request, Response } from 'express';
import recipesModel from '../models/recipes.model';
import { getInstanceById } from '../utils/general.controllers';


export async function getRecipeController(request: Request, response: Response) {
    
    return getInstanceById(request, response, recipesModel);
}