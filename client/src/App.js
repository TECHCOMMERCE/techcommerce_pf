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
//import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import ListBrands from "./components/ListBrands/ListBrands";
import CreateBrand from "./components/CreateBrand/CreateBrand";
import EditBrand from "./components/EditBrand/EditBrand";
import ListCategories from "./components/ListCategories/ListCategories";
import CreateCategory from "./components/CreateCategory/CreateCategory";
import EditCategory from "./components/EditCategory/EditCategory";
import Profile from "./components/Profile/index";
import CheckoutData from "./components/checkout/CheckoutData";
import CheckoutError from "./components/checkout/CheckoutError";
import Header from "./components/Header";
import Orders from "./components/admin/Orders";
import OrderDetail from "./components/admin/OrderDetail";

function App() {
  // Estado que determina si la cuenta logueada (o el invitado) es admin o no. Por defecto es false y cuando se logue, comprobará en un useEffect si es admin
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <div className="App">
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/profile/:getDisplay' element={<Profile/>} />
        <Route path='/profile' element={<Profile/>} />
        {/*   <Route path="/Login" element={<Login />} /> */}
     

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
          path="/dashboard/brands/create"
          element={
            <>
              <Header />
              <CreateBrand />
              <Footer />
            </>
          }
        />

        <Route
          path="/dashboard/brands/edit/:brandid"
          element={
            <>
              <Header />
              <EditBrand />
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
          path="/dashboard/categories/edit/:categoryid"
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

        <Route path="/Details/:id" element={<Product />} />


        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutData/>}/>
        <Route path="/checkoutError" element={<CheckoutError/>}/>

        <Route exact path="/products/list" element={isAdmin ? <ListProducts /> : <h1>No tenes acceso a esta página</h1>} />
        <Route exact path="/product/create" element={isAdmin ? <CreateProduct /> : <h1>No tenes acceso a esta página</h1>} />
        <Route exact path="/product/edit/:productid" element={isAdmin ? <EditProduct /> : <h1>No tenes acceso a esta página</h1>}/>
        <Route path="dashboard/users" element={isAdmin ? <Users /> : <h1>No tenes acceso a esta página</h1>}/>
        <Route path="dashboard/orders" element={isAdmin ? <Orders/> : <h1>No tenes acceso a esta página</h1>}/>
        <Route path="dashboard/orders/:orderid" element={isAdmin ? <OrderDetail/> : <h1>No tenes acceso a esta página</h1>}/>

      </Routes>
    </div>
  );
}

export default App;
