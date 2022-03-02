import { Express } from "express";
import { operateCountryController } from "../controllers/countries.controller";

export function setRoutes(app: Express) {
    app.use('/countries', operateCountryController);
}