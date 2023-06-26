import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./recipe.css";

function AddRecipe() {
  const [valid, setValid] = useState(false);
  const [recipe, setrecipe] = useState({
    recipeID: "",
    recipeName: "",
    ingredients: "",
    description: "",
  });

  let navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/recipe", recipe)
      .then(() => {
        alert("Recipe details are added");
        setValid(true);
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });

    setrecipe({
      recipeID: "",
      recipeName: "",
      ingredients: "",
      description: "",
    });
  }
  function handleChange(event) {
    const { name, value } = event.target;

    setrecipe((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="">
      <br></br>
      <h2 className="heading-s">Add Recipe Details</h2>

      <div className="form-s">
        <br></br>
        <div className="formStyle-s">
          <form onSubmit={sendData}>
            <div className="form-group-s row">
              <label for="recipeID" className="col-sm-2 col-form-label">
                <b> Recipe Id </b>
              </label>
              <div className="col-sm-10 supLabel">
                <input
                  type="text"
                  className="form-s-control"
                  id="recipeID"
                  name="recipeID"
                  placeholder="enter recipe id"
                  onChange={handleChange}
                  value={recipe.recipeID}
                  required
                />
              </div>
            </div>

            <div className="form-group-s row">
              <label for="recipeName" className="col-sm-2 col-form-label">
                <b> Recipe Name </b>
              </label>
              <div className="col-sm-10 supLabel">
                <input
                  type="text"
                  className="form-s-control"
                  id="recipeName"
                  name="recipeName"
                  placeholder="enter recipe name"
                  onChange={handleChange}
                  value={recipe.recipeName}
                  required
                />
              </div>
            </div>
            <div className="form-group-s row">
              <label for="ingredients" className="col-sm-2 col-form-label">
                <b> Ingredients </b>
              </label>
              <div className="col-sm-10 supLabel">
                <textarea
                  type="Text"
                  className="form-s-control"
                  id="ingredients"
                  name="ingredients"
                  placeholder="enter ingredients"
                  onChange={handleChange}
                  value={recipe.ingredients}
                  required
                />
              </div>
            </div>

            <div className="form-group-s row">
              <label for="description" className="col-sm-2 col-form-label">
                <b> Description </b>
              </label>
              <div className="col-sm-10 supLabel">
                <input
                  type="text"
                  className="form-s-control"
                  id="description"
                  name="description"
                  placeholder="enter description"
                  onChange={handleChange}
                  value={recipe.description}
                  required
                />
              </div>
            </div>

            <div>
              <div className="add-btn">
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </form>
          <br></br>
        </div>
      </div>
    </div>
  );
}
export default AddRecipe;
