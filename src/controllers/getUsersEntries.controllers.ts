import { Request, Response } from "express";
import usersModel from "../models/users.model";

export async function getUsersEntriesControllers(request: Request, response: Response) {

    const data = await usersModel.find({});

    return response.send(data);
}