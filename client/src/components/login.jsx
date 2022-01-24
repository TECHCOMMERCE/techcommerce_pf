import React, { useState, useEffect } from 'react';
import s from '../assets/styles/login.module.css'
import iconGoogle from '../assets/Imgs/iconGoogle.png'
import {Google} from '@styled-icons/boxicons-logos/Google'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from 'react-redux'
import {getuser,loginAccount} from '../Store/actions/users'
import swal from 'sweetalert2'

function Login() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  let user=useSelector(state=>state.users)
  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
  );
  const initialState = {
     email: '',
     password: ''
  }
  const [data,setData] = useState(initialState)
  const [error,setError] = useState({
    email:'Enter an email',
    password: 'Enter a password'
  })
  useEffect(() => {
    dispatch(getuser())
  },[dispatch])

  useEffect(() => {
    if(user.token) navigate('/products')
    if(user.error) swal.fire({title:'Error', text:user.error, icon: 'error'})
    if(user.user?.force) swal.fire({title:'Informacion', text:'¡Advertencia! Se sugiere, realizar un cambio de contraseña', icon:"warning"})
  },[user])

  const handlerChange = (e) => {
    e.preventDefault();
    let name= e.target.name;
    let value= e.target.value;
    let errortext=''
    if(name==="email" && !validEmail.test(value)){
      errortext='Invalid email'
    }else if(name==="password" && !/[A-Za-z0-9]{3,}/.test(value)){
      errortext='Password must be at least 3 characters long and contain a number'
    }
    //console.log('errortext', errortext);
      setError({
        ...error,
        [name]:errortext
      })
      setData({
        ...data,
        [name]:value
      })  
  }

  const handlerSubmit = (e) => {
    console.log("data",data)
    e.preventDefault();
    if(!error.email && !error.password){
      dispatch(loginAccount({...data, type:'normal'}))
    }else{
      swal.fire({title:'Error', text:'Error al iniciar sesión debe rellenar nos campos', icon: 'error'})
    }
    
  }

  return (
  <div className={s.container}>
    {!user.token?<div className={s.body}>
      <form autoComplete='off' onSubmit={handlerSubmit}>
        <h2 className={s.title}>My Account</h2>
        <FontAwesomeIcon className={s.iconUser} icon={faUser}/>
        <div className={s.formGrup}>
          <span>Email</span>
          <input type="text" placeholder='Email' name="email" onChange={handlerChange}/>
        </div>
        {error.email?<span className={s.error}>{error.email}</span>:null}
        <div className={s.formGrup}>
          <span>Password</span>
          <input type="password" placeholder='Password' name="password" onChange={(e)=>handlerChange(e)}/>
        </div>
        {error.password?<span className={s.error}>{error.password}</span>:null}
        <div className={s.buttons}>
          <button type='submit' className={`${s.btn} ${s.btn_login}`}>Login</button>
          <button type='button' className={`${s.btn} ${s.btn_sign}`} onClick={()=>navigate('/register')}>Sign up</button>
          <button type='button' className={`${s.btn} ${s.btn_google}`}><img src={iconGoogle} width={50}/>Login with Google</button>
          <Link to="/reset" className={s.btn}>Forgot your password?</Link>
        </div>
      </form>
    </div>:null}

  </div>
  );
}

export default Login;
