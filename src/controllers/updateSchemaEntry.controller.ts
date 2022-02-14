import { Request, Response } from "express";
import schemasModel from "../models/schemas.model";
import { getClientMessageBasedOnData, getStatusBasedOnData } from "../utils/dataValidator";

export async function updateSchemaEntryController(request: Request, response: Response) {
    const { name, nameToUpdate } = request.body;
    const filterData = { name: name };
    const updateData = { name: nameToUpdate }

    const data = await schemasModel.findOneAndUpdate(filterData, updateData);
    getClientMessageBasedOnData(data);

    return getStatusBasedOnData(data, response);
}