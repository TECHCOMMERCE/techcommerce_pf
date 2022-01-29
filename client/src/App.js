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
import AdminPanel from "./components/AdminPanel/AdminPanel";
// import ListCategories from "./components/ListCategories/ListCategories";
import ListBrands from "./components/ListBrands/ListBrands";

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
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route
          path="/adminpanel/brands"
          element={
            <>
              <Header />
              <ListBrands />
              <Footer />
            </>
          }
        />

        <Route
          path="/adminpanel/categories"
          element={
            <>
              <Header />
              {/* <ListCategories /> */}
              <Footer />
            </>
          }
        />

        <Route
          path="/adminpanel/products"
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
          path="/adminpanel/products/create"
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
          path="/adminpanel/products/edit/:productid"
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
