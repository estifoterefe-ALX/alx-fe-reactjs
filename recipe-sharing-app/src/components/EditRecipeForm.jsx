import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
function EditRecipeForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { getRecipeById, editRecipe } = useRecipeStore();
  const recipeForEdit = getRecipeById(id);
  useEffect(() => {
    setDescription(recipeForEdit.description);
    setTitle(recipeForEdit.title);
  }, [recipeForEdit]);
  const handleSubmit = () => {
    try {
      const recpie = {
        id: id,
        title: title,
        description: description,
      };
      editRecipe(id, recpie);
      alert("Recipe Edited Successfully");
    } catch (error) {
      console.error(error);
    } finally {
      navigate("/");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "420px",
        margin: "40px auto",
        padding: "24px",
        borderRadius: "12px",
        backgroundColor: "#ffffff",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <h2
        style={{
          margin: 0,
          textAlign: "center",
          fontSize: "22px",
          fontWeight: "600",
          color: "#333",
        }}
      >
        Edit Recipe
      </h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe title"
        style={{
          padding: "12px 14px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          fontSize: "15px",
          outline: "none",
        }}
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe description"
        rows={4}
        style={{
          padding: "12px 14px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          fontSize: "15px",
          resize: "none",
          outline: "none",
        }}
      />

      <button
        type="submit"
        style={{
          marginTop: "8px",
          padding: "12px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#4f46e5",
          color: "#fff",
          fontSize: "15px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Edit Recipe
      </button>
    </form>
  );
}
export default EditRecipeForm;
