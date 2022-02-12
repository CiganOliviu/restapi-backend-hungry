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
import { createSchemaEntryControllers } from "../controllers/createSchemaEntry.controllers";
import { getSchemasEntriesControllers } from "../controllers/getSchemasEntries.controllers";
import { deleteCountryEntryControllers } from "../controllers/deleteCountryEntry.controllers";
import { deleteUserEntryControllers } from "../controllers/deleteUserEntry.controllers";
import { deleteFoodCategoryEntryController } from "../controllers/deleteFoodCategoryEntry.controllers";
import { deleteIngredientEntryControllers } from "../controllers/deleteIngredientEntry.controllers";
import { deleteRecipeEntryControllers } from "../controllers/deleteRecipeEntry.controllers";
import { deleteReviewEntryControllers } from "../controllers/deleteReviewEntry.controllers";
import { deleteSchemaEntryControllers } from "../controllers/deleteSchemaEntry.controllers";

export function setRoutes(app: Express) {

    app.get('/', getHomePage);

    app.post('/create-country-entry', createCountryEntryControllers);
    app.get('/get-countries-entries', getCountriesEntriesControllers);
    app.delete('/delete-country-entry',deleteCountryEntryControllers);

    app.post('/create-user-entry', createUserEntryControllers);
    app.get('/get-users-entries', getUsersEntriesControllers);
    app.delete('/delete-user-entry',deleteUserEntryControllers);

    app.post('/create-food-categories-entry', createFoodCategoryEntryController);
    app.get('/get-food-categories-entries', getFoodCategoriesController);
    app.delete('/delete-food-categories-entry',deleteFoodCategoryEntryController);

    app.post('/create-food-ingredient-entry', createIngredientEntryControllers);
    app.get('/get-food-ingredients-entries', getIngredientsEntriesControllers);
    app.delete('/delete-food-ingredient-entry',deleteIngredientEntryControllers);

    app.post('/create-recipe-entry', createRecipeEntryControllers);
    app.get('/get-recipes-entries', getRecipesEntriesControllers);
    app.delete('/delete-recipe-entry',deleteRecipeEntryControllers);

    app.post('/create-ingredient-entry', createIngredientEntryControllers);
    app.get('/get-ingredients-entries', getIngredientsEntriesControllers);
    app.delete('/delete-ingredient-entry',deleteIngredientEntryControllers);

    app.post('/create-review-entry', createReviewEntryControllers);
    app.get('/get-reviews-entries', getReviewsEntriesControllers);
    app.delete('/delete-review-entry',deleteReviewEntryControllers);

    app.post('/create-schema-entry', createSchemaEntryControllers);
    app.get('/get-schemas-entries', getSchemasEntriesControllers);
    app.delete('/delete-schema-entry',deleteSchemaEntryControllers);
}