import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
 
import "./App.css";

import Home from "./components/Home/Home";

import Register from "./components/User/Register";

import Product from "./components/ProductDet/index";
import Cards from "./components/Cards/Cards";
import Users from "./components/admin/Users";


function App() {
  // Primero empieza en True, luego se implementará en un useEffect el comprobar si el usuario que este logueado es admin o no.
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>} />
      {/*   <Route path="/Login" element={<Login />} /> */}
        <Route path="/Details/:id" element={<Product />} /> 
        <Route path='/products' element={<Cards/>} />

        <Route path='/users' element={isAdmin ? <Users/> : <h1>No tenes acceso a esta página</h1>} />
        
      </Routes>
    </div>
  );
}

export default App;
