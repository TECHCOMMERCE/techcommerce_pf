import React, { useState, useEffect } from "react";

import {Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login"

import Register from "./components/User/Register";
import Product from "./components/ProductDet/index";
import Cards from "./components/Cards/Cards";
import Users from "./components/admin/Users";
  
import FormProduct from "./components/FormProduct/FormProduct";
import Cart from "./components/Cart/Cart";
import { useDispatch } from "react-redux";
import { getBrands } from "./Store/actions/brands";
import { getCategories } from "./Store/actions/categories";


function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
  }, [dispatch]);

  // Estado que determina si la cuenta logueada (o el invitado) es admin o no. Por defecto es false y cuando se logue, comprobará en un useEffect si es admin
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />

        <Route path="/Details/:id" element={<Product />} /> 
        <Route path='/products' element={<Cards/>} />
        <Route path='/users' element={isAdmin ? <Users/> : <h1>No tenes acceso a esta página</h1>} />
        <Route path="/product/create" element={<FormProduct />} />

        <Route path="/register" element={<Register />} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
     
    </div>
  );
}

export default App;
