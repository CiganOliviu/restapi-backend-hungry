import { Request, Response } from "express";
import schemasModel from "../models/schemas.model";

export async function getSchemasEntriesControllers(request: Request, response: Response) {

    const data = await schemasModel.find({});

    return response.send(data);
}