import mongoose, { Document } from 'mongoose';

export interface IngredientsModel extends Document {
    id: number;
    name: string;
}

const schema = new mongoose.Schema({
    id: Number,
    name: { type: String, required: true },
});

const ingredientsModel = mongoose.model<IngredientsModel>('ingredientsModel', schema);

export default ingredientsModel;