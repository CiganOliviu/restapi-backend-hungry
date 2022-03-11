import { Express } from "express";
import { configurations } from "../configurations/configurations";
import { operateCountriesController } from "../controllers/countries.controller";
import { operateRecipesController } from "../controllers/recipes.controller";
import { operateReviewsController } from "../controllers/reviews.controller";
import { operateSchemasController } from "../controllers/schemas.controller";
import { operateIngredientController } from "../controllers/ingredients.controller";
import { operateFoodCategoriesController } from "../controllers/foodCategories.controller";
import { operateUsersController } from "../controllers/users.controller";
import { getCountryController } from "../controllers/country.controller";
import { getFoodCategoryController } from "../controllers/foodCategory.controller";
import { getIngredientController } from "../controllers/ingredient.controller";
import { getRecipeController } from "../controllers/recipe.controller";
import { getReviewController } from "../controllers/review.controller";
import { getSchemaController } from "../controllers/schema.controller";
import { getUserController } from "../controllers/user.controller";

export function setRoutes(app: Express, cors: (corsOptions: object) => any) {
    app.use(cors(configurations.corsOptions));

    app.use('/countries/:id', getCountryController);
    app.use('/countries', operateCountriesController);
    app.use('/reviews/:id', getReviewController);
    app.use('/reviews', operateReviewsController);
    app.use('/schemas/:id', getSchemaController);
    app.use('/schemas', operateSchemasController);
    app.use('/ingredients/:id', getIngredientController);
    app.use('/ingredients', operateIngredientController);
    app.use('/foodCategories/:id', getFoodCategoryController);
    app.use('/foodCategories', operateFoodCategoriesController);
    app.use('/users/:id', getUserController);
    app.use('/users', operateUsersController);
    app.use('recipes/:id', getRecipeController);
    app.use('/recipes', operateRecipesController);
}