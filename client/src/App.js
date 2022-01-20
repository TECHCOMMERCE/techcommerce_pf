import React from "react";
import { Route, Routes } from "react-router-dom";
 
import "./App.css";

import Home from "./components/Home/Home";
import Product from "./components/ProductDet/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      {/*   <Route path="/Login" element={<Login />} /> */}
        <Route path="/Details" element={<Product />} /> 

        
        </Routes>
    </div>
  );
}

export default App;
