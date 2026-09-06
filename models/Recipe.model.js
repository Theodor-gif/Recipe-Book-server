import { Schema, model } from "mongoose";

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["easy", "difficult"],
    },
    duration: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    ingredients: {
      type: [String],
      required: true,
      default: [],
    },
    photo: {
      type: String,
      default: "placeholder_default.png",
    },
  },
  {
    timestamps: true,
  },
);

export default model("Recipes", recipeSchema);
