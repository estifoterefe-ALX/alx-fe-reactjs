// RecipeList.jsx
import React, { useState } from "react";

function RecipeList() {
  // Track which recipe's menu is open
  const [openMenuId, setOpenMenuId] = useState(null);
  const recipes = [
    { id: 1, name: "Spaghetti Bolognese", favorite: false },
    { id: 2, name: "Chicken Curry", favorite: true },
    { id: 3, name: "Beef Stroganoff", favorite: false },
  ];
  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
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
      {recipes.map((recipe) => (
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
          <span style={{ fontWeight: 500, color: "#333" }}>{recipe.name}</span>

          {/* 3-dot button */}
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

            {/* Dropdown buttons */}
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
                <button
                  //   onClick={() => toggleFavorite(recipe.id)}
                  style={{
                    padding: "6px 12px",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    background: recipe.favorite ? "#ff4757" : "#eee",
                    color: recipe.favorite ? "#fff" : "#000",
                  }}
                >
                  {recipe.favorite ? "❤️ Favorited" : "Add to Favorites"}
                </button>

                <button
                  onClick={() => alert(`Viewing details of ${recipe.name}`)}
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
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
