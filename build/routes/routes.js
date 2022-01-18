"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRoutes = void 0;
const getHomePage_controllers_1 = require("../controllers/getHomePage.controllers");
const createCountryEntry_controllers_1 = require("../controllers/createCountryEntry.controllers");
const getCountriesEntries_controllers_1 = require("../controllers/getCountriesEntries.controllers");
const createUserEntry_controllers_1 = require("../controllers/createUserEntry.controllers");
const getUsersEntries_controllers_1 = require("../controllers/getUsersEntries.controllers");
function setRoutes(app) {
    app.get('/health-check', (request, response) => {
        return response.send('App works fine');
    });
    app.get('/', getHomePage_controllers_1.getHomePage);
    app.post('/create-country-entry', createCountryEntry_controllers_1.createCountryEntryControllers);
    app.get('/get-countries-entries', getCountriesEntries_controllers_1.getCountriesEntriesControllers);
    app.post('/create-user-entry', createUserEntry_controllers_1.createUserEntryControllers);
    app.get('/get-users-entries', getUsersEntries_controllers_1.getUsersEntriesControllers);
}
exports.setRoutes = setRoutes;
