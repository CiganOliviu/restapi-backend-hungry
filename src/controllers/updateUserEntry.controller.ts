import { Request, Response } from "express";
import UsersModel from "../models/users.model";
import usersModel from "../models/users.model";

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

    if (data) {
        console.log(`Data ${data} was updated!`);
    }

    return response.status(200).json();
}