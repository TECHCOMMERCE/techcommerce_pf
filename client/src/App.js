import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
 
import "./App.css";

import Home from "./components/Home/Home";
import Products from "./components/Products.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>} />
      {/*   <Route path="/Login" element={<Login />} /> */}
        </Routes>
    </div>
  );
}

export default App;
