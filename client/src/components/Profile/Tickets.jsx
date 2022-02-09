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

const [dimensions, setDimensions] = React.useState({ 
  height: window.innerHeight,
  width: window.innerWidth
})
React.useEffect(() => {
  function handleResize() {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth
    })
}
  window.addEventListener('resize', handleResize)
  return _ => {
    window.removeEventListener('resize', handleResize)
}
})


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
      
      <h1 className={style.title} >Mis Compras</h1>
      <select className={style.select} onChange={onSelect} >
              <option value='' >Todos</option>
              <option value='Created' >Created</option>
              <option value='Processing' >Processing</option>
              <option value='cancelled' >cancelled</option>
              <option value='Completed' >Completed</option>
              <option value='Send' >Send</option>
              
             
            </select>
            {
              dimensions.width < 600 ?
              <table className={style.tablemobile}>
                <thead>
                  <th>FECHA</th>
                  
                  <th>Detalles</th>
                </thead>
                <tbody>
                { tickets?.length ?
                        tickets.map( x => {
                          return(
                            <tr key={x.orderid}>
                              <td>{x.createdAt}</td>
                              
                              <td><button className={style.btnmat} variant='contained' onClick={()=>onClick(x.orderid)} >Detalles</button></td>

                            </tr>
                          )
                        })
                       : null }
                </tbody>
              </table>
              :
              <table className={style.table}>
										<thead>
											<tr >
												 
												 
                         <th>DIRECCIÓN </th>
                         <th>ESTADO</th>
                         <th>TOTAL</th>
                         <th>FECHA</th>
                         <th>DETALLES</th>
											</tr>
										</thead>
									 	<tbody >
											{ tickets?.length ?
                        tickets.map( x => {
                          return(
                            <tr key={x.orderid}>
                              
                             
                              <td>{x.address}</td>
                              <td>{x.status}</td>
                              <td>$ {x.totalPrice}</td>
                              <td>{x.createdAt}</td>
                              <td><button className={style.btnmat} onClick={()=>onClick(x.orderid)} >Detalles</button></td>

                            </tr>
                          )
                        })
                       : null }
											</tbody> 
										</table>
            }
    
      </div>
      </>
      }
      </>
      );
};

export default Tickets;
