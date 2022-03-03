import { Express } from "express";
import { operateCountryController } from "../controllers/countries.controller";
import { operateReviewsController } from "../controllers/reviews.controller";
import { operateIngredientController } from "../controllers/ingredients.controller";

export function setRoutes(app: Express) {
    app.use('/countries', operateCountryController);
    app.use('/reviews', operateReviewsController);
    app.use('/ingredients', operateIngredientController);
}