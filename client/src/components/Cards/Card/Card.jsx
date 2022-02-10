import React, {useEffect, useState} from "react";
import { Main, Name, Img, Stock, Link, Price, Button } from "./styles.js";
import { useSelector, useDispatch } from 'react-redux';
import {NavLink} from 'react-router-dom'; 
//import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { addToCart,getProductsCartUser } from '../../../Store/actions/carts';
import Swal from 'sweetalert2';

const Card = ({id, name, stock, image , price, product}) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const cart = useSelector(state => state.cart.productscart); 
  const idUser = !user?null:user.user.userid;
  const [qty, setQty] =useState(1)
  const dispatch= useDispatch();
  function add(){
    setQty(qty + 1)
  }
  function remove(){
    setQty(qty - 1)
  }

  const addCart = (product) => {
		dispatch(addToCart({...product,quantity: qty},idUser,cart))
		Swal.fire({
      icon: 'success',
      text: 'Producto agregado correctamente!',
    })
	}
  useEffect(() => {
		dispatch(getProductsCartUser(idUser)); 
	}, [dispatch, id,idUser]);
  return (
    <Main>
      <Img src={image} alt=''  />

      <div style={{height: '12%', overflow: 'hidden'}}>
      <Link  href={`/Details/${id}`}><Name style={{fontFamily: 'Poppins'}}>{name}</Name></Link>
      </div>
      <Price>
      <p style={{color: '#2EB8B0', textAlign: 'center'}}>$ {price}</p>
      </Price>
      
      <p style={{fontFamily: 'Poppins'}}>{stock} {stock===0 ? 'Agotado': 'disponibles!'}</p>
      {/* <Stock>
      <Button onClick={add} size='small' style={{ height: '30px'}} variant="text"><AddIcon/> </Button>
      <p style={{marginRight: '20px', marginLeft: '20px', marginTop: '5px'}}>{qty}</p>
      <Button onClick={remove} style={{ height: '30px'}} variant="text"><RemoveIcon/> </Button>
      </Stock> */}
      <Link  href={`/Details/${id}`}><Button style={{backgroundColor: '#2EB8B0', color: 'white'}} variant="contained">Detalles</Button></Link>
      <Button style={{backgroundColor: '#2EB8B0', color: 'white'}} variant="contained" onClick={()=>addCart(product)}>Agregar al carrito</Button>
    </Main>
  )
}

export default Card;