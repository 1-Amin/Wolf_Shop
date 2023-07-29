import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Footer from "../components/Footer";
import NotFound from "../pages/404";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/notfound" element={<NotFound/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
