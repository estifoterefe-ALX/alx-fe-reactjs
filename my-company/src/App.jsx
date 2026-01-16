import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import ContactPage from "./components/Contact";
import Services from "./components/Services";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
