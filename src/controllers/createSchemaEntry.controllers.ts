import { Request, Response } from "express";
import schemasModel from "../models/schemas.model";

export async function createSchemaEntryControllers(request: Request, response: Response) {

    const { name } = request.body;
    const newSchemaEntry = await schemasModel.create({ name });

    return response.send(newSchemaEntry);
}