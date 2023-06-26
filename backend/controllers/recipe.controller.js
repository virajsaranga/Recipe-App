const recipe = require("../models/recipe.model");

//add recipe
const addRecipe = (req, res) => {
  const { recipeID, recipeName, ingredients, description } = req.body;

  const Recipies = new recipe({
    recipeID,
    recipeName,
    ingredients,
    description,
  });

  Recipies.save()
    .then((addRecipe) => {
      res.json(addRecipe);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

//Get the all recipe details
const getAllRecipe = async (req, res) => {
  try {
    const Recipies = await recipe.find();
    res.json(Recipies);
  } catch (error) {
    res.status(400).json(error);
  }
};

//get a recipe details
const getRecipe = async (req, res) => {
  const recipeId = req.params.id;

  try {
    const Recipies = await recipe.findById(recipeId);
    res.json(Recipies);
  } catch (error) {
    res.status(400).json(error);
  }
};

//update recipe details
const updateRecipe = async (req, res) => {
  const recipeId = req.params.id;

  try {
    const RecipeID = await recipe.findById(recipeId);

    if (!RecipeID) {
      return res.status(404).json("There is no recipe to update");
    }

    const { recipeID, recipeName, ingredients, description } = req.body;

    const updateRecipe = await recipe.findByIdAndUpdate(recipeId, {
      recipeID,
      recipeName,
      ingredients,
      description,
    });

    res.status(200).json(updateRecipe);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// remove hosatal details
const deleteRecipe = async (req, res) => {
  const RecipeID = req.params.id;

  try {
    const Recipies = await recipe.findById(RecipeID);

    if (!Recipies) {
      return res.status(404).json("There is no user to remove");
    }

    const deleteRecipe = await recipe.findByIdAndDelete(RecipeID);
    res.status(200).json(deleteRecipe);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  addRecipe,
  getAllRecipe,
  getRecipe,
  updateRecipe,
  deleteRecipe,
};
