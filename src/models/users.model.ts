import mongoose, { Document } from 'mongoose';

export interface UsersModel extends Document {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    isAdmin: boolean;
}

const schema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true }
});

const usersModel = mongoose.model<UsersModel>('usersModel', schema);

export default usersModel;