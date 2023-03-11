import { Schema, model, models } from "mongoose";

const AdminSchema = new Schema({
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
  role: {
    type: String,
    required: true,
    enum: ["super-admin", "admin"],
    default: "admin",
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
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

export default models.Admin || model("Admin", AdminSchema);
