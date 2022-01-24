import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./components/Home/Home";

import Register from "./components/User/Register";

import Product from "./components/ProductDet/index";
import Cards from "./components/Cards/Cards";
import ListProducts from "./components/ListProducts/ListProducts";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import EditProduct from "./components/EditProduct/EditProduct";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/*   <Route path="/Login" element={<Login />} /> */}
        <Route path="/Details/:id" element={<Product />} />
        <Route path="/products" element={<Cards />} />
        <Route exact path="/products/list" element={<ListProducts />} />
        <Route exact path="/product/create" element={<CreateProduct />} />
        <Route exact path="/product/edit/:productid" element={<EditProduct />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
