import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import s from "../../assets/styles/Checkout.module.css"
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import {getProductsCartUser} from '../../Store/actions/carts.js'
import {Elements, CardElement,  useStripe, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe("pk_test_51KMeHhKJR7bBy8jQbUstrWjq99YaMAygvAchq1sPfEMY75UNyPgORttzzD0SknDrteh0W1vnrlxpP8bLr80SHyRV00tHQOXnqI")
const CheckoutData = () => {  
    return (
        <Elements stripe={stripePromise}>
             <CheckoutForm />
        </Elements>
    )
}

export default CheckoutData

const CheckoutForm = () => {
    const SERVER = process.env.REACT_APP_SERVER || "http://localhost:3001/"
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const products = useSelector(state => state.cart.productscart) || [];
    const [total,setTotal] = useState(0)
    const user = JSON.parse(localStorage.getItem("user"));
    const idUser = !user?null:user.user.userid;
    const [dataCheck, setData] = useState({
        name: "",//user.user.name,
        lastName: "",//user.user.lastname,
        email: "",//user.user.email,
        street: "",
        city: "",
        postalCode: "",
    })
    const inputStyle = {
        iconColor: '#c4f0ff',
        /* color: '#87BBFD', */
        color: '#000',
        borderColor: "#D2C5C5",
        borderSize: "2px",
        borderStyle: "solid",
        fontWeight: '500',
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',
        /* ':-webkit-autofill': {
          color: '#87BBFD',
        }, */
        '::placeholder': {
          color: '#001FCA',
        },
  }
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            let res = await Swal.fire({
                title: 'Realizar compra',
                text: 'Al presionar comprar, se hará la compra',
                icon: 'info',
                confirmButtonText: "Comprar",
                showDenyButton: true
            });

            if(res.isConfirmed){
                
                const { error, paymentMethod } = await stripe.createPaymentMethod({
                    type: "card",
                    card: elements.getElement(CardElement),
                });
                setLoading(true);

                // console.log(paymentMethod)
                console.log('error', error);
                
                
                if(paymentMethod.id){
                    const { id } = paymentMethod;
                    console.log('id', id);
                    const { data } = await axios.post(
                        `${SERVER}checkout/order`,
                        {
                            id,
                            amount: total,
                            productsInfo: products,
                            datapaymant: {...dataCheck},
                            user
                        }
                    );
                    if(data.redirect==='Completed'){
                        dispatch(getProductsCartUser(idUser))
                        Swal.fire({title: 'Compra realizada', text: 'Felicidades, su compra ha sido confirmada',icon:'success'})
                        navigate('/profile/ShopHistory')
                    }else{
                        navigate('/checkoutError')
                    }
                }else{
                    Swal.fire({title: 'Error',text: 'Tarjeta declinada, intentelo nuevamente',icon: 'error'})
                }
                //onsole.log(data);
                elements.getElement(CardElement).clear();
                
            }
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
       
    };

    function gettotal (array) {
        let totalprice=0;
        array.map(x => {
          totalprice= totalprice + (x.price*x.quantity)
        } )
        setTotal(totalprice)
    }

    let handlerChange = e => {
        setData(prev => {
            return {
                ...prev,
                [e.target.id]: e.target.value
            }
        })
    }


    useEffect(() => {
        if(!idUser){
            navigate("/products")
        }
    }, []); 
    useEffect(() => {
        
        dispatch(getProductsCartUser(idUser)); 
    }, [ dispatch,idUser]); 
    
    
    useEffect(() => {
        gettotal(products)
        
        //setTimeout(()=>{
            /* if(!user.token){
                navigate("/products")
            } */
        //},2000)
    }, [products]); 
  

    return (
    <div className={s.container}>
        <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.inputs}>
                <div className={s.inputContainer}>
                    <h2>Datos de envio</h2>
                    <label htmlFor='name'>Nombre</label>
                    <input 
                        className={`${s.input}`}
                        id="name"
                        value={dataCheck.name}
                        placeholder="Nombre"
                        onChange={handlerChange}
                    />
                    <label htmlFor='lastName'>Apellidos</label>
                    <input 
                        className={`${s.input}`}
                        id="lastName"
                        value={dataCheck.lastName}
                        placeholder="Apellidos"
                        onChange={handlerChange}
                    />

                    <label htmlFor='email'>Email</label>
                    <input 
                        className={`${s.input}`}
                        id="email"
                        value={dataCheck.email}
                        placeholder="Email"
                        onChange={handlerChange}
                    />
                    {/* <h3>Datos de envio</h3> */}
                    <label htmlFor='street'>Calle</label>
                    <input 
                        className={`${s.input}`}
                        id="street"
                        value={dataCheck.street}
                        placeholder="Calle"
                        onChange={handlerChange}
                    />
                    <label htmlFor='city'>Ciudad</label>
                    <input 
                        className={`${s.input}`}
                        id="city"
                        value={dataCheck.city}
                        placeholder="Ciudad"
                        onChange={handlerChange}
                    />  
                    <label htmlFor='postalcode'>Código Postal</label>
                    <input 
                        className={`${s.input}`}
                        id="postalCode"
                        value={dataCheck.postalCode}
                        placeholder="Código postal"
                        onChange={handlerChange}
                    />  
                </div>
                {/* User Card Input */}
            <div className={s.pay}>
            <CardElement options={{
   style: {
     base: inputStyle,
   },
 }}/>
            </div>
            <div className={s.inputContainer}>
                {products?.length && dataCheck.name && dataCheck.lastName && dataCheck.email && dataCheck.street && dataCheck.city && dataCheck.postalCode &&user.token?<button type="submit" disabled={!stripe} className={s.button}>
                {loading ? (
                   /*  <div className="spinner-border text-light" role="status"> */
                    <span className="sr-only">Cargando...</span>
                    /* </div> */
                ) : (
                    "Comprar ahora"
                )}
                </button>:<span style={
                    {
                        color: 'red',
                        fontSize: '22px',
                        fontWeight: '800'
                    }
            }>Rellene los datos para continuar</span>}
            </div>
            </div>
            
        </form>
        <div className={s.cart}>
            <div className={s.products}>
                {products?.map(product => (
                    <div key={product.productid} className={s.product}>
                        <div className={s.left}>
                            <div className={s.imgContainer}>
                                <img className={s.img} src={product.image} alt=""/>
                            </div>
                            <span className={s.name}>{product.name}</span>
                            <span className={s.cant}>...x {product.quantity}</span>
                        </div>

                        <span className={s.price}>$ {product.price}</span>
                    </div>
                ))}
            </div>

            <div className={s.totalPrice}>
                <span className={s.totalText}>Total : <span className={s.totalNumber}>$ {total}</span></span>
            </div>
        </div>

    </div>
    );
  };