import { Request, Response } from "express"
import countriesModel from "../models/countries.model";
import { getClientMessageBasedOnData, getStatusBasedOnData } from "../utils/dataValidator";

export async function updateCountryEntryController(request: Request, response: Response) {
    const { name, nameToUpdate } = request.body;
    const filterData = { name: name };
    const updateData = { name: nameToUpdate }

    const data = await countriesModel.findOneAndUpdate(filterData, updateData);
    getClientMessageBasedOnData(data);

    return getStatusBasedOnData(data, response);
}