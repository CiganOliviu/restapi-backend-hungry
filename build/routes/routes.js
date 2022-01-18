"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRoutes = void 0;
const getHomePage_controllers_1 = require("../controllers/getHomePage.controllers");
const createCountries_controller_1 = require("../controllers/createCountries.controller");
const getCountries_controller_1 = require("../controllers/getCountries.controller");
<<<<<<< HEAD
const createFoodCategoryEntry_controller_1 = require("../controllers/createFoodCategoryEntry.controller");
const getFoodCategories_controller_1 = require("../controllers/getFoodCategories.controller");
=======
const createIngredientEntry_controllers_1 = require("../controllers/createIngredientEntry.controllers");
const getIngredientsEntries_controllers_1 = require("../controllers/getIngredientsEntries.controllers");
>>>>>>> origin/main
function setRoutes(app) {
    app.get('/health-check', (request, response) => {
        return response.send('App works fine');
    });
    app.get('/', getHomePage_controllers_1.getHomePage);
    app.post('/create-country-entry', createCountries_controller_1.createCountriesEntry);
    app.get('/get-countries-entries', getCountries_controller_1.getCountriesEntries);
<<<<<<< HEAD
    app.post('/create-food-categories-entry', createFoodCategoryEntry_controller_1.createFoodCategoryEntryController);
    app.get('/get-food-categories-entries', getFoodCategories_controller_1.getFoodCategoriesController);
=======
    app.post('/create-ingredient-entry', createIngredientEntry_controllers_1.createIngredientEntryControllers);
    app.get('/get-ingredients-entries', getIngredientsEntries_controllers_1.getIngredientsEntriesControllers);
>>>>>>> origin/main
}
exports.setRoutes = setRoutes;
