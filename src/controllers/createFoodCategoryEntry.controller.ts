import { Request, Response } from "express";
import foodCategoriesModel from "../models/foodCategories.models";

export async function createFoodCategoryEntryController(request: Request, response: Response) {

    const { name } = request.body;
    const newFoodCategoryEntry = await foodCategoriesModel.create({ name });

    return response.send(newFoodCategoryEntry);
}