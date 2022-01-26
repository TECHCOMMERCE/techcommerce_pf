import React, {useState} from 'react';
import style from '../../styles/Profile/info.module.css';
import Modal from 'react-bootstrap/Modal';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

 const Info = () => {
  const [show, setShow] = useState(false);
  const user= JSON.parse(localStorage.getItem('user'))
  console.log('user', user.user);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div className={style.container} >
      <div className={style.titleContainer}>
      <h1 className={style.title}>Mis Datos </h1>
      <button className={style.openbtn} onClick={handleShow}><EditIcon /></button>
      </div>
      <div className={style.data}>
        <div className={style.data1}>

        <p className={style.p}><b>Nombre: </b>  {user?.user.name ? user.user.name : ''}</p>
        <p className={style.p}><b>Apellido: </b> {user?.user.lastname ? user.user.lastname : ''}</p>
        <p className={style.p}><b>Email: </b></p>
        <p className={style.p}><b>Teléfono: </b></p>
        </div>
        <div className={style.data2}>

        <p className={style.p}><b>Dirección: </b> </p>
        <p className={style.p}><b>Pais: </b> </p>
        <p className={style.p}><b>Ciudad: </b></p>
        <p className={style.p}><b>Código Postal: </b></p>
        </div>
      </div>
      
      <Modal show={show} size="lg" centered className={style.modal} >
                <Modal.Body className={style.modalbody}>
                  
                    <button className={style.modalClose} onClick={handleClose}>X</button>
                    <div>
                    <form className={style.modalForm}>
                      <div className={style.input1}>
                        <input type='text' placeholder='Nombre' defaultValue={user?.user.name}/>
                        <input type='text' placeholder='Apellido' defaultValue={user?.user.lastname} />
                        <input type='text' placeholder='Email' defaultValue={user?.user.email} />
                        <input type='text' placeholder='Telefono' defaultValue={user?.user.phone} />
                        <input type='text' placeholder='Direccion' defaultValue={user?.user.address} />
                        <input type='text' placeholder='Pais' defaultValue={user?.user.country} />
                        <input type='text' placeholder='Ciudad' defaultValue={user?.user.city} />
                        <input type='text' placeholder='Código Postal' defaultValue={user?.user.postalcode} />
                
                      </div>
                      </form>
                      </div>
                      <div>
                      <Button style={{marginLeft: '36%', marginTop: '10%', backgroundColor: '#FFFFFF', color: '#000000'}} variant='contained'>Actualizar</Button>
                      </div>
                    
                 
                </Modal.Body>
                </Modal>
                
    </div>
  )
};



export default Info;