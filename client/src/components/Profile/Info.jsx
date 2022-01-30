import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOneUser } from '../../Store/actions/users';
import style from '../../styles/Profile/info.module.css';
import Modal from 'react-bootstrap/Modal';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { editUserFront } from "../../Store/actions/users.js";
import axios from 'axios';


 const Info = () => {

  const [display, setDisplay] = useState('data')
  const local= JSON.parse(localStorage.getItem('user'))
  const dispatch= useDispatch();
  const [error, setError] = useState('')
  const {user} = useSelector(state => state.users);
  const [data, setData] =useState({})
  console.log(data)


  function validateString(e) {
    if(/^[a-z\s]{0,255}$/i.test(e.target.value)){
       setError('')
       
    }else{
      setError(e.target.name)
    }
    setData({ 
        ...data,
        [e.target.name]: e.target.value
    }) 
}

function validateNumber(e) {
  if(!/^\d+$/.test(e.target.value)){
     
     setError(e.target.name)
  }else{
    setError('')
  }
  setData({ 
      ...data,
      [e.target.name]: e.target.value
  }) 
}



  function cancel() {
    setData({
    name:user.name,
    lastname: user.lastname,
    email: user.email,
    address: user.address,
    force: false,
    type: user.type,
    phone: user.phone? user.phone : '',
    userid: user.userid,
    photo: user.photo? user.photo : '',
    country: user.country? user.country : '',
    city: user.city? user.city : '' ,
    postalcode: user.postalcode? user.postalcode : '',
    oldPassword: "",
    password: ""
    })
    setDisplay('data');
  }

  function onChange(e) {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }
  
  useEffect(() => {
    console.log(user)
  }, [user])

  async function onSubmit(e) {
   await dispatch(editUserFront({
     userid: user.userid,
     password: data.oldPassword,

     userData: data
   }));
   //window.location.href = '/login';
   dispatch(getOneUser(local.user.userid))
  }

  function uploadImage(files) {
    
    const formData = new FormData();
    formData.append('file', files);
    formData.append('upload_preset','xpk5dhcq')
    axios.post('https://api.cloudinary.com/v1_1/dntpjirzj/image/upload', formData)
    .then(response => {
      setData({
        ...data,
        photo: response.data.url
      })
    })
  }
  
useEffect(async() => {
  dispatch(getOneUser(local.user.userid)).then(res => {
    // console.log(res)
   return setData({
      name: res.payload.name,
      lastname: res.payload.lastname,
      email: res.payload.email,
      address: res.payload.address,
      force: false,
      type: res.payload.type,
      phone: res.payload.phone? res.payload.phone : '',
      userid: res.payload.userid,
      photo: res.payload.photo? res.payload.photo : '',
      country: res.payload.country? res.payload.country : '',
      city: res.payload.city? res.payload.city : '' ,
      postalcode: res.payload.postalcode? res.payload.postalcode : '',
      oldPassword: "",
      password: ""
    })
  })
  
}, [dispatch]);


  return(
    <>
    { display === 'data' ?
    <div className={style.container} >
      <div className={style.titleContainer}>
      <h1 className={style.title}>Mis Datos </h1> 
      <button className={style.openbtn} onClick={()=>setDisplay('form')} ><EditIcon /></button>
      </div>
      <div className={style.data}>
        <div className={style.data1}>

        <p className={style.p}><b>Nombre: </b>  {user?.name ? user.name : ''}</p>
        <p className={style.p}><b>Apellido: </b> {user?.lastname ? user.lastname : ''}</p>
        <p className={style.p}><b>Email: </b>{user?.email ? user.email : ''} </p>
        <p className={style.p}><b>Teléfono: </b>{user?.phone ? user.phone : ''}</p>
        </div>
        <div className={style.data2}>

        <p className={style.p}><b>Dirección: </b>{user?.address ? user.address : ''} </p>
        <p className={style.p}><b>Pais: </b>{user?.country ? user.country : ''} </p>
        <p className={style.p}><b>Ciudad: </b>{user?.city ? user.city : ''}</p>
        <p className={style.p}><b>Código Postal: {user?.postalcode ? user.postalcode : ''}</b></p>
        </div>
      </div>              
    </div>
    : 
    <div className={style.formContainer}>
    <form className={style.form} onSubmit={onSubmit}>
      <div className={style.inputContainer}>
        <label>Name</label>
        <input className={style.input} name='name' type='text' required onChange={validateString} defaultValue={user.name ? user.name : ''} />
        {error==='name' ? <span style={{color: 'red'}}>Escriba un dato válido</span> : null}
      </div>
      <div className={style.inputContainer}>
        <label>Apellido</label>
        <input className={style.input} name='lastname' type='text' required onChange={validateString} defaultValue={user.lastname? user.lastname: ''} />
        {error==='lastname' ? <span style={{color: 'red'}}>Escriba un dato válido</span> : null}
      </div>
      <div className={style.inputContainer}>
        <label>Dirección</label>
        <input className={style.input} name='address' type='text' required onChange={validateString} defaultValue={user.address? user.address: ''} />
        {error==='address' ? <span style={{color: 'red'}}>Escriba un dato válido</span> : null}
      </div>
      <div className={style.inputContainer}>
        <label>Telefono</label>
        <input className={style.input} name='phone' type='text' onChange={validateNumber} defaultValue={user.phone? user.phone: ''} />
        {error==='phone' ? <span style={{color: 'red'}}>Escriba un dato válido</span> : null}
      </div>
      <div className={style.inputContainer}>
        <label>Pais</label>
        <input className={style.input} name='country' type='text' onChange={validateString} defaultValue={user.country? user.country : ''} />
        {error==='country' ? <span style={{color: 'red'}}>Escriba un dato válido</span> : null}
      </div>
      <div className={style.inputContainer}>
        <label>Ciudad</label>
        <input className={style.input} name='city' type='text' onChange={validateString} defaultValue={user.city? user.city : ''}/>
        {error==='city' ? <span style={{color: 'red'}}>Escriba un dato válido</span> : null}
      </div>
      <div className={style.inputContainer}>
        <label>Codigo Postal</label>
        <input className={style.input} name='postalcode' type='text' onChange={validateNumber} defaultValue={user.postalcode? user.postalcode : ''}/>
        {error==='postalcode' ? <span style={{color: 'red'}}>Escriba un dato válido</span> : null}
      </div>

      <div className={style.inputContainer}>
        <label>Contraseña anterior</label>
        <input className={style.input} name='postalcode' type='text' defaultValue={data.oldPassword} onChange={e => {
          setData(prev => {
            return {
              ...prev,
              oldPassword: e.target.value
            }
          })
        }}/>
        {error==='postalcode' ? <span style={{color: 'red'}}>Escriba un dato válido</span> : null}
      </div>

      <div className={style.inputContainer}>
        <label>nueva contraseña</label>
        <input className={style.input} name='postalcode' type='text' defaultValue={data.password} onChange={e => {
          setData(prev => {
            return {
              ...prev,
              password: e.target.value
            }
          })
        }}/>
        {error==='postalcode' ? <span style={{color: 'red'}}>Escriba un dato válido</span> : null}
      </div>

      <div className={style.inputContainer}>
      <label style={{marginBottom: '20px'}}>Foto de perfil</label>
      <input className={style.inputPhoto} type='file'  onChange={(event)=>uploadImage(event.target.files[0])}/>
      
      </div>

      <div style={{width: '400px', marginLeft: '20%'}}>
        <Button variant='contained' onClick={onSubmit}  style={{backgroundColor: '#2EB8B0', marginRight: '10%'}} type='submit' disabled={error.length > 0}>Actualizar</Button>
        <Button variant='contained'  style={{backgroundColor: 'red'}} onClick={cancel}>cancelar</Button>
      </div>
    </form>
    <div className={style.formButtons}>
      </div>
  </div>
    }
    </>
  )
};



export default Info;