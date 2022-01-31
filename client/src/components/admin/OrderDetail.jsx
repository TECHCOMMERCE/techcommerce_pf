import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {FaEdit, FaCheckCircle} from "react-icons/fa";
// import {BiCheckCircle} from "react-icons/bi";
import {MdCancel, MdCheckCircle} from "react-icons/md";

import s from "../../assets/styles/admin/OrderDetail.module.css";
import axios from 'axios';

const OrderDetail = () => {
    // Lo usaré para hacer la petición
    const params = useParams();

    const [order, setOrder] = useState(null);

    const [mode, setMode] = useState("view");

    const [newStatus, setNewStatus] = useState();
    
    const SERVER = process.env.REACT_APP_SERVER || "http://localhost:3001/";
    useEffect(async() => {
        // setOrder({
        //     orderid: "23-g61-g90su4-1g",
        //     date: "12/02/2022",
        //     status: "procesando",
        //     user: "Lucas Alvarez",
        //     price: 324.12,
        //     products: [
        //         {
        //             productid: "12-gt2-1sy5-23",
        //             photo: "./assets/img/playstation5.png",
        //             name: "PlayStation 5",
        //             price: 100000,
        //             cant: 1,
        //         },
        //         {
        //             productid: "a7-g82j-f2-g91k",
        //             photo: "./assets/img/nintendoSwitch.png",
        //             name: "Nintendo switch",
        //             price: 80000,
        //             cant: 1,
        //         }
        //     ]
        // });

        const {orderid} = params;

        console.log("hola voy a hacer petición a " + `${SERVER}orders/${orderid}`)

        const res = await axios.get(`${SERVER}orders/${orderid}`);

        console.log(res.data.order);
        
        setOrder(res.data.order)
    }, [newStatus]);

    useEffect(() => {
        if(order){
            setNewStatus(order.status);
        }
    }, [order]);

    return (
        <div className={s.container}>
            {order ? (<>
                <div className={s.info}>
                    <div className={s.row}>
                        <span className={s.tag}>order id: </span>
                        <span className={s.value}>{order.orderid}</span>
                    </div>

                    <div className={s.row}>
                        <span className={s.tag}>fecha: </span>
                        <span className={s.value}>{order.date}</span>
                    </div>

                    <div className={s.row}>
                        <span className={s.tag}>usuario: </span>
                        <span className={s.value}>{order.user}</span>
                    </div>

                    <div className={s.row}>
                        <span className={s.tag}>status: </span>

                        {mode === "view" ?
                            <span className={s.value}>{order.status} <FaEdit className={s.editButton} onClick={() => setMode("edit")}/></span> :
                            <div className={s.input}>
                                <select 
                                    className={s.select}
                                    value={newStatus}
                                    onChange={e => setNewStatus(e.target.value)}
                                >
                                    <option value="completa">completa</option>
                                    <option value="cancelada">cancelada</option>
                                    <option value="procesando">procesando</option>
                                    <option value="creada">creada</option>
                                </select>

                                <MdCheckCircle className={`${s.icon} ${s.confirm}`} onClick={() => {
                                    console.log("hago petición");
                                    setMode("view")
                                }}/>
                                <MdCancel className={`${s.icon} ${s.cancel}`} onClick={() => setMode("view")}/>
                            </div>
                        }
                    </div>
                </div>

                <div className={s.cart}>
                    <div className={s.products}>
                        {order.products?.map(product => (
                            <div key={product.productid} className={s.product}>
                                <div className={s.left}>
                                    <div className={s.imgContainer}>
                                        <img className={s.img} src={product.photo} alt=""/>
                                    </div>
                                    <span className={s.name}>{product.name}</span>
                                    <span className={s.cant}>...x {product.quantity}</span>
                                </div>

                                <span className={s.price}>$ {product.price}</span>
                            </div>
                        ))}
                    </div>

                    <div className={s.totalPrice}>
                        <span className={s.totalText}>Total <span className={s.totalNumber}>$ {order.price}</span></span>
                    </div>
                </div>
            </>) : (<h1>Cargando</h1>)}
        </div>
    )
}

export default OrderDetail;
