import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./components/Home/Home";
import Product from "./components/ProductDet/index";
import Cards from "./components/Cards/Cards";
import FormProduct from "./components/FormProduct/FormProduct";
import { useDispatch } from "react-redux";
import { getBrands } from "./Store/actions/brands";
import {getCategories} from "./Store/actions/categories";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/*   <Route path="/Login" element={<Login />} /> */}
        <Route path="/Details/:id" element={<Product />} />
        <Route path="/products" element={<Cards />} />
        <Route path="/product/create" element={<FormProduct />} />
      </Routes>
    </div>
  );
}

export default App;
