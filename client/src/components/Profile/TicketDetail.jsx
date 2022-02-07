import { useEffect, useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneTicket } from "../../Store/actions/tickets.js";
import style from '../../styles/Profile/Detail.module.css';
import { usersReducer } from "../../Store/reducer/users";
import Tickets from "./Tickets";
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

 const TicketDetail = ({id}) => {
   console.log('id', id)
  const dispatch= useDispatch();
  const {ticket} =useSelector(state => state.tickets)
  console.log('ticket', ticket);
  const [display, setDisplay] = useState('')

useEffect(() => {
  dispatch(getOneTicket(id))
}, [dispatch]);



  return (
    <>
    {
      display==='' ?
      <>
    <div className={style.ticket}>
      
      <h2>ORDEN</h2>
      {ticket.products?
        ticket.products.map(x => {
          return(
            <div className={style.card} key={x.productid}>
              <img src={x.image} />
              <Link className={style.link} to={`/Details/${x.productid}`}><p className={style.infoCard} style={{width: '200px'}}>{x.name}</p></Link>
              <p className={style.infoCard}>${x.price}</p>
              <p className={style.infoCard}>x{x.detail.quantity}</p>
            </div>
          )
        })  : null
    }
       <p className={style.p}><b>Dirección: </b>{ticket.address}</p>
      <p className={style.p}><b>Estado:</b> {ticket.delivery?.status? ticket.delivery.status : ticket.status}</p>
      <div>
       <a href={`/shipping/${ticket.delivery?.deliveryid}`} ><button disabled={!ticket.delivery}>Seguir Envío</button></a> 
      </div>
      <p className={style.p} style={{fontSize: '19px'}}><b>TOTAL: </b>${ticket.totalPrice}</p>

    <Button variant='outlined' style={{marginTop: '10%'}} className={style.volver} onClick={()=> setDisplay('tickets')} ><ArrowBackIcon/> Volver</Button>
    </div>
    </>
    
    : <Tickets />
    }
    </>
    )
};


export default TicketDetail;
