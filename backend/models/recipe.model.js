const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipeSchema = new Schema({
  recipeID: {
    type: String,
    unique: true,
  },
  recipeName: String,
  ingredients: String,
  description: String,
});

module.exports = RecipeManage = mongoose.model("RecipeManage", recipeSchema);
