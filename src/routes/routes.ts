import { Express } from "express";
import { configurations } from "../configurations/configurations";
import { operateCountryController } from "../controllers/countries.controller";
import { operateReviewsController } from "../controllers/reviews.controller";

export function setRoutes(app: Express, cors: (corsOptions: object) => any) {
    app.use('/countries', cors(configurations.corsOptions), operateCountryController);
    app.use('/reviews', operateReviewsController);
}