import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
