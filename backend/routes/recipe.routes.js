const express = require("express");
const router = express.Router();

const {
  addRecipe,
  getAllRecipe,
  getRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipe.controller");

router.get("/", getAllRecipe);

router.get("/:id", getRecipe);

router.post("/", addRecipe);

router.put("/:id", updateRecipe);

router.delete("/:id", deleteRecipe);

module.exports = router;
