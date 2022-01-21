import React, { useState } from 'react';
import s from '../assets/styles/login.module.css'
import {Google} from '@styled-icons/boxicons-logos/Google'
import {Link} from 'react-router-dom'
function Login() {
  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
  );
  const initialState = {
     email: '',
     password: ''
  }
  const [data,setData] = useState(initialState)
  const [error,setError] = useState(initialState)

  const handlerChange = (e) => {
    e.preventDefault();
    let name= e.target.name;
    let value= e.target.value;
    let errortext=''
    console.log(name,validEmail.test(value))
    if(name==="email" && !validEmail.test(value)){
      errortext='Email no válido'
    }else if(name==="password" && !/[A-Za-z0-9]{3,}/.test(value)){
      errortext='La contraseña debe tener al menos 3 caracteres y contener un número'
    }
    console.log('errortext', errortext);
      setError({
        ...error,
        [name]:errortext
      })
      setData({
        ...data,
        [name]:value
      })  
  }

  return (
  <div className={s.container}>
    <div className={s.body}>
      <form autoComplete='off'>
        <h2 className={s.title}>Login</h2>
        <div className={s.formGrup}>
          <span>Email</span>
          <input type="text" placeholder='Email' name="email" onChange={handlerChange}/>
        </div>
        {error.email?<span>{error.email}</span>:null}
        <div className={s.formGrup}>
          <span>Password</span>
          <input type="password" placeholder='Password' name="password" onChange={(e)=>handlerChange(e)}/>
        </div>
        {error.password?<span>{error.password}</span>:null}
        <div className={s.buttons}>
          <button type='submit' className={s.btn}>Login</button>
          <button className={s.btn}>Sign up</button>
          <button className={s.btn}><Google size={25}/>Login with Google</button>
          <Link to="/reset" className={s.btn}>Forgot your password?</Link>
        </div>
      </form>
    </div>

  </div>
  );
}

export default Login;
