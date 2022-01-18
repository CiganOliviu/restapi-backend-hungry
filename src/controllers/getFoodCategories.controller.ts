import { Request, Response } from "express";
import foodCategoriesModel from "../models/foodCategories.models";

export async function getFoodCategoriesController(request: Request, response: Response) {

    const data = await foodCategoriesModel.find({});

    return response.send(data);
}