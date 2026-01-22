import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
export const DeleteRecipeButton = ({ id }) => {
  const navigate = useNavigate();
  const { removeRecipe } = useRecipeStore();
  const handleDelete = () => {
    try {
      removeRecipe(id);
      alert("Recipe Deleted");
    } catch (error) {
      console.error(error);
    } finally {
      navigate("/");
    }
  };
  return (
    <button
      style={{
        padding: "10px 16px",
        borderRadius: "8px",
        border: "none",
        background: "#ef4444",
        color: "#fff",
        fontWeight: "600",
        cursor: "pointer",
      }}
      onClick={handleDelete}
    >
      🗑️ Delete
    </button>
  );
};
