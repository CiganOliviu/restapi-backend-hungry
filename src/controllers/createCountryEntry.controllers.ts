import { Request, Response } from "express";
import countriesModel from "../models/countries.model";

export async function createCountryEntryControllers(request: Request, response: Response) {

    const { name } = request.body;
    const newCountryEntry = await countriesModel.create({ name });

    return response.send(newCountryEntry);
}