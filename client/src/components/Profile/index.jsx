import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOneUser } from '../../Store/actions/users';
import style from '../../styles/Profile/Index.module.css';
import Img from '../../assets/Imgs/user.png';
import Tickets from './Tickets';
import Info from './Info';
import WishList from './WishList';
import {getWishList} from '../../Store/actions/wishlist'


import { useParams } from 'react-router-dom';




const Profile = () => {
const {getDisplay =null}= useParams();
//console.log('getDisplay', getDisplay);
const [display, setDisplay] =useState(getDisplay==='ShopHistory'?'Compras':getDisplay==='WishList'?'Favoritos':'Perfil');
const local= JSON.parse(localStorage.getItem('user'));
const {user} = useSelector(state => state.users);
const dispatch= useDispatch();
console.log(display)

function onClick(e) {
  e.preventDefault();
  setDisplay(e.target.value)
} 

useEffect(() => {
  dispatch(getOneUser(local.user.userid))
  dispatch(getWishList(local.user.userid))
}, [dispatch]);


  return(
    <div className={style.container}>
      <div className={style.menu}>
        <img className={style.img} src={user?.photo ? user?.photo : Img} />
        <div className={style.Links}>
          <button className={style.buttons} onClick={()=>setDisplay('Perfil')}><p value='Perfil' className={display==='Perfil'? style.buttonS : style.buttonP}>Perfil</p></button>
          <button className={style.buttons} onClick={()=>setDisplay('Compras')}><p value='Compras' className={display==='Compras'? style.buttonS : style.buttonP}>Mis Compras</p></button>
          <button className={style.buttons} onClick={()=>setDisplay('Favoritos')}><p value='Favoritos' className={display==='Favoritos'? style.buttonS : style.buttonP}>Mis Favoritos</p></button>
        </div>
      </div>
      <div className={style.component}>
        {display==='Perfil'?
          <Info />
          : display==='Compras'?<Tickets/>:<WishList/>
        }
      </div>
    </div>
  )
};



export default Profile;