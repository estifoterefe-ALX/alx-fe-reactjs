import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import ContactPage from "./components/Contact";
import Services from "./components/Services";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
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
