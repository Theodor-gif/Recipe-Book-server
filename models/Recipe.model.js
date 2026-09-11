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
      validate: {
        validator: (arr) => arr.length > 0,
        message: "At least one ingredient is required.",
      },
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
