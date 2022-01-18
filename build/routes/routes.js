"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRoutes = void 0;
const getHomePage_controllers_1 = require("../controllers/getHomePage.controllers");
const createCountries_controller_1 = require("../controllers/createCountries.controller");
const getCountries_controller_1 = require("../controllers/getCountries.controller");
function setRoutes(app) {
    app.get('/health-check', (request, response) => {
        return response.send('App works fine');
    });
    app.get('/', getHomePage_controllers_1.getHomePage);
    app.post('/create-country-entry', createCountries_controller_1.createCountriesEntry);
    app.get('/get-countries-entries', getCountries_controller_1.getCountriesEntries);
}
exports.setRoutes = setRoutes;
