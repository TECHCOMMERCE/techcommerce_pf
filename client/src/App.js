import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
 
import "./App.css";

import Home from "./components/Home/Home";
import Cards from "./components/Cards/Cards.jsx";
import Details from './components/Details/Details.jsx';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<Cards />} />
        <Route exact path="/" element={<Home />} />
        <Route path='/details/:id' element={<Details/>} />
      {/*   <Route path="/Login" element={<Login />} /> */}
        </Routes>
    </div>
  );
}

export default App;
