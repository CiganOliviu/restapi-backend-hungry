import mongoose, { Document } from 'mongoose';

export interface IngredientsModel extends Document {
    name: string;
}

const schema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
});

const ingredientsModel = mongoose.model<IngredientsModel>('ingredientsModel', schema);

export default ingredientsModel;