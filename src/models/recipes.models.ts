import mongoose, { Document, Schema } from 'mongoose';
import { CountriesModel } from "./countries.model";
import { FoodCategoriesModel } from "./foodCategories.models";
import { IngredientsModel } from "./ingredients.model";

export interface RecipesModels extends Document {
    id: number;
    name: string;
    difficulty: string;
    originalCountry: CountriesModel;
    categories: FoodCategoriesModel;
    description: string;
    preparation: string;
    total_time: number;
    categoryOfIngredients: IngredientsModel[];
    picture: string;
    preparationTime: number;
    cookTime: number;
    portions: number;
    calories: number;
    reviews: string;
    createdAt: Date;
    updatedAt: Date;
    status: string;
}

const schema = new mongoose.Schema({
    id: Number,
    name: { type: String, required: true, unique: true },
    difficulty: { type: String },
    originalCountry: [
        { type: Schema.Types.ObjectId, ref: 'countriesModel' }
    ],
    categories: [
        { type: Schema.Types.ObjectId, ref: 'foodCategoriesModel' }
    ],
    description: { Type: String },
    preparation: { Type: String },
    totalTime: { Type: Number },
    categoryOfIngredients: [
        { type: Schema.Types.ObjectId, ref: 'ingredientsModel' }
    ],
    picture: String,
    preparationTime: { type: Number },
    cookTime: { type: Number },
    portions: { type: Number },
    calories: { type: Number, required: true },
    reviews: { type: String, requireD: true },
    createdAt: { type: Date },
    updatedAt: { type: Date },
    status: { type: String, required: true },
});

const recipesModel = mongoose.model<RecipesModels>('recipesModel', schema);

export default recipesModel;