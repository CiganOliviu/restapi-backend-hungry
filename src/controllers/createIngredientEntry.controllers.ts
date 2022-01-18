import { Request, Response } from "express";
import ingredientsModel from "../models/ingredients.model";

export async function createIngredientEntryControllers(request: Request, response: Response) {

    const { name } = request.body;
    const newIngredientEntry = await ingredientsModel.create({ name });

    return response.send(newIngredientEntry);
}