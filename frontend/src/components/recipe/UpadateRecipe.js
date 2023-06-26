import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";
import "./recipe.css";

function UpdateRecipe() {
  const [valid, setValid] = useState(false);
  const [recipe, setRecipe] = useState({
    recipeID: "",
    recipeName: "",
    ingredients: "",
    description: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/recipe/${id}`
        );
        setRecipe(response.data);
      } catch (error) {
        alert(error.message);
      }
    };

    fetchRecipe();
  }, [id]);

  const updateData = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/api/recipe/${id}`, recipe);
      alert("Recipe updated");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  return (
    <div className="">
      <h2 className="heading-s">Update Recipe Details</h2>
      <div className="form-s">
        <div className="formStyle-s">
          <form onSubmit={updateData}>
            <div className="form-group-s row ">
              <label htmlFor="recipeID" className="col-sm-2 col-form-label">
                Recipe ID:
              </label>
              <div className="col-sm-10 supLabel">
                <input
                  type="text"
                  id="recipeID"
                  name="recipeID"
                  value={recipe.recipeID}
                  onChange={handleChange}
                  disabled
                />
              </div>
            </div>
            <div className="form-group-s row">
              <label htmlFor="recipeName" className="col-sm-2 col-form-label">
                Recipe Name:
              </label>
              <div className="col-sm-10 supLabel">
                <input
                  type="text"
                  id="recipeName"
                  name="recipeName"
                  value={recipe.recipeName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group-s row">
              <label htmlFor="ingredients" className="col-sm-2 col-form-label">
                Ingredients:
              </label>
              <div className="col-sm-10 supLabel">
                <textarea
                  id="ingredients"
                  name="ingredients"
                  value={recipe.ingredients}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
            <div className="form-group-s row">
              <label htmlFor="description" className="col-sm-2 col-form-label">
                Description:
              </label>
              <div className="col-sm-10 supLabel">
                <input
                  id="description"
                  name="description"
                  value={recipe.description}
                  onChange={handleChange}
                  required
                ></input>
              </div>
            </div>
            <div className="updateBtn">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateRecipe;
