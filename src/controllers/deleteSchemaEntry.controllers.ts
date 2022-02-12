import { Request, Response } from "express";
import schemasModel from "../models/schemas.model";

export async function deleteSchemaEntryControllers(request: Request, response: Response) {

    const { id } = request.body;
    const deleteSchemaEntry = await schemasModel.deleteOne({ _id : id });

    return response.send(deleteSchemaEntry);
}