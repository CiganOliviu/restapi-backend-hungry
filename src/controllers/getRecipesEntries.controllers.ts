import { Request, Response } from "express";
import recipesModel from "../models/recipes.models";
import countriesModel from "../models/countries.model";

export async function getRecipesEntriesControllers(request: Request, response: Response) {

    const data = await recipesModel.find({});
    const countryName = await countriesModel.find({ _id: data[0].originalCountry })

    return response.send(countryName[0].name);
}