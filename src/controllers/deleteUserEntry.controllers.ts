import { Request, Response } from "express";
import usersModel from "../models/users.model";

export async function deleteUserEntryControllers(request: Request, response: Response) {

    const { id } = request.body;
    const deleteUserEntry = await usersModel.deleteOne({ _id : id });

    return response.send(deleteUserEntry);
}