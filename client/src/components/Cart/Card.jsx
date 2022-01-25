import React from 'react';
import style from '../../styles/Cart/Card.module.css';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const Card = ({produtid, name, image, price, qty, row,idUser,handlerChangeAmount,handleDeleteItem}) => {
  return(
    <div className={style.container}>
      <img src={image} />
      <p className={style.name}>{name}</p>
      <p >x <input name="amount" type="number" min={1} max={row.stock} value={qty} onChange={(e)=>handlerChangeAmount(row,idUser,e)}></input>  </p>
      <p>$ {price * qty}</p>
      <button className={style.button} onClick={()=>handleDeleteItem(row.productid)}><FontAwesomeIcon icon={faTrashAlt}/></button>
    </div>
  )
};



export default Card;