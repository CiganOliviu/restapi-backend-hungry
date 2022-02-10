import { Request, Response } from "express";
import schemasModel from "../models/schemas.model";

export async function updateSchemaEntryController(request: Request, response: Response) {
    const { name, nameToUpdate } = request.body;
    const filterData = { name: name };
    const updateData = { name: nameToUpdate }

    const data = await schemasModel.findOneAndUpdate(filterData, updateData);

    if (data) {
        console.log(`Data ${data} was updated!`);
    }

    return response.status(200).json();
}