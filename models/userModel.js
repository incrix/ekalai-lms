import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 64,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 256,
    max: 256,
  },
  otp: {
    hashValue: {
      type: String,
      required: true,
      min: 256,
      max: 256,
    },
    created_at: {
      type: Date,
      required: true,
    },
  },
  role: {
    type: String,
    required: true,
    enum: ["student", "trainer"],
    default: "student",
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  avatar: {
    type: String,
    enum: [
      "atlas",
      "orion",
      "phoenix",
      "titan",
      "ava",
      "luna",
      "nova",
      "sable",
    ],
  },
  wishList: [
    {
      type: Schema.Types.ObjectId,
      ref: "Courses",
    },
  ],
  cart: [
    {
      type: Schema.Types.ObjectId,
      ref: "Courses",
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

export default models.User || model("User", UserSchema);
