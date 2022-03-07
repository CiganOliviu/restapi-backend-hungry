import { Express } from "express";
import { configurations } from "../configurations/configurations";
import { operateCountryController } from "../controllers/countries.controller";
import { operateReviewsController } from "../controllers/reviews.controller";
import { operateSchemasController } from "../controllers/schemas.controller";
import { operateUsersController } from "../controllers/users.controller";

export function setRoutes(app: Express, cors: (corsOptions: object) => any) {
    app.use(cors(configurations.corsOptions));
    app.use('/countries', operateCountryController);
    app.use('/reviews', operateReviewsController);
    app.use('/schemas', operateSchemasController);
    app.use('/users', operateUsersController);
}