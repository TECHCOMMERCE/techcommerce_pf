import React from 'react';
import style from '../../styles/Profile/tickets.module.css';

 const Tickets = () => {

  let tickets=[{
    orderid: '112222333',
    order: [{
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
    }],
    address:'sadi carnot 180',
    totalPrice: 161466,
    status: 'Processing',
    confirmationDate: '18/02/2022'

  }, 
  {
    orderid: '4444444',
    order: [{
    productid: "154a2cda-7a52-4e28-8896-306fb6117f57",
    name: "LG K62 128 Gb Sky Blue 4 Gb Ram",
    price: 35999,
    image: "http://http2.mlstatic.com/D_973809-MLA48041270287_102021-I.jpg",
    qty: 1
    }],
    address:'sadi carnot 180',
    totalPrice: 35999,
    status: 'Processing',
    confirmationDate: '18/02/2022'

  }    
]


  return (
    <div className={style.container}>
      <h1 style={{color: '#2EB8B0', borderBottom: '2px solid #2EB8B0', paddingBottom: '2%', width: '50%', textAlign: 'center'}}>Mis Compras</h1>
    	<table className={style.table}>
										<thead>
											<tr >
												 <th>ID</th>
												 <th>PRODUCTOS</th>
                         <th>DIRECCIÓN </th>
                         <th>ESTADO</th>
                         <th>TOTAL</th>
                         <th>FECHA DE ENTREGA</th>
											</tr>
										</thead>
									 	<tbody >
											{ tickets.length ?
                        tickets.map( x => {
                          return(
                            <tr>
                              <td>{x.orderid}</td>
                              <td className={style.names}>{x.order.map(z=>{
                                return(
                                <p className={style.pname}>-{z.name}  <b>x </b>  {z.qty }</p>
                                )
                              })}</td>
                              <td>{x.address}</td>
                              <td>{x.status}</td>
                              <td>{x.totalPrice}</td>
                              <td>{x.confirmationDate}</td>

                            </tr>
                          )
                        })
                       : null }
											</tbody> 
										</table>
      </div>
      );
};

export default Tickets;
