"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRoutes = void 0;
const countries_controller_1 = require("../controllers/countries.controller");
function setRoutes(app) {
    app.use('/countries', countries_controller_1.operateCountryController);
}
exports.setRoutes = setRoutes;
