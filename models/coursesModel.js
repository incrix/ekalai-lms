import { Schema, model, models } from "mongoose";

const CourseSchema = new Schema({
  title: {
    type: String,
    required: true,
    min: 3,
    max: 64,
  },
  short_description: {
    type: String,
    required: true,
    min: 3,
    max: 100,
  },
  description: {
    type: String,
    required: true,
    min: 3,
    max: 2000,
  },
  course_outcomes: [
    {
      type: String,
      min: 3,
      max: 200,
    },
  ],
  status: {
    type: String,
    required: true,
    enum: ["draft", "published"],
    default: "draft",
  },
  trainer: {
    type: Schema.Types.ObjectId,
    ref: ["User", "Admin"],
  },
  approved: {
    type: Boolean,
    default: false,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    max: 100000,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  section: [
    {
      sl_no: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
        min: 3,
      },
      lessons: [
        {
          title: {
            type: String,
            required: true,
            min: 3,
          },
          resource_type: {
            type: String,
            required: true,
            enum: ["video", "document"],
          },
          resource: {
            type: String,
            required: true,
          },
        },
      ],
    },
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

export default models.Courses || model("Courses", CourseSchema);
