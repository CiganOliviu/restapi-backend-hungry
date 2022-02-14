import { Request, Response } from "express";
import foodCategoriesModel from "../models/foodCategories.models";

export async function deleteFoodCategoryEntryController(request: Request, response: Response) {

    const { id } = request.body;
    const deleteFoodCategoryEntry = await foodCategoriesModel.deleteOne({ _id : id });

    return response.send(deleteFoodCategoryEntry);
}