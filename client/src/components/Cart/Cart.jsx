import React, {  useEffect, useState } from 'react'
import style from '../../styles/Cart/Cart.module.css';
import Card from './Card';
import { Button } from '@mui/material';
import Footer from '../Home/Footer';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate} from 'react-router-dom';
import {getProductsCartUser, changeAmount, deleteItemFromCart, clearCart} from '../../Store/actions/carts.js'
import {getuser} from '../../Store/actions/users.js'
import Swal from 'sweetalert2';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const data = useSelector(state => state.cart.productscart);
  const user = JSON.parse(localStorage.getItem("user"));
  const idUser = !user?null:user.user.userid;
  const [total,setTotal] = useState(0)

  useEffect(() => {
    dispatch(getuser())
    dispatch(getProductsCartUser(idUser)); 
}, [dispatch]); 

useEffect(() => {
  gettotal(data)
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

const handlerChangeQty = (product,idUser,e) => {
  e.preventDefault()
  const { value } = e.target;
  if (value <= product.stock && value >= 1) {
      let auxProducts=data.map(p=>{
          if(p.productid===product.productid){
              return {
                  ...p,
                  quantity:value
              }
          }
          return p;
      })
      dispatch(changeAmount(auxProducts, idUser));
  };
}

function gettotal (array) {
  let totalprice=0;
  array.map(x => {
    totalprice= totalprice + (x.price*x.quantity)
  } )
  setTotal(totalprice)
}

  return(
    <>
    <div className={style.container}>
      <h2 style={{marginBottom: '5%', fontFamily: 'Poppins'}}>CARRITO ({data.length}) </h2>
      <div className={style.cards}>
        {
          data.length ? 
          data.map((x) => {
            return(
              <Card key={x.productid} productid={x.productid} name={x.name} image={x.image} price={x.price} qty={x.quantity} row={x} idUser={idUser} handlerChangeQty={handlerChangeQty} handleDeleteItem={handleDeleteItem}/>
            )
          }) : <p>Tu carrito está vacio!</p>
        }
      </div>
      <div className={style.total}>
        <h2>TOTAL : ${total}</h2>
      </div>
      <div className={style.buttonContainer}>
      <Button variant='contained' style={{backgroundColor: '#2EB8B0'}} className={style.button} 
      onClick={()=>{
        if(idUser && data.length)navigate('/checkout')
        else{
          Swal.fire({
            icon: 'error',
            text: 'No cuenta con ningun producto en el carrito!',
            showConfirmButton: false,
            timer: 3000
          })
        }
      }} disabled={!idUser?true:false}> Pagar </Button>
      {!idUser?<span style={{color: '#EB2020', display: 'block',textAlign: 'center'}}>Debe inicia Sesión</span>:null}
      </div>
      <div className={style.buttonContainer}>
      <Button variant='contained' style={{backgroundColor: '#EB2020'}} className={style.button} 
      onClick={()=>{dispatch(clearCart(idUser))}}> Vaciar Carrito </Button>
      </div>
    </div>
    <Footer/>
    </>
  )
};



export default Cart;