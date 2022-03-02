import { Express } from "express";
import { getHomePage } from "../controllers/getHomePage.controllers";
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
import { deleteUserEntryControllers } from "../controllers/deleteUserEntry.controllers";
import { deleteFoodCategoryEntryController } from "../controllers/deleteFoodCategoryEntry.controllers";
import { deleteIngredientEntryControllers } from "../controllers/deleteIngredientEntry.controllers";
import { deleteRecipeEntryControllers } from "../controllers/deleteRecipeEntry.controllers";
import { deleteReviewEntryControllers } from "../controllers/deleteReviewEntry.controllers";
import { deleteSchemaEntryControllers } from "../controllers/deleteSchemaEntry.controllers";
import { updateUserEntryController } from "../controllers/updateUserEntry.controller";
import { updateFoodCategoryEntryController } from "../controllers/updateFoodCategoryEntry.controller";
import { updateRecipeEntryController } from "../controllers/updateRecipeEntry.controller";
import { updateIngredientEntryController } from "../controllers/updateIngredientEntry.controller";
import { updateReviewEntryController } from "../controllers/updateReviewEntry.controller";
import { updateSchemaEntryController } from "../controllers/updateSchemaEntry.controller";
import { operateCountryController } from "../controllers/countries.controller";

export function setRoutes(app: Express) {

    app.get('/', getHomePage);

    app.use('/countries', operateCountryController);

    app.post('/create-user-entry', createUserEntryControllers);
    app.get('/get-users-entries', getUsersEntriesControllers);
    app.delete('/delete-user-entry', deleteUserEntryControllers);
    app.post('/update-user-entry', updateUserEntryController);
  
    app.post('/create-food-categories-entry', createFoodCategoryEntryController);
    app.get('/get-food-categories-entries', getFoodCategoriesController);
    app.delete('/delete-food-categories-entry', deleteFoodCategoryEntryController);
    app.post('/update-food-categories-entry', updateFoodCategoryEntryController);

    app.post('/create-food-ingredient-entry', createIngredientEntryControllers);
    app.get('/get-food-ingredients-entries', getIngredientsEntriesControllers);
    app.delete('/delete-food-ingredient-entry', deleteIngredientEntryControllers);
    app.post('/update-food-ingredient-entry', updateFoodCategoryEntryController);

    app.post('/create-recipe-entry', createRecipeEntryControllers);
    app.get('/get-recipes-entries', getRecipesEntriesControllers);
    app.delete('/delete-recipe-entry', deleteRecipeEntryControllers);
    app.post('/update-recipe-entry', updateRecipeEntryController);

    app.post('/create-ingredient-entry', createIngredientEntryControllers);
    app.get('/get-ingredients-entries', getIngredientsEntriesControllers);
    app.delete('/delete-ingredient-entry', deleteIngredientEntryControllers);
    app.post('/update-ingredient-entry', updateIngredientEntryController);

    app.post('/create-review-entry', createReviewEntryControllers);
    app.get('/get-reviews-entries', getReviewsEntriesControllers);
    app.delete('/delete-review-entry', deleteReviewEntryControllers);
    app.post('/update-review-entry', updateReviewEntryController);

    app.post('/create-schema-entry', createSchemaEntryControllers);
    app.get('/get-schemas-entries', getSchemasEntriesControllers);
    app.delete('/delete-schema-entry', deleteSchemaEntryControllers);
    app.post('/update-schema-entry', updateSchemaEntryController);

}