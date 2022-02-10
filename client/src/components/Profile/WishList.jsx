import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../../styles/Profile/tickets.module.css';
import {Link} from 'react-router-dom';
import { Button } from '@mui/material';

 const WishList = () => {
  const fav = useSelector(state => state.wishlist.wishList);

  const user = JSON.parse(localStorage.getItem('user'))
  
  return (
    <>
    <div className={style.container}>
      
      <h1 className={style.titlewhislist} style={{color: '#2EB8B0', borderBottom: '2px solid #2EB8B0', paddingBottom: '2%', width: '50%', textAlign: 'center'}}>Mis Favoritos</h1>
      
    	<table className={style.table}>
        <thead>
          <tr >
              <th>PRODUCTOS</th>
              <th>ESTADO</th>
              <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody >
          { fav?.map( x =>( 
                <tr key={x.productid}>
                  <td>{x.name}</td>
                  <td>{x.stock>0?'Disponible':'No disponible'}</td>
                  <td><Link to={`/Details/${x.productid}`}><button className={style.btnmat} variant='contained' /* onClick={()=>onClick(x.orderid)} */ >Detalles</button></Link></td>

                </tr>
              )
            )}
        </tbody> 
      </table>
      </div>
      </>
      
     );
};

export default WishList;
