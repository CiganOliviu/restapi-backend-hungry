import { Express } from "express";
import { operateCountryController } from "../controllers/countries.controller";
import { operateReviewsController } from "../controllers/reviews.controller";

export function setRoutes(app: Express) {
    app.use('/countries', operateCountryController);
    app.use('/reviews', operateReviewsController);
}