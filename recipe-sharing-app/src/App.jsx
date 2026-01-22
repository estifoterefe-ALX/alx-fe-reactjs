// App.jsx
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import FavoriteRecipes from "./components/FavoritesList";
import AddRecipeForm from "./components/AddRecipeForm";
import { RecipeDetails } from "./components/RecipeDetails";
import updateRecipeForm from "./components/updateRecipeForm";

function App() {
  const [active, setActive] = useState("Recipes"); // start with "Recipes"

  const menuItems = [
    { name: "Recipes", path: "/" },
    { name: "Favorites", path: "/favorites" },
    { name: "Add New Recipe", path: "/addRecipe" },
  ];

  return (
    <BrowserRouter>
      <div>
        {/* Menu */}
        <nav style={{ padding: "10px", background: "#f0f0f0" }}>
          {menuItems.map((item) => (
            <Link
              to={item.path}
              key={item.path}
              style={{ textDecoration: "none" }}
            >
              <button
                onClick={() => setActive(item.name)} // store name as string
                style={{
                  marginRight: "10px",
                  padding: "8px 16px",
                  background: active === item.name ? "#007bff" : "#fff",
                  color: active === item.name ? "#fff" : "#000",
                  border: "1px solid #007bff",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {item.name}
              </button>
            </Link>
          ))}
        </nav>

        {/* Display Active Page */}

        {/* Routes (optional placeholder for actual pages) */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/favorites" element={<FavoriteRecipes />} />
          <Route path="/addRecipe" element={<AddRecipeForm />} />
          <Route path="/recipeDetail/:id" element={<RecipeDetails />} />
          <Route path="/updateRecipe/:id" element={<updateRecipeForm />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
