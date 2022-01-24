import React from 'react';
import style from '../../styles/Cart/Card.module.css';





const Card = ({produtid, name, image, price, qty}) => {
  return(
    <div className={style.container}>
      <p >{qty} x </p>
      <img src={image} />
      <p className={style.name}>{name}</p>
      <p>$ {price * qty}</p>
      <button className={style.button}>X</button>
    </div>
  )
};



export default Card;