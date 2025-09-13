// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Import these
import Layout from "./components/layout/Layout";
import ContactPage from "./page/ContactPage";
import About_UsPage from "./page/About_UsPage";
import ShopPage from "./page/ShopPage";
import AuthFormPage from "./page/AuthFormPage";
import CallComponent from "./components/sections/CallComponent";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Layout />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About_UsPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/account" element={<AuthFormPage />} />
        <Route path="/call" element={<CallComponent />} />

      </Routes>
      <Footer />
    </Router>
     
  );
}

export default App; 
