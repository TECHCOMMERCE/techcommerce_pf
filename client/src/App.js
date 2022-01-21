import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
 
import "./App.css";

import Home from "./components/Home/Home";
import Login from "./components/Login"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
