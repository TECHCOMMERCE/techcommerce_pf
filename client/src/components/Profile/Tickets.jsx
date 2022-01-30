import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../../styles/Profile/tickets.module.css';
import {Link} from 'react-router-dom';
import TicketDetail from './TicketDetail';
import { getUserTickets } from '../../Store/actions/tickets';
import { Button } from '@mui/material';

 const Tickets = () => {
  const dispatch= useDispatch();
  const [status, setStatus] = useState('')
  console.log('status', status)
  const [display, setDisplay] = useState({
    name: '',
    ticketid: ''
  })
  const {tickets} = useSelector(state => state.tickets);
  console.log('tickets', tickets)
  const user = JSON.parse(localStorage.getItem('user'))
  
function onClick(id){
  setDisplay({
    name: 'detail',
    ticketid: id
  })
}

function onSelect(e){
    setStatus(e.target.value)
    dispatch(getUserTickets( user.user.userid, status))
}

useEffect(async() => {
  //setStatus('')
 await  dispatch(getUserTickets( user.user.userid, status))
 setDisplay({
  name: '',
  ticketid: ''
 })
}, [status]);


  return (
    <>
    {

    display['name'] === 'detail' ?
      <TicketDetail id={display['ticketid']} />
      :
      <>
      
    <div className={style.container}>
      
      <h1 style={{color: '#2EB8B0', borderBottom: '2px solid #2EB8B0', paddingBottom: '2%', width: '50%', textAlign: 'center'}}>Mis Compras</h1>
      <select className={style.select} onChange={onSelect} >
              <option value='' >Todos</option>
              <option value='Created' >Created</option>
              <option value='Processing' >Processing</option>
              <option value='cancelled' >cancelled</option>
              <option value='Completed' >Completed</option>
              <option value='Send' >Send</option>
              
             
            </select>
    	<table className={style.table}>
										<thead>
											<tr >
												 
												 
                         <th>DIRECCIÓN </th>
                         <th>ESTADO</th>
                         <th>TOTAL</th>
                         <th>ENTREGA</th>
                         <th>DETALLES</th>
											</tr>
										</thead>
									 	<tbody >
											{ tickets?.length ?
                        tickets.map( x => {
                          return(
                            <tr>
                              
                             
                              <td>{x.address}</td>
                              <td>{x.status}</td>
                              <td>$ {x.totalPrice}</td>
                              <td>{x.createdAt}</td>
                              <td><Button variant='contained' onClick={()=>onClick(x.orderid)} >Detalles</Button></td>

                            </tr>
                          )
                        })
                       : null }
											</tbody> 
										</table>
      </div>
      </>
      }
      </>
      );
};

export default Tickets;
