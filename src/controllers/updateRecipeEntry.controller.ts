import { Request, Response } from "express";
import recipesModel from "../models/recipes.models";
import { getClientMessageBasedOnData, getStatusBasedOnData } from "../utils/dataValidator";

export async function updateRecipeEntryController(request: Request, response: Response) {
    const {
        name, difficulty, originalCountry, categories,
        description, status,
        nameToUpdate, difficultyToUpdate, originalCountryToUpdate,
        categoriesToUpdate, descriptionToUpdate, preparationToUpdate,
        totalTimeToUpdate, categoryOfIngredientsToUpdate, pictureToUpdate,
        preparationTimeToUpdate, cookTimeToUpdate, portionsToUpdate, caloriesToUpdate,
        reviewsToUpdate, createdAtToUpdate,
        updatedAtToUpdate, statusToUpdate
    } = request.body;

    const filterData = {
        name: name,
        difficulty: difficulty,
        originalCountry: originalCountry,
        categories: categories,
        description: description,
        status: status
    };

    const updateData = {
        name: nameToUpdate,
        difficulty: difficultyToUpdate,
        originalCountry: originalCountryToUpdate,
        categories: categoriesToUpdate,
        description: descriptionToUpdate,
        preparation: preparationToUpdate,
        totalTime: totalTimeToUpdate,
        categoriesOfIngredients: categoryOfIngredientsToUpdate,
        picture: pictureToUpdate,
        preparationTime: preparationTimeToUpdate,
        cookTime: cookTimeToUpdate,
        portions: portionsToUpdate,
        calories: caloriesToUpdate,
        review: reviewsToUpdate,
        createdAt: createdAtToUpdate,
        updatedAt: updatedAtToUpdate,
        status: statusToUpdate
    }

    const data = await recipesModel.findOneAndUpdate(filterData, updateData);
    getClientMessageBasedOnData(data);

    return getStatusBasedOnData(data, response);
}