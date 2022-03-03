import mongoose, { Document } from 'mongoose';

export interface FoodCategoriesModel extends Document {
    name: string;
}

const schema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
});

const foodCategoriesModel = mongoose.model<FoodCategoriesModel>('foodCategoriesModel', schema);

export default foodCategoriesModel;