import { Request, Response } from 'express';
import foodCategoriesModel from '../models/foodCategories.model';
import { getInstanceById } from '../utils/general.controllers';

export async function getFoodCategoryController(request: Request, response: Response) {
    
    return getInstanceById(request, response, foodCategoriesModel);
}