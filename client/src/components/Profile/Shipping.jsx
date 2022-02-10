import React, {useState, useEffect} from 'react';
import style from '../../styles/Profile/Shipping.module.css';
import Img from './linea.png'; 
import Image from './linea-gris.png';
import { getDelivery } from '../../Store/actions/tickets';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
const Shipping = () => {
  const dispatch= useDispatch();
  const {delivery} =useSelector(state => state.tickets)
  const {deliveryid} =useParams();
  console.log('deliveryid', deliveryid);
  console.log('delivery' ,delivery)
/*   const [delivery, setDelivery] =useState({
    status: 'Requested'
  }); */



  useEffect(() => {
    dispatch(getDelivery(deliveryid))
  }, [dispatch]);
  

  return (
    
    <div className={style.container}>
      <div className={style.shipping}>
    <div className={style.title}>
    <h1>Order <b>{deliveryid.slice(0, 8)}</b></h1>
    <h3>Sigue tu envio</h3>
    <img src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-shipping-money-exchange-wanicon-lineal-color-wanicon.png"/>
    </div>
    {delivery['status'] ===  "Requested" || delivery['status'] === "In process" || delivery['status'] === "Dispatched" || delivery['status'] === "In transit" || delivery['status'] === "Delivered" ? 
         <div className={style.line}>
         <div className={style.imgcontainer}>
           <img className={style.img} src={Img} />
         </div>
         <div className={style.standar}>
           <p className={style.start}>Compra realizada!</p>
         <div style={{marginTop: '69px'}}className={style.card}>
           <div className={style.cardcontent}>
           <h3>Procesando</h3>
           <p>Estamos procesando el envio</p>
           </div>
           <img src="https://img.icons8.com/external-sbts2018-flat-sbts2018/58/000000/external-product-customer-support-sbts2018-flat-sbts2018.png"/>
         </div>
         </div>
         </div>
    :
   null
  }

{ delivery['status'] === "Dispatched" || delivery['status'] === "In transit" || delivery['status'] === "Delivered" ? 
           <div className={style.line}>
           <div className={style.imgcontainer}>
             <img className={style.img} src={Img} />
           </div>
           <div className={style.card}>
             <div className={style.cardcontent}>
             <h3>Despachado</h3>
             <p>El producto ha sido despachado</p>
             </div>
             <img src="https://img.icons8.com/cotton/64/000000/send-package.png"/> 
           </div>
           </div>
    :
    <div className={style.line}>
    <div className={style.imgcontainer}>
      <img className={style.img} src={Image} />
    </div>
    <div className={style.standar}>
     
    <div style={{marginTop: '69px'}}className={style.cardGrey}>
      <div className={style.cardcontent}>
      
      </div>
      
    </div>
    </div>
    </div>
  }


{ delivery['status'] === "In transit" || delivery['status'] === "Delivered" ? 
            <div className={style.line}>
            <div className={style.imgcontainer}>
              <img className={style.img} src={Img} />
            </div>
            <div className={style.card}>
              <div className={style.cardcontent}>
              <h3>En camino</h3>
              <p>El producto está en camino</p>
              </div>
              <img src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-truck-transport-xnimrodx-lineal-color-xnimrodx-2.png"/>
            </div>
            </div>
      
    :
    <div className={style.line}>
    <div className={style.imgcontainer}>
      <img className={style.img} src={Image} />
    </div>
    <div className={style.standar}>
     
    <div style={{marginTop: '69px'}}className={style.cardGrey}>
      <div className={style.cardcontent}>
      
      </div>
      
    </div>
    </div>
    </div>
  }

{  delivery['status'] === "Delivered" ? 
          <div className={style.line}>
          <div className={style.imgcontainer}>
            <img className={style.img} src={Img} />
          </div>
          <div className={style.card}>
            <div className={style.cardcontent}>
            <h3>Entregado</h3>
            <p>Felicitaciones!</p>
            </div>
            <img src="https://img.icons8.com/fluency/48/000000/shipped.png"/>
          </div>
          </div>
      
    :  <div className={style.line}>
    <div className={style.imgcontainer}>
      <img className={style.img} src={Image} />
    </div>
    <div className={style.standar}>
     
    <div style={{marginTop: '69px'}}className={style.cardGrey}>
      <div className={style.cardcontent}>
      
      </div>
      
    </div>
    </div>
    </div>
  }
    
     
     
    
      </div>
    </div>
    
    );
};


export default Shipping;