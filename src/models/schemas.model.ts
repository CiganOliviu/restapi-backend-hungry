import mongoose, { Document } from 'mongoose';

export interface SchemasModel extends Document {
    name: string;
    routes: string;
}

const schema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, trim: true },
    routes: { type: String, required: true, unique: true, trim: true },
});

const schemasModel = mongoose.model<SchemasModel>('schemasModel', schema);

export default schemasModel;