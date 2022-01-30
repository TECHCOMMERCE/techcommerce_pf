import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login";
import Register from "./components/User/Register";
import Product from "./components/ProductDet/index";
import Cards from "./components/Cards/Cards";
import ListProducts from "./components/ListProducts/ListProducts";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import Users from "./components/admin/Users";
import Cart from "./components/Cart/Cart";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import ListBrands from "./components/ListBrands/ListBrands";
import ListCategories from "./components/ListCategories/ListCategories";
import CreateCategory from "./components/CreateCategory/CreateCategory";
import EditCategory from "./components/EditCategory/EditCategory";

function App() {
  // Estado que determina si la cuenta logueada (o el invitado) es admin o no. Por defecto es false y cuando se logue, comprobará en un useEffect si es admin
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        {/*   <Route path="/Login" element={<Login />} /> */}
        <Route path="/Details/:id" element={<Product />} />
        <Route path="/products" element={<Cards />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/dashboard/brands"
          element={
            <>
              <Header />
              <ListBrands />
              <Footer />
            </>
          }
        />

        <Route
          path="/dashboard/categories"
          element={
            <>
              <Header />
              <ListCategories />
              <Footer />
            </>
          }
        />

        <Route
          path="/dashboard/categories/create"
          element={
            <>
              <Header />
              <CreateCategory />
              <Footer />
            </>
          }
        />

        <Route
          path="/dashboard/categories/edit"
          element={
            <>
              <Header />
              <EditCategory />
              <Footer />
            </>
          }
        />

        <Route
          path="/dashboard/products"
          element={
            <>
              <Header />
              <ListProducts />
              <Footer />
            </>
          }
        />

        <Route
          exact
          path="/dashboard/products/create"
          element={
            <>
              <Header />
              <CreateProduct />
              <Footer />
            </>
          }
        />

        <Route
          exact
          path="/dashboard/products/edit/:productid"
          element={
            <>
              <Header />
              <EditProduct />
              <Footer />
            </>
          }
        />
        
        <Route
          path="/users"
          element={isAdmin ? <Users /> : <h1>No tenes acceso a esta página</h1>}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
