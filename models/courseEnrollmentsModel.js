import { Schema, model, models } from "mongoose";

const CourseEnrollmentSchema = new Schema({
    course: {
        type: Schema.Types.ObjectId,
        ref: "Courses",
        required: true,
    },
    student: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ["pending", "approved", "rejected"],
        default: "pending",
    },
    created_at: {
        type: Date,
        default: Date.now,
    }
});

export default models.CourseEnrollment || model("CourseEnrollment", CourseEnrollmentSchema);
