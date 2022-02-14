import { Request, Response } from "express";
import ingredientsModel from "../models/ingredients.model";
import { getClientMessageBasedOnData, getStatusBasedOnData } from "../utils/dataValidator";

export async function updateIngredientEntryController(request: Request, response: Response) {
    const { name, nameToUpdate } = request.body;
    const filterData = { name: name };
    const updateData = { name: nameToUpdate }

    const data = await ingredientsModel.findOneAndUpdate(filterData, updateData);
    getClientMessageBasedOnData(data);

    return getStatusBasedOnData(data, response);
}