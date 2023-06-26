import React, { useState, useEffect } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./recipe.css";

function ViewAllRecipe() {
  const [Recipe, setRecipe] = useState([]);

  useEffect(() => {
    function getRecipe() {
      axios
        .get("http://localhost:5000/api/recipe")
        .then((res) => {
          setRecipe(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getRecipe();
  }, []);

  function deleteRecipe(_id) {
    axios
      .delete("http://localhost:5000/api/recipe/" + _id)
      .then((res) => {
        console.log(res.data);

        alert("Details deleted");
      })
      .catch((err) => {
        alert(err);
      });

    setRecipe(Recipe.filter((recipe) => recipe._id !== _id));
  }
  const btnStyle = {
    borderRadius: 35,
    backgroundColor: "white",
    color: "black",
    fontWeight: "bold",
  };

  function filterData(recipe, searchKey) {
    const result = recipe.filter((recipe) => {
      return recipe.recipeID.toLowerCase().includes(searchKey);
    });
    //console.log("..hostolooo",result);
    setRecipe(result);
  }

  function handleSearchArea(e) {
    const searchKey = e.target.value;

    axios.get("http://localhost:5000/api/recipe").then((res) => {
      filterData(res.data, searchKey);
    });
  }

  return (
    <div>
      <br></br>
      <div>
        <h2 className="availableHostel"> All Recipes </h2>
        <br />
      </div>

      <div className="searchBar-hostal">
        <input
          type="text"
          class="form-s-control rounded"
          placeholder=" 🔍  Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={handleSearchArea}
        />
      </div>
      <br></br>
      <div className="table_search-s">
        <div className="table table-success table-striped">
          <table className="table table-bordered">
            <thead className="">
              <tr>
                <th scope="col"></th>
                <th className="table-secondary" scope="col">
                  Recipe ID
                </th>
                <th className="table-danger" scope="col">
                  Recipe Name
                </th>
                <th className="table-warning" scope="col">
                  Ingredieant
                </th>
                <th className="table-info" scope="col">
                  Description
                </th>
              </tr>
            </thead>

            <tbody className="table-light">
              {Recipe.map((recipe, index) => {
                return (
                  <tr key={recipe._id}>
                    <td>{index + 1}</td>
                    <td>{recipe.recipeID}</td>
                    <td>{recipe.recipeName}</td>
                    <td>{recipe.ingredients}</td>
                    <td>{recipe.description}</td>

                    <td>
                      <a
                        className="btn btn-warning"
                        href={`/UpdateRecipe/${recipe._id}`}
                      >
                        <EditIcon />
                        <b>Update</b>
                      </a>
                      
                      <br></br>  <br></br>
                      <a
                        className="btn btn-danger"
                        href="#"
                        onClick={() => {
                          if (
                            window.confirm(
                              "Are you sure you wish to delete this record?"
                            )
                          )
                            deleteRecipe(recipe._id);
                        }}
                      >
                        <DeleteForeverIcon />
                        <b> Delete </b>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
         
        </div>
        <br></br> <br></br> <br></br> <br></br>
      </div>
    </div>
  );
}
export default ViewAllRecipe;
