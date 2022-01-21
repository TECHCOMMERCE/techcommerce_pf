import React from "react";
import { Route, Routes } from "react-router-dom";
 
import "./App.css";

import Home from "./components/Home/Home";
import Login from "./components/Login"
import Product from "./components/ProductDet/index";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Home />} />
        {/*   <Route path="/Login" element={<Login />} /> */}
        <Route path="/Details/:id" element={<Product />} /> 
        <Route path='/products' element={<Cards/>} />        
      </Routes>
    </div>
  );
}

export default App;
