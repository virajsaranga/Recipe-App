import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParam } from "react-router-dom";
import "./recipe.css";

const ViewRecipe = () => {
  const recipeID = useParam("recipeID");
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/recipe/${recipeID}`)
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [recipeID]);

  return (
    <div>
      <h2>Recipe Details</h2>
      <p>
        <strong>ID:</strong> {recipe.recipeID}
      </p>
      <p>
        <strong>Name:</strong> {recipe.recipeName}
      </p>
      <p>
        <strong>Ingredients:</strong> {recipe.ingredients}
      </p>
      <p>
        <strong>Description:</strong> {recipe.description}
      </p>
    </div>
  );
};

export default ViewRecipe;
