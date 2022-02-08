import { Request, Response } from "express"
import countriesModel from "../models/countries.model";

export async function updateCountryEntryController(request: Request, response: Response) {

    const { name, nameToUpdate } = request.body;
    const filterData = { name: name };
    const updateData = { name: nameToUpdate }

    const data = await countriesModel.findOneAndUpdate(filterData, updateData);

    if (data) {
        console.log(`Data ${data} was updated!`);
    }

    return response.status(200).json();
}