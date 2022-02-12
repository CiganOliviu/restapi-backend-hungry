import { Request, Response } from "express";
import countriesModel from "../models/countries.model";

export async function deleteCountryEntryControllers(request: Request, response: Response) {

    const { id } = request.body;
    const deleteCountryEntry = await countriesModel.deleteOne({ _id : id } );

    return response.send(deleteCountryEntry);
}