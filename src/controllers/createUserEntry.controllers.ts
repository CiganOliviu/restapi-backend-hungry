import { Request, Response } from "express";
import usersModel from "../models/users.model";

export async function createUserEntryControllers(request: Request, response: Response) {

    const { username, firstName, lastName, email, password } = request.body;
    const newUserEntry = await usersModel.create({ username, firstName, lastName, email, password });

    return response.send(newUserEntry);
}