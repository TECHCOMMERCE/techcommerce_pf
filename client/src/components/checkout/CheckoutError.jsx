import React from 'react'
import { useNavigate } from 'react-router-dom'

import s from "../../assets/styles/CheckoutError.module.css";

const CheckoutError = () => {
    const navigate = useNavigate();

    return (
        <div className={s.container}>
            <h1 className={s.message}>Hubo un error con la compra. Se recomienda volver a hacerla más tarde</h1>
            <input className={s.button} type="button" value="Ir a Home" onClick={() => navigate("/")}/>
        </div>
    )
}

export default CheckoutError
