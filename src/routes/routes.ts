import { Express, Request, Response } from "express";
import { getHomePage } from "../controllers/getHomePage.controllers";
import { createCountryEntryControllers } from "../controllers/createCountryEntry.controllers";
import { getCountriesEntriesControllers } from "../controllers/getCountriesEntries.controllers";
import { createUserEntryControllers } from "../controllers/createUserEntry.controllers";
import { getUsersEntriesControllers } from "../controllers/getUsersEntries.controllers";
import { createFoodCategoryEntryController } from "../controllers/createFoodCategoryEntry.controller";
import { getFoodCategoriesController } from "../controllers/getFoodCategories.controller";
import { createIngredientEntryControllers } from "../controllers/createIngredientEntry.controllers";
import { getIngredientsEntriesControllers } from "../controllers/getIngredientsEntries.controllers";

export function setRoutes(app: Express) {

    app.get('/health-check', (request: Request, response: Response) => {
        return response.send('App works fine');
    });

    app.get('/', getHomePage);

    app.post('/create-country-entry', createCountryEntryControllers);
    app.get('/get-countries-entries', getCountriesEntriesControllers);

    app.post('/create-user-entry', createUserEntryControllers);
    app.get('/get-users-entries', getUsersEntriesControllers);

    app.post('/create-food-categories-entry', createFoodCategoryEntryController);
    app.get('/get-food-categories-entries', getFoodCategoriesController);

    app.post('/create-ingredient-entry', createIngredientEntryControllers);
    app.get('/get-ingredients-entries', getIngredientsEntriesControllers);
}