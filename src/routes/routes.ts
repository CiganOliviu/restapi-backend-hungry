import { Express, Request, Response } from "express";
import { getHomePage } from "../controllers/getHomePage.controllers";

export function setRoutes(app: Express) {

    app.get('/health-check', (request: Request, response: Response) => {
        return response.send('App works fine');
    });

    app.get('/', getHomePage);
}