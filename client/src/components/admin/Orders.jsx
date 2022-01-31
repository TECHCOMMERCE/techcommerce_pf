import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import s from "../../assets/styles/admin/Orders.module.css";

const Orders = () => {
    const [status, setStatus] = useState("todos");

    const navigate = useNavigate();

    // los registros
    const orders = [
        {
            orderid: "d3-d4s-23gf-u12",
            status: "Complete",
            user: "Juan Gomez",
            price: 3294.23,
            address: "av. calle falsa 3214",
            date: "12/06/2022"
        },

        {
            orderid: "bv-de92-f93j-31r",
            status: "Complete",
            user: "Agustina Romano",
            price: 234.12,
            address: "av. calle falsa 1010",
            date: "10/06/2022"
        },
    ]

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
                    <option value="completa">completadas</option>
                    <option value="cancelada">canceladas</option>
                    <option value="procesando">procesando</option>
                    <option value="creada">creadas</option>
                </select>
            </div>

            <div className={s.tableZone}>
                {(() => {
                    if(orders){
                        return(<div>
                            <span>
                                cantidad de ordenes
                                {status === "creada" ? " creadas" :
                                status === "procesando" ? " procesando" :
                                status === "cancelada" ? " canceladas" :
                                status === "completa" ? " completas" : null}
                                {": " + orders.length}
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
                                    {orders.map((order, i) => {
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
                        </div>)
                    }else{
                        return(<h1>Cargando...</h1>)
                    }
                })()}
            </div>
        </div>
    )
}   

export default Orders
