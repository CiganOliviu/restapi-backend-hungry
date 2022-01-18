import { Express, Request, Response } from "express";
import { getHomePage } from "../controllers/getHomePage.controllers";
import { createCountriesEntry } from "../controllers/createCountries.controller";

export function setRoutes(app: Express) {

    app.get('/health-check', (request: Request, response: Response) => {
        return response.send('App works fine');
    });

    app.get('/', getHomePage);
    app.post('/create-country-entry', createCountriesEntry);
}