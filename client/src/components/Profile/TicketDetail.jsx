import { useEffect, useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneTicket } from "../../Store/actions/tickets";
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
            <div className={style.card}>
              <img src={x.image} />
              <Link to={`/Details/${x.productid}`}><p style={{width: '200px'}}>{x.name}</p></Link>
              <p>${x.price}</p>
              <p>x{x.detail.quantity}</p>
            </div>
          )
        })  : null
    }
       <p className={style.p}><b>Dirección: </b>{ticket.address}</p>
      <p className={style.p}><b>Estado:</b> {ticket.status}</p>
      <p className={style.p} style={{fontSize: '19px'}}><b>TOTAL: </b>${ticket.totalPrice}</p>

    <Button variant='outlined' style={{marginTop: '5%'}} className={style.volver} onClick={()=> setDisplay('tickets')} ><ArrowBackIcon/> Volver</Button>
    </div>
    </>
    
    : <Tickets />
    }
    </>
    )
};


export default TicketDetail;
