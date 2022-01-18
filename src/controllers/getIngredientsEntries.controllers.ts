import { Request, Response } from "express";
import ingredientsModel from "../models/ingredients.model";

export async function getIngredientsEntriesControllers(request: Request, response: Response) {

    const data = await ingredientsModel.find({});

    return response.send(data);
}