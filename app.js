import express from "express";
import morgan from "morgan";
import connectDb from "./db/mongooseConnect.js";
import "dotenv/config.js";
import Recipe from "./models/Recipe.model.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.get("/recipes", async (req, res, next) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error fetching recipes", error: error.message });
  }
});

connectDb().then(() => {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});
