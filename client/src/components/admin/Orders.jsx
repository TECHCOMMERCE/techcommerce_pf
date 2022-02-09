import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from "axios";

import s from "../../assets/styles/admin/Orders.module.css";

const Orders = () => {
    const [status, setStatus] = useState("todos");

    const navigate = useNavigate();

    const [orders, setOrders] = useState([]);

    const SERVER = process.env.REACT_APP_SERVER || "http://localhost:3001/";
    useEffect(async() => {
        let url = `${SERVER}orders`;
        
        if(status !== "todos") url += `?status=${status}`;

        console.log(url);
        const res = await axios.get(url);

        setOrders(res.data.orders);
    }, [status]);

    return (
        <div className={s.container}>
            <div className={s.options}>
                <select 
                    value={status} 
                    className={s.select}
                    onChange={e => {
                        setStatus(e.target.value)
                    }}
                >
                    <option value="todos">todos</option>
                    <option value="Completed">completadas</option>
                    <option value="cancelled">canceladas</option>
                    <option value="Processing">procesando</option>
                    <option value="Created">creadas</option>
                    <option value="Send">enviadas</option>
                </select>
            </div>

            <div className={s.tableZone}>
                <div>
                    <span>
                        cantidad de ordenes
                        {status === "creada" ? " creadas" :
                        status === "procesando" ? " procesando" :
                        status === "cancelada" ? " canceladas" :
                        status === "completa" ? " completas" : null}
                        {": " + (orders ? orders.length : "cargando")}
                    </span>
                    
                    <table className={s.table}>
                        <thead>
                            <tr className={s.thead}>
                                <th>order id</th>
                                <th>status</th>
                                <th>user</th>
                                <th>price</th>
                                <th>address</th>
                                <th>date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {orders?.map((order, i) => {
                                return(
                                    <tr 
                                        key={order.orderid} 
                                        className={`${s.row} ${i%2 != 0 ? s.row1 : null}`}
                                        onClick={() => navigate("/dashboard/orders/"+order.orderid)}
                                    >
                                        <td className={s.col}>{order.orderid}</td>
                                        <td>{order.status}</td>
                                        <td>{order.user}</td>
                                        <td>{order.price}</td>
                                        <td>{order.address}</td>
                                        <td>{order.date}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>    
                </div>  
                
            </div>
        </div>
    )
}   

export default Orders
