import mongoose, { Document } from 'mongoose';

export interface CountriesModel extends Document {
    name: string;
}

const schema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
});

const countriesModel = mongoose.model<CountriesModel>('countriesModel', schema);

export default countriesModel;