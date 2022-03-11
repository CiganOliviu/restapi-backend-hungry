import { Request, Response } from 'express';
import usersModel from '../models/users.model';
import { getInstanceById } from '../utils/general.controllers';

export async function getUserController(request: Request, response: Response) {
    
    return getInstanceById(request, response, usersModel);
}