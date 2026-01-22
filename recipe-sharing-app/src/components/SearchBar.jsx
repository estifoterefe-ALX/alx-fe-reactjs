import { useRecipeStore } from "./recipeStore";
const SeachBar = () => {
  const { setSearching, setSearchTerm } = useRecipeStore();
  const handleFocus = (e) => {
    if (e.target.value.length > 0) {
      setSearching(true);
    }
  };

  const handleBlur = (e) => {
    if (e.target.value.length === 0) {
      setSearching(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSearching(value.length > 0);
  };
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        position: "relative",
      }}
    >
      {/* Search icon */}
      <span
        style={{
          position: "absolute",
          left: "14px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "#9ca3af",
          fontSize: "16px",
          pointerEvents: "none",
        }}
      >
        🔍
      </span>

      <input
        type="text"
        placeholder="Search recipes..."
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          width: "100%",
          padding: "12px 14px 12px 42px",
          borderRadius: "999px",
          border: "1px solid #ddd",
          fontSize: "15px",
          outline: "none",
          boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        }}
      />
    </div>
  );
};
export default SeachBar;
