import { Express } from "express";
import { getHomePage } from "../controllers/getHomePage.controllers";
import { createCountryEntryControllers } from "../controllers/createCountryEntry.controllers";
import { getCountriesEntriesControllers } from "../controllers/getCountriesEntries.controllers";
import { createUserEntryControllers } from "../controllers/createUserEntry.controllers";
import { getUsersEntriesControllers } from "../controllers/getUsersEntries.controllers";
import { createFoodCategoryEntryController } from "../controllers/createFoodCategoryEntry.controller";
import { getFoodCategoriesController } from "../controllers/getFoodCategories.controller";
import { createIngredientEntryControllers } from "../controllers/createIngredientEntry.controllers";
import { getIngredientsEntriesControllers } from "../controllers/getIngredientsEntries.controllers";
import { createRecipeEntryControllers } from "../controllers/createRecipeEntry.controllers";
import { getRecipesEntriesControllers } from "../controllers/getRecipesEntries.controllers";
import { createReviewEntryControllers } from "../controllers/createReviewEntry.controllers";
import { getReviewsEntriesControllers } from "../controllers/getReviewsEntries.controllers";

export function setRoutes(app: Express) {

    app.get('/', getHomePage);

    app.post('/create-country-entry', createCountryEntryControllers);
    app.get('/get-countries-entries', getCountriesEntriesControllers);

    app.post('/create-user-entry', createUserEntryControllers);
    app.get('/get-users-entries', getUsersEntriesControllers);

    app.post('/create-food-categories-entry', createFoodCategoryEntryController);
    app.get('/get-food-categories-entries', getFoodCategoriesController);

    app.post('/create-food-ingredient-entry', createIngredientEntryControllers);
    app.get('/get-food-ingredients-entries', getIngredientsEntriesControllers);

    app.post('/create-recipe-entry', createRecipeEntryControllers);
    app.get('/get-recipes-entries', getRecipesEntriesControllers);

    app.post('/create-ingredient-entry', createIngredientEntryControllers);
    app.get('/get-ingredients-entries', getIngredientsEntriesControllers);

    app.post('/create-review-entry', createReviewEntryControllers);
    app.get('/get-reviews-entries', getReviewsEntriesControllers);
}