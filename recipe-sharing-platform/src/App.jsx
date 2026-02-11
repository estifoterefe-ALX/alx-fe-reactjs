import HomePage from "./components/HomePage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/addRecipe" element={<AddRecipeForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
