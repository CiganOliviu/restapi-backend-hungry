"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRoutes = void 0;
const getHomePage_controllers_1 = require("../controllers/getHomePage.controllers");
const createCountryEntry_controllers_1 = require("../controllers/createCountryEntry.controllers");
const getCountriesEntries_controllers_1 = require("../controllers/getCountriesEntries.controllers");
const createUserEntry_controllers_1 = require("../controllers/createUserEntry.controllers");
const getUsersEntries_controllers_1 = require("../controllers/getUsersEntries.controllers");
const createFoodCategoryEntry_controller_1 = require("../controllers/createFoodCategoryEntry.controller");
const getFoodCategories_controller_1 = require("../controllers/getFoodCategories.controller");
const createIngredientEntry_controllers_1 = require("../controllers/createIngredientEntry.controllers");
const getIngredientsEntries_controllers_1 = require("../controllers/getIngredientsEntries.controllers");
const createRecipeEntry_controllers_1 = require("../controllers/createRecipeEntry.controllers");
const getRecipesEntries_controllers_1 = require("../controllers/getRecipesEntries.controllers");
function setRoutes(app) {
    app.get('/health-check', (request, response) => {
        return response.send('App works fine');
    });
    app.get('/', getHomePage_controllers_1.getHomePage);
    app.post('/create-country-entry', createCountryEntry_controllers_1.createCountryEntryControllers);
    app.get('/get-countries-entries', getCountriesEntries_controllers_1.getCountriesEntriesControllers);
    app.post('/create-user-entry', createUserEntry_controllers_1.createUserEntryControllers);
    app.get('/get-users-entries', getUsersEntries_controllers_1.getUsersEntriesControllers);
    app.post('/create-food-categories-entry', createFoodCategoryEntry_controller_1.createFoodCategoryEntryController);
    app.get('/get-food-categories-entries', getFoodCategories_controller_1.getFoodCategoriesController);
    app.post('/create-food-ingredient-entry', createIngredientEntry_controllers_1.createIngredientEntryControllers);
    app.get('/get-food-ingredients-entries', getIngredientsEntries_controllers_1.getIngredientsEntriesControllers);
    app.post('/create-recipe-entry', createRecipeEntry_controllers_1.createRecipeEntryControllers);
    app.get('/get-recipes-entries', getRecipesEntries_controllers_1.getRecipesEntriesControllers);
}
exports.setRoutes = setRoutes;
