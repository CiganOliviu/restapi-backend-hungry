import { Request, Response } from "express";
import usersModel from "../models/users.model";
import { getClientMessageBasedOnData, getStatusBasedOnData } from "../utils/dataValidator";

export async function updateUserEntryController(request: Request, response: Response) {
    const { username, usernameToUpdate,
            firstName, firstNameToUpdate,
            lastName, lastNameToUpdate,
            email, emailToUpdate,
            password, passwordToUpdate,
            isAdmin, isAdminToUpdate,
    } = request.body;

    const filterData = {
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        isAdmin: isAdmin,
    }

    const updateData = {
        username: usernameToUpdate,
        firstName: firstNameToUpdate,
        lastName: lastNameToUpdate,
        email: emailToUpdate,
        password: passwordToUpdate,
        isAdmin: isAdminToUpdate,
    }

    const data = await usersModel.findOneAndUpdate(filterData, updateData);
    getClientMessageBasedOnData(data);

    return getStatusBasedOnData(data, response);
}