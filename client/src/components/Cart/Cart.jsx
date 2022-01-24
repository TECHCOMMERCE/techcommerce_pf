import React from 'react';
import style from '../../styles/Cart/Cart.module.css';
import Card from './Card';
import { Button } from '@mui/material';
import Navbar from '../NavBar';
import Footer from '../Home/Footer';



let data= [{
  productid: "06cb97f1-7b24-4fe9-bc0f-7008a6507852",
  name: "Xiaomi Mi 11 Lite 5g Ne Dual Sim 128 Gb Negro Trufa 8 Gb Ram",
  price: 85469,
  image: "http://http2.mlstatic.com/D_768134-MLA48496137270_122021-I.jpg",
  qty: 1
},{
productid: "70b3eddd-61e0-42ab-91cf-95481cf30383",
name: "Moto E6i 32 Gb Gris Metálico 2 Gb Ram",
price: 19999,
image: "http://http2.mlstatic.com/D_618420-MLA45656016205_042021-I.jpg",
qty: 2
}, {
productid: "154a2cda-7a52-4e28-8896-306fb6117f57",
name: "LG K62 128 Gb Sky Blue 4 Gb Ram",
price: 35999,
image: "http://http2.mlstatic.com/D_973809-MLA48041270287_102021-I.jpg",
qty: 1
}

]

function total (array) {
  let totalprice=0;
  array.map(x => {
    totalprice= totalprice + x.price
  } )
  return totalprice
}


const Cart = () => {
  return(
    <>
    <Navbar/>
    <div className={style.container}>
      <h2 style={{marginBottom: '5%', fontFamily: 'Poppins'}}>CARRITO ({data.length}) </h2>
      <div className={style.cards}>
        {
          data.length ? 
          data.map(x => {
            return(
              <Card  productid={x.productid} name={x.name} image={x.image} price={x.price} qty={x.qty} />
            )
          }) : <p>Tu carrito está vacio!</p>
        }
      </div>
      <div className={style.total}>
        <h2>TOTAL : ${total(data)}</h2>
      </div>
      <div className={style.buttonContainer}>
      <Button variant='contained' style={{backgroundColor: '#2EB8B0'}} className={style.button}> Pagar </Button>
      </div>
      
    </div>
    <Footer/>
    </>
  )
};



export default Cart;