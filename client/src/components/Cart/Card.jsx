import React from 'react';
import style from '../../styles/Cart/Card.module.css';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'




const Card = ({productid, name, image, price, qty, row,idUser,handlerChangeQty,handleDeleteItem}) => {
  return(
    <div className={style.container}>
      <img src={image} />
      <Link to={`/Details/${productid}`}><p className={style.name}>{name}</p></Link>
      <p >x <input name="amount" type="number" min={1} max={row.stock} value={qty} onChange={(e)=>handlerChangeQty(row,idUser,e)}></input></p>
      <p>$ {price}c/u</p>
      <p>$ {price * qty}</p>
      <button className={style.button} onClick={()=>handleDeleteItem(row.productid)}><FontAwesomeIcon icon={faTrashAlt}/></button>
    </div>
  )
};



export default Card;