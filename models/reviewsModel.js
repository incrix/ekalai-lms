import { Schema, model, models } from "mongoose";

const ReviewSchema = new Schema({
    course: {
        type: Schema.Types.ObjectId,
        ref: "Courses",
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    comment: {
        type: String,
        required: true,
        min: 3,
        max: 200,
    },
    created_at: {
        type: Date,
        default: Date.now,
    }
});

export default models.Review || model("Review", ReviewSchema);