import { Request, Response } from "express";
import usersModel from "../models/users.model";

export async function createUserEntryControllers(request: Request, response: Response) {

    const { firstName, lastName, email, password } = request.body;
    const newUserEntry = await usersModel.create({ firstName, lastName, email, password });

    return response.send(newUserEntry);
}