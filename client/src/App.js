import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login";
import Register from "./components/User/Register";
import Product from "./components/ProductDet/index";
import Cards from "./components/Cards/Cards";
import ListProducts from "./components/ListProducts/ListProducts"
import CreateProduct from "./components/CreateProduct/CreateProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import Users from "./components/admin/Users";
import Cart from "./components/Cart/Cart";
import Profile from "./components/Profile";
import CheckoutData from "./components/checkout/CheckoutData";
import CheckoutHistory from "./components/checkout/CheckoutHistory";
import CheckoutError from "./components/checkout/CheckoutError";
import Header from "./components/Header";

function App() {
  // Estado que determina si la cuenta logueada (o el invitado) es admin o no. Por defecto es false y cuando se logue, comprobará en un useEffect si es admin
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <div className="App">
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path='/profile' element={<Profile/>} />
        {/*   <Route path="/Login" element={<Login />} /> */}
     

        <Route path="/products" element={<Cards />} />
        <Route path="/Details/:id" element={<Product />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutData/>}/>
        <Route path="/checkoutHistory" element={<CheckoutHistory/>}/>
        <Route path="/checkoutError" element={<CheckoutError/>}/>

        <Route exact path="/products/list" element={isAdmin ? <ListProducts /> : <h1>No tenes acceso a esta página</h1>} />
        <Route exact path="/product/create" element={isAdmin ? <CreateProduct /> : <h1>No tenes acceso a esta página</h1>} />
        <Route exact path="/product/edit/:productid" element={isAdmin ? <EditProduct /> : <h1>No tenes acceso a esta página</h1>}/>
        <Route path="/users" element={isAdmin ? <Users /> : <h1>No tenes acceso a esta página</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
