import mongoose, { Document } from 'mongoose';

export interface SchemasModel extends Document {
    id: number;
    name: string;
}

const schema = new mongoose.Schema({
    id: Number,
    name: { type: String, required: true, unique: true, trim: true },
});

const schemasModel = mongoose.model<SchemasModel>('schemasModel', schema);

export default schemasModel;