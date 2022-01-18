import { Request, Response } from "express";

export const getHomePage = (request: Request, response:Response) => {

    return response.send('Welcome in index');
}