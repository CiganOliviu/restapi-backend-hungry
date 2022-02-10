import { Request, Response } from "express";
import recipesModel from "../models/recipes.models";

export async function updateRecipeEntryController(request: Request, response: Response) {
    const {
        name, difficulty, originalCountry, categories,
        description, status,
        nameToUpdate, difficultyToUpdate, originalCountryToUpdate,
        categoriesToUpdate, descriptionToUpdate, preparationToUpdate,
        totalTimeToUpdate, categoryOfIngredientsToUpdate, pictureToUpdate,
        cookTimeToUpdate, portionsToUpdate, caloriesToUpdate,
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
        cookTime: cookTimeToUpdate,
        portions: portionsToUpdate,
        calories: caloriesToUpdate,
        review: reviewsToUpdate,
        createdAt: createdAtToUpdate,
        updatedAt: updatedAtToUpdate,
        status: statusToUpdate
    }

    const data = await recipesModel.findOneAndUpdate(filterData, updateData);

    if (data) {
        console.log(`Data ${data} was updated!`);
    }

    return response.status(200).json();
}