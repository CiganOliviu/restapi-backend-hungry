import mongoose, { Document } from 'mongoose';

export interface UsersModel extends Document {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const schema = new mongoose.Schema({
    id: Number,
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const usersModel = mongoose.model<UsersModel>('usersModel', schema);

export default usersModel;