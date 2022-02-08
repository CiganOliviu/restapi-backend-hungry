import { Request, Response } from "express";
import ingredientsModel from "../models/ingredients.model";

export async function updateIngredientEntryController(request: Request, response: Response) {
    const { name, nameToUpdate } = request.body;
    const filterData = { name: name };
    const updateData = { name: nameToUpdate }

    const data = await ingredientsModel.findOneAndUpdate(filterData, updateData);

    if (data) {
        console.log(`Data ${data} was updated!`);
    }

    return response.status(200).json();
}