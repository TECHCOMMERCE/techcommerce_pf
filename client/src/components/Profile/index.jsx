import React, {useState} from 'react';
import style from '../../styles/Profile/Index.module.css';
import Img from '../../assets/Imgs/user.png';
import Tickets from './Tickets';
import Info from './Info';
import { useParams } from 'react-router-dom';




const Profile = () => {
const {getDisplay =null}= useParams();
//console.log('getDisplay', getDisplay);
const [display, setDisplay] =useState(getDisplay==='ShopHistory'?'Compras':'Perfil');
const user= JSON.parse(localStorage.getItem('user'))
console.log(display)

function onClick(e) {
  e.preventDefault();
  setDisplay(e.target.value)
} 

  return(
    <div className={style.container}>
      <div className={style.menu}>
        <img className={style.img} src={user.user.photo ? user.user.photo : Img} />
        <div className={style.Links}>
        <button className={style.buttons} onClick={()=>setDisplay('Perfil')}><p value='Perfil' className={display==='Perfil'? style.buttonS : style.buttonP}>Perfil</p></button>
        <button className={style.buttons} onClick={()=>setDisplay('Compras')}><p value='Compras' className={display==='Compras'? style.buttonS : style.buttonP}>Mis Compras</p></button>
       
      </div>
      </div>
      <div className={style.component}>
        {display==='Perfil'?
          <Info />
          : <Tickets/>
        }
      </div>
    </div>
  )
};



export default Profile;