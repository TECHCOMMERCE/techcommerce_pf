import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
 
import "./App.css";

import Home from "./components/Home/Home";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      {/*   <Route path="/Login" element={<Login />} /> */}
        </Routes>
    </div>
  );
}

export default App;
