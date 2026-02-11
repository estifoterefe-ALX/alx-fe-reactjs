import HomePage from "./components/HomePage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
