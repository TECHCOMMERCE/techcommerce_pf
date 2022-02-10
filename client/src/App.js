import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import Shipping from "./components/Profile/Shipping";
import Help from './components/Ayuda/Help'
// import {getPolicies} from './Store/actions/help'
import DetailHelp from './components/Ayuda/DetailHelp'
import SendMail from "./components/admin/SendMail";
import ListDeliveries from "./components/ListDeliveries/ListDeliveries";
import EditDelivery from "./components/EditDelivery/EditDelivery";

import s from "./assets/styles/app.module.css";

function App() {
  // Estado que determina si la cuenta logueada (o el invitado) es admin o no. Por defecto es false y cuando se logue, comprobará en un useEffect si es admin
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch()
  const user = useSelector(state => state.users.user);

  useEffect(() => {
    if(user){
      if(user.type === "admin"){
        setIsAdmin(true);
      }else{
        setIsAdmin(false);
      }
    }
  }, [user]);

  // useEffect( () => {
  //   dispatch(getPolicies())
  // },[])

  return (
    <div className="App">
      {user && user.force ? null : <Header/>}
     
      <Routes>
        {user && user.force ? null : <Route path="/" element={<Home />} />}
        
        <Route path='/profile/:getDisplay' element={<Profile/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/ayuda' element={<Help/>} />
        <Route path='/ayuda/:id' element={< DetailHelp />} />
        <Route path='shipping' element={<Shipping/>} />
        <Route path='/shipping/:deliveryid' element={<Shipping/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {user && user.force ? null : <>
          <Route path="/products" element={<Cards />} />
          <Route path="/Details/:id" element={<Product />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutData/>}/>
          <Route path="/checkoutError" element={<CheckoutError/>}/>

          <Route path="/dashboard" element={isAdmin ? <Dashboard /> : <h1 className={s.mensajeError}>No tenes acceso a esta página</h1>} />
          <Route
            path="/dashboard/brands"
            element={
              isAdmin ? <>
                <ListBrands />
                <Footer />
              </> : <h1 className={s.mensajeError}>No tenes acceso a esta página</h1>
            }
          />

          <Route
            path="/dashboard/brands/create"
            element={
              isAdmin ? <>
                <CreateBrand />
                <Footer />
              </> : <h1 className={s.mensajeError}>No tenes acceso a esta página</h1>
            }
          />

          <Route
            path="/dashboard/brands/edit/:brandid"
            element={
              isAdmin ? <>
                <EditBrand />
                <Footer />
              </> : <h1 className={s.mensajeError}>No tenes acceso a esta página</h1>
            }
          />

          <Route
            path="/dashboard/categories"
            element={
              isAdmin ? <>
                <ListCategories />
                <Footer />
              </> : <h1 className={s.mensajeError}>No tenes acceso a esta página</h1>
            }
          />

          <Route
            path="/dashboard/categories/create"
            element={
              isAdmin ? <>
                <CreateCategory />
                <Footer />
              </> : <h1 className={s.mensajeError}>No tenes acceso a esta página</h1>
            }
          />

          <Route
            path="/dashboard/categories/edit/:categoryid"
            element={
              isAdmin ? <>
                <EditCategory />
                <Footer />
              </> : <h1 className={s.mensajeError}>No tenes acceso a esta página</h1>
            }
          />

          <Route
            path="/dashboard/products"
            element={
              isAdmin ? <>
                <ListProducts />
                <Footer />
              </> : <h1 className={s.mensajeError}>No tenes acceso a esta página</h1>
            }
          />

          <Route
            path="/dashboard/products/create"
            element={
              isAdmin ? <>
                <CreateProduct />
                <Footer />
              </> : <h1 className={s.mensajeError}>No tenes acceso a esta página</h1>
            }
          />

          <Route
            path="/dashboard/products/edit/:productid"
            element={
              isAdmin ? <>
                <EditProduct />
                <Footer />
              </> : <h1 className={s.mensajeError}>No tenes acceso a esta página</h1>
            }
          />

          <Route
            path="/dashboard/deliveries"
            element={
              isAdmin ? <>
                <ListDeliveries />
                <Footer />
              </> : <h1 className={s.mensajeError}>No tenes acceso a esta página</h1>
            }
          />

          <Route
            path="/dashboard/deliveries/edit/:deliveryid"
            element={
              isAdmin ? <>
                <EditDelivery />
              </> : <h1 className={s.mensajeError}>No tenes acceso a esta página</h1>
            }
          />
          
          <Route path="dashboard/users" element={isAdmin ? <Users /> : <h1 className={s.mensajeError}>No tenes acceso a esta página</h1>}/>
          <Route path="dashboard/orders" element={isAdmin ? <Orders/> : <h1 className={s.mensajeError}>No tenes acceso a esta página</h1>}/>
          <Route path="dashboard/orders/:orderid" element={isAdmin ? <OrderDetail/> : <h1 className={s.mensajeError}>No tenes acceso a esta página</h1>}/>
          <Route path="dashboard/sendMail" element={isAdmin ? <SendMail/> : <h1 className={s.mensajeError}>No tenes acceso a esta página</h1>}/>
        </>}


      </Routes>
    </div>
  );
}

export default App;