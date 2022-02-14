import { Request, Response } from "express";
import recipesModel from "../models/recipes.models";

export async function createRecipeEntryControllers(request: Request, response: Response) {

    const {
        name, difficulty, originalCountry, categories,
        description, preparation, totalTime, categoryOfIngredients,
        picture, preparationTime, cookTime, portions, calories, reviews,
        createdAt, updatedAt, status
    } = request.body;

    const newRecipeEntry = await recipesModel.create({ name, difficulty, originalCountry, categories,
                                                    description, preparation, totalTime, categoryOfIngredients,
                                                    picture, preparationTime, cookTime, portions, calories, reviews,
                                                    createdAt, updatedAt, status });

    return response.send(newRecipeEntry);
}