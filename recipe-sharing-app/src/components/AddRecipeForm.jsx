import { useState } from "react";
function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = () => {};
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
        Add New Recipe
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
        Add Recipe
      </button>
    </form>
  );
}
export default AddRecipeForm;
