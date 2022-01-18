import mongoose, { Document } from 'mongoose';

export interface CountriesModel extends Document {
    id: number;
    name: string;
}

const schema = new mongoose.Schema({
    id: Number,
    name: { type: String, required: true },
});

const countriesModel = mongoose.model<CountriesModel>('countriesModel', schema);

export default countriesModel;