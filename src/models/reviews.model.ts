import mongoose, {Document, Schema} from 'mongoose';
import { UsersModel } from "./users.model";

export interface ReviewsModel extends Document {
    numberOfStars: number;
    comment: string;
    postedOn: Date;
    editedAt: Date;
    author: UsersModel;
}

const schema = new mongoose.Schema({
    numberOfStars: { type: Number, required:true },
    comment: { type: String, required:true },
    postedOn: { type: Date, required:true },
    editedAt: { type: Date, required:true },
    author: {
        type: Schema.Types.ObjectId,
        ref: "UsersModel",
        required: true
    }
});

const reviewsModel = mongoose.model<ReviewsModel & mongoose.Document>('reviewsModel', schema);

export default reviewsModel;