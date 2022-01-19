import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
 
import "./App.css";

import Home from "./components/Home/Home";
import Cards from "./components/Cards/Cards.jsx";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<Cards />} />
        <Route exact path="/" element={<Home />} />
      {/*   <Route path="/Login" element={<Login />} /> */}
        </Routes>
    </div>
  );
}

export default App;
