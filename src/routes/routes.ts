import { Express, Request, Response } from "express";
import { getHomePage } from "../controllers/getHomePage.controllers";
import { createCountriesEntry } from "../controllers/createCountries.controller";
import { getCountriesEntries } from "../controllers/getCountries.controller";
import { createFoodCategoryEntryController } from "../controllers/createFoodCategoryEntry.controller";
import { getFoodCategoriesController } from "../controllers/getFoodCategories.controller";

export function setRoutes(app: Express) {

    app.get('/health-check', (request: Request, response: Response) => {
        return response.send('App works fine');
    });

    app.get('/', getHomePage);
    app.post('/create-country-entry', createCountriesEntry);
    app.get('/get-countries-entries', getCountriesEntries);

    app.post('/create-food-categories-entry', createFoodCategoryEntryController);
    app.get('/get-food-categories-entries', getFoodCategoriesController);
}