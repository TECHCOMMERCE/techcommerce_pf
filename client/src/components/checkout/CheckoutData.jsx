import React, { useState } from 'react'

import s from "../../assets/styles/Checkout.module.css"

const CheckoutData = () => {
    const [data, setData] = useState({
        name: ""
    })

    const products = [
        {
            id: 1,
            photo: "https://http2.mlstatic.com/D_NQ_NP_2X_964280-MLA46869170141_072021-F.webp",
            name: "Sony PlayStation 4",
            price: 89999,
            cant: 1
        },
        {
            id: 2,
            photo: "https://http2.mlstatic.com/D_NQ_NP_2X_791396-MLA47058527002_082021-F.webp",
            name: "Sony PlayStation 5",
            price: 206000,
            cant: 3
        },
        {
            id: 3,
            photo: "https://http2.mlstatic.com/D_NQ_NP_2X_889525-MLA42779898439_072020-F.webp",
            name: "GTX 1660 super",
            price: 144544,
            cant: 2
        },
        {
            id: 4,
            photo: "https://http2.mlstatic.com/D_NQ_NP_2X_717692-MLA40182401049_122019-F.webp",
            name: "Ryzen 5 3600",
            price: 35899,
            cant: 1
        },
        {
            id: 5,
            photo: "https://http2.mlstatic.com/D_NQ_NP_2X_950495-MLA48475499057_122021-F.webp",
            name: "Qiyi Sail W",
            price: 1000,
            cant: 5
        },
        {
            id: 6,
            photo: "https://http2.mlstatic.com/D_NQ_NP_2X_811262-MLA48679794835_122021-F.webp",
            name: "Behringer umc22",
            price: 17753,
            cant: 1
        },
        {
            id: 6,
            photo: "https://http2.mlstatic.com/D_NQ_NP_2X_911551-MLA46389323606_062021-F.webp",
            name: "Razer Viper ultimate",
            price: 17499,
            cant: 7
        },
    ]

    return (
        <div className={s.container}>
            <form className={s.form}>
                <input 
                    className={s.input}
                    value={data.name}
                    placeholder="nombre"
                    onChange={e => {
                        setData(prev => {
                            return {
                                ...prev,
                                name: e.target.value
                            }
                        })
                    }}
                />
            </form>

            <div className={s.cart}>
                <div className={s.products}>
                    {products.map(product => (<>
                        <div key={product.id} className={s.product}>
                            <div className={s.left}>
                                <span className={s.cant}>x{product.cant}</span>
                                <div className={s.imgContainer}>
                                    <img className={s.img} src={product.photo} alt=""/>
                                </div>
                                <span className={s.name}>{product.name}</span>
                            </div>

                            <span className={s.price}>$ {product.price}</span>
                        </div>
                    </>))}
                </div>

                <div className={s.totalPrice}>
                    <span className={s.totalText}>Total <span className={s.totalNumber}>$ {products.map(p => p.price * p.cant).reduce((a,b) => a+b)}</span></span>
                </div>
            </div>
        </div>
    )
}

export default CheckoutData