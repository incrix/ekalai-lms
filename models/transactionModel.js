import { Schema, model, models } from "mongoose";

const TransactionSchema = new Schema({
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
    status: {
        type: String,
        required: true,
        enum: ["pending", "success", "failed"],
        default: "pending",
    },
    created_at: {
        type: Date,
        default: Date.now,
    }
});

export default models.Transaction || model("Transaction", TransactionSchema);