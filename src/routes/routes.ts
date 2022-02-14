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
import { updateCountryEntryController } from "../controllers/updateCountryEntry.controller";
import { updateUserEntryController } from "../controllers/updateUserEntry.controller";
import { updateFoodCategoryEntryController } from "../controllers/updateFoodCategoryEntry.controller";
import { updateRecipeEntryController } from "../controllers/updateRecipeEntry.controller";
import { updateIngredientEntryController } from "../controllers/updateIngredientEntry.controller";
import { updateReviewEntryController } from "../controllers/updateReviewEntry.controller";
import { updateSchemaEntryController } from "../controllers/updateSchemaEntry.controller";

export function setRoutes(app: Express) {

    app.get('/', getHomePage);

    app.post('/create-country-entry', createCountryEntryControllers);
    app.get('/get-countries-entries', getCountriesEntriesControllers);
    app.post('/update-country-entry', updateCountryEntryController);

    app.post('/create-user-entry', createUserEntryControllers);
    app.get('/get-users-entries', getUsersEntriesControllers);
    app.post('/update-user-entry', updateUserEntryController);

    app.post('/create-food-categories-entry', createFoodCategoryEntryController);
    app.get('/get-food-categories-entries', getFoodCategoriesController);
    app.post('/update-food-categories-entry', updateFoodCategoryEntryController);

    app.post('/create-food-ingredient-entry', createIngredientEntryControllers);
    app.get('/get-food-ingredients-entries', getIngredientsEntriesControllers);
    app.post('/update-food-ingredient-entry', updateFoodCategoryEntryController);

    app.post('/create-recipe-entry', createRecipeEntryControllers);
    app.get('/get-recipes-entries', getRecipesEntriesControllers);
    app.post('/update-recipe-entry', updateRecipeEntryController)

    app.post('/create-ingredient-entry', createIngredientEntryControllers);
    app.get('/get-ingredients-entries', getIngredientsEntriesControllers);
    app.post('/update-ingredient-entry', updateIngredientEntryController);

    app.post('/create-review-entry', createReviewEntryControllers);
    app.get('/get-reviews-entries', getReviewsEntriesControllers);
    app.post('/update-review-entry', updateReviewEntryController);

    app.post('/create-schema-entry', createSchemaEntryControllers);
    app.get('/get-schemas-entries', getSchemasEntriesControllers);
    app.post('/update-schema-entry', updateSchemaEntryController);
}