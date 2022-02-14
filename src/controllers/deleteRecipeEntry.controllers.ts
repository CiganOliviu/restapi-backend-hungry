import { Request, Response } from "express";
import recipesModel from "../models/recipes.models";

export async function deleteRecipeEntryControllers(request: Request, response: Response) {

    const { id } = request.body;
    const deleteRecipeEntry = await recipesModel.deleteOne({ _id : id });

    return response.send(deleteRecipeEntry);
}