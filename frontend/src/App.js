import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/nav/Header";
import Footer from "./components/nav/Footer";
import AddRecipe from "./components/recipe/AddRecipe";
import ViewAllRecipe from "./components/recipe/ViewAllRecipe";
//import ViewRecipe from "./components/recipe/ViewRecipe";
import UpdateRecipe from "./components/recipe/UpadateRecipe";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<ViewAllRecipe />} />
        <Route path="/AddRecipe" element={<AddRecipe />} />
        <Route path="/UpdateRecipe/:id" element={<UpdateRecipe />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
