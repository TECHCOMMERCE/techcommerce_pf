import React, {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Card from './Cart/Card';
import {getProductsCartUser, deleteItemFromCart} from '../Store/actions/carts.js'
import axios from 'axios'
import Swal from 'sweetalert2';
import s from '../assets/styles/Checkout.module.css'
function Checkout() {
  const FORM_ID = 'payment-form';
  const dispatch = useDispatch();
  const data = useSelector(state => state.cart.productscart);
  const user = JSON.parse(localStorage.getItem("user"));
  const idUser = !user?null:user.user.userid;
  const SERVER = process.env.REACT_APP_SERVER || "http://localhost:3001/"
  useEffect(() => {
    dispatch(getProductsCartUser(idUser)); 
  }, []); 
  useEffect(() => {
    
  }, [data]); 

  const handleDeleteItem = (idproduct) => {
    dispatch(deleteItemFromCart(idproduct, idUser))
    Swal.fire({
        icon: 'success',
        text: 'Producto eliminado correctamente!',
        showConfirmButton: false,
        timer: 3000
      })
  }
  
  return (
  <div>
    <h1>Hola</h1>
    <div>
      {
        data.length ? 
        data.map((x) => 
            <div key={x.productid} className={s.card}>
              <img src={x.image} alt={x.name} />
              <p className={s.name}>{x.name}</p>
              <p>{x.quantity}</p>
              <p>{x.price}</p>
              <p>{x.price*x.quantity}</p>
            </div>) : <p>Tu carrito está vacio!</p>
      }
    </div>

    <form id={FORM_ID} method="GET" />
    
  </div>
  );
}

export default Checkout;
