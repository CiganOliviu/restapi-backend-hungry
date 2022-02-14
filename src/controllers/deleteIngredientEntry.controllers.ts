import { Request, Response } from "express";
import ingredientsModel from "../models/ingredients.model";

export async function deleteIngredientEntryControllers(request: Request, response: Response) {

    const { id } = request.body;
    const deleteIngredientEntry = await ingredientsModel.deleteOne({ _id : id });

    return response.send(deleteIngredientEntry);
}