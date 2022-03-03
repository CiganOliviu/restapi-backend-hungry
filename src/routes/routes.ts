import { Express } from "express";
import { operateCountryController } from "../controllers/countries.controller";
import { operateReviewsController } from "../controllers/reviews.controller";
import { operateUsersController } from "../controllers/users.controller";

export function setRoutes(app: Express) {
    app.use('/countries', operateCountryController);
    app.use('/reviews', operateReviewsController);
    app.use('/users', operateUsersController);
}