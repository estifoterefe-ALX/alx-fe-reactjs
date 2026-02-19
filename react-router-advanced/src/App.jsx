import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
