// RecipeList.jsx
import React, { useState, useMemo } from "react";
import { useRecipeStore } from "./recipeStore";
import { Link, useNavigate } from "react-router-dom";
import { DeleteRecipeButton } from "./DeleteRecipeButton";
import { useStoreRecipe } from "./recipeStore";
function RecommendationsList() {
  // Track which recipe's menu is open
  const [openMenuId, setOpenMenuId] = useState(null);
  //const navigate = useNavigate();
  const recipes = useStoreRecipe.use.favorite;
  const isSeaching = useStoreRecipe.use.isSeaching;
  const filteredRecipes = useStoreRecipe.use.filteredRecipes;
  const display = useMemo(() => {
    if (isSeaching && filteredRecipes.length > 0) {
      return filteredRecipes;
    }

    if (isSeaching && filteredRecipes.length === 0) {
      return []; // show empty when searching but no results
    }
    if (isSeaching && !filteredRecipes) {
      return recipes;
    }

    return recipes; // default
  }, [filteredRecipes, recipes, isSeaching]);

  const toggleMenu = (id) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "15px",
        marginTop: "20px",
      }}
    >
      {display?.length === 0 ? (
        <div
          style={{
            marginTop: "40px",
            textAlign: "center",
            color: "#666",
            fontSize: "16px",
          }}
        >
          No recipes 🍽️
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          {display.map((recipe) => (
            <div
              key={recipe.id}
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px",
                borderRadius: "10px",
                background: "white",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <span style={{ fontWeight: 500, color: "#333" }}>
                {recipe.title}
              </span>

              {/* 3-dot menu */}
              <div style={{ position: "relative" }}>
                <button
                  onClick={() => toggleMenu(recipe.id)}
                  style={{
                    border: "none",
                    background: "transparent",
                    fontSize: "20px",
                    cursor: "pointer",
                    padding: "4px 8px",
                  }}
                >
                  ⋮
                </button>

                {openMenuId === recipe.id && (
                  <div
                    style={{
                      position: "absolute",
                      right: 0,
                      top: "28px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      background: "white",
                      padding: "10px",
                      borderRadius: "8px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                      zIndex: 100,
                    }}
                  >
                    <Link to={`/recipeDetail/${recipe.id}`}>
                      <button
                        style={{
                          padding: "6px 12px",
                          border: "none",
                          borderRadius: "6px",
                          cursor: "pointer",
                          background: "#007bff",
                          color: "#fff",
                        }}
                      >
                        View Details
                      </button>
                    </Link>

                    <DeleteRecipeButton id={recipe.id} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecommendationsList;
