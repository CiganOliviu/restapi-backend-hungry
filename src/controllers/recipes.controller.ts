import { Request, Response } from 'express';
import recipesModel from '../models/recipes.model';
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

export async function operateRecipesController(request: Request, response: Response) {
    
    if (isGetRequest(request)) {
        return processGetRequest(response, recipesModel);
    }

    if (isPostRequest(request)) {
        return processPostRequest(request, response, recipesModel);
    }

    if (isDeleteRequest(request)) {
        return processDeleteRequest(request, response,  recipesModel);
    }

    if (isUpdateRequest(request)) {
        const requestData = request.body;
        const oldData = await recipesModel.find({ _id: requestData._id });

        const updatedData = {
            name: requestData.name || oldData[0].name,
            difficulty: requestData.difficulty || oldData[0].difficulty,
            originalCountry: requestData.originalCountry || oldData[0].originalCountry,
            categories: requestData.categories || oldData[0].categories,
            description: requestData.description || oldData[0].description,
            preparation: requestData.preparation || oldData[0].preparation,
            total_time: requestData.totalTime || oldData[0].totalTime,
            categoryOfIngredients: requestData.categoryOfIngredients || oldData[0].categoryOfIngredients,
            picture: requestData.picture || oldData[0].picture,
            preparationTime: requestData.preparationTime || oldData[0].preparationTime,
            cookTime: requestData.cookTime || oldData[0].cookTime,
            portions: requestData.portions || oldData[0].portions,
            calories: requestData.calories || oldData[0].calories,
            reviews: requestData.reviews || oldData[0].reviews,
            createdAt: requestData.createdAt || oldData[0].createdAt,
            updatedAt: requestData.updatedAt || oldData[0].updatedAt,
            status: requestData.status || oldData[0].status,
        }

        return processUpdateRequest(response, requestData, updatedData, recipesModel);
    }
}