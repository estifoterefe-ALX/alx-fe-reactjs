import { useRecipeStore } from "./recipeStore";
import { useParams, useNavigate } from "react-router-dom";
import { DeleteRecipeButton } from "./DeleteRecipeButton";
const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getRecipeById } = useRecipeStore();
  const recipe = getRecipeById(id);

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "24px 28px",
        background: "#ffffff",
        borderRadius: "14px",
        boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
      }}
    >
      <h1
        style={{
          margin: "0 0 12px",
          fontSize: "28px",
          fontWeight: "700",
          color: "#1f2937",
        }}
      >
        {recipe.title}
      </h1>

      <p
        style={{
          margin: "0 0 24px",
          fontSize: "16px",
          lineHeight: "1.7",
          color: "#4b5563",
        }}
      >
        {recipe.description}
      </p>

      <div
        style={{
          display: "flex",
          gap: "12px",
          borderTop: "1px solid #eee",
          paddingTop: "16px",
        }}
      >
        {/* Edit */}
        <button
          style={{
            padding: "10px 16px",
            borderRadius: "8px",
            border: "none",
            background: "#f59e0b",
            color: "#fff",
            fontWeight: "600",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate(`/updateRecipe/${recipe.id}`);
          }}
        >
          ✏️ Edit Recipe
        </button>

        {/* Delete */}
        <DeleteRecipeButton id={recipe.id} />
      </div>
    </div>
  );
};
export default RecipeDetails;
