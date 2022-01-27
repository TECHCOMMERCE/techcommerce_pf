import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import s from "../../assets/styles/Register.module.css";

import Swal from "sweetalert2";

const Register = () => {
    const [step, setStep] = useState(1);

    const [data, setData] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [type, setType] = useState("password");

    const [aditionalData, setAditionalData] = useState({
        phone: "",
        address: "",
        country: "",
        city: "",
        postalcode: ""
    });

    const [formStatus, setFormStatus] = useState(null);

    useEffect(async() => {
        if(formStatus && formStatus.code === 0){
            setStep(prev => prev+1);
        }else if(formStatus && formStatus.code === 1){
            Swal.fire({
                icon: "error",
                title: "ERROR!",
                text: formStatus.message
            })
        }else if(formStatus && formStatus.code === 2){
            Swal.fire({
                icon: "warning",
                title: "Cuidado!",
                text: formStatus.message
            })
        }
    }, [formStatus]);

    return(
        <div className={s.container}>
            {(() => {
                if(step === 1){
                    return(<>
                        <div className={s.left}>
                            <h1 className={s.step}>paso {step}</h1>
                            <span className={s.description}>Primero ingresa los campos de registro de usuario</span>
                        </div>

                        <div className={s.sep}></div>

                        <form className={s.form} onSubmit={async(e) => {
                            e.preventDefault();
                            
                            const {name, lastname, email, password, confirmPassword} = data;

                            if(name && lastname && email && password && (password === confirmPassword)){
                                const res = await axios.post("http://localhost:3001/user", data);
    
                                setFormStatus(res.data);
                            }else{
                                Swal.fire({
                                    icon: "warning",
                                    title: "Revise bien los campos",
                                    text: "Es posible que haya algun campo incorrecto"
                                })
                            }
                            
                        }}>
                            
                            <input 
                                type="text" 
                                value={data.name} 
                                placeholder="name"
                                className={s.input}
                                onChange={e => {
                                    setData(prev => {
                                        return {
                                            ...prev,
                                            name: e.target.value
                                        }
                                    })
                                }}
                            />
                                
                            <input 
                                type="text" 
                                value={data.lastname}
                                placeholder="lastname"
                                className={s.input}
                                onChange={e => {
                                    setData(prev => {
                                        return {
                                            ...prev,
                                            lastname: e.target.value
                                        }
                                    })
                                }}
                            />
                                
                            <input 
                                type="email" 
                                value={data.email} 
                                placeholder="email"
                                className={s.input}
                                onChange={e => {
                                    setData(prev => {
                                        return {
                                            ...prev,
                                            email: e.target.value
                                        }
                                    })
                                }}
                            />
                                
                            <input 
                                type={type}
                                value={data.password} 
                                placeholder="password"
                                className={s.input}
                                onChange={e => {
                                    setData(prev => {
                                        return {
                                            ...prev,
                                            password: e.target.value
                                        }
                                    })
                                }}
                            />

                            <div>
                                <input name="type" type="checkbox" onChange={e => {
                                    setType(e.target.checked ? "text" : "password");
                                }}/>
                                <label htmlFor="type">mostrar contraseña</label>
                            </div>

                            <input
                                type={type} 
                                value={data.confirmPassword} 
                                placeholder="confirmar password"
                                className={`${s.input}`}
                                onChange={e => {
                                    setData(prev => {
                                        return {
                                            ...prev,
                                            confirmPassword: e.target.value
                                        }
                                    })
                                }}
                            />

                            <input type="submit" className={`${s.input} ${s.button}`} value="enviar"/>
                        </form>
                    </>)
                }else if(step === 2){
                    return(<>
                        <div className={s.left}>
                            <h1 className={s.step}>paso {step}</h1>
                            <span className={s.description}>Ahora Ingrese los datos adicionales</span>
                        </div>

                        <div className={s.sep}></div>

                        <form className={s.form} onSubmit={async(e) => {
                            e.preventDefault();

                            const res = await axios.put("http://localhost:3001/user", {...aditionalData, userid: formStatus.userid});

                            setFormStatus(res.data);
                        }}>
                            <input
                                type="text" 
                                value={aditionalData.phone} 
                                placeholder="phone"
                                className={s.input}
                                onChange={e => {
                                    setAditionalData(prev => {
                                        return {
                                            ...prev,
                                            phone: e.target.value
                                        }
                                    })
                                }}
                            />

                            <input
                                type="text" 
                                value={aditionalData.address} 
                                placeholder="address"
                                className={s.input}
                                onChange={e => {
                                    setAditionalData(prev => {
                                        return {
                                            ...prev,
                                            address: e.target.value
                                        }
                                    })
                                }}
                            />
                            
                            <input
                                type="text" 
                                value={aditionalData.country} 
                                placeholder="country"
                                className={s.input}
                                onChange={e => {
                                    setAditionalData(prev => {
                                        return {
                                            ...prev,
                                            country: e.target.value
                                        }
                                    })
                                }}
                            />
                            
                            <input
                                type="text" 
                                value={aditionalData.city} 
                                placeholder="city"
                                className={s.input}
                                onChange={e => {
                                    setAditionalData(prev => {
                                        return {
                                            ...prev,
                                            city: e.target.value
                                        }
                                    })
                                }}
                            />

                            <input
                                type="text" 
                                value={aditionalData.postalcode} 
                                placeholder="postalcode"
                                className={s.input}
                                onChange={e => {
                                    setAditionalData(prev => {
                                        return {
                                            ...prev,
                                            postalcode: e.target.value
                                        }
                                    })
                                }}
                            />

                            <input type="submit" className={`${s.input} ${s.button}`} value="enviar"/>
                        </form>
                    </>)
                }else if(step === 3){
                    return(<>
                        <div className={s.left}>
                            <h1 className={s.step}>paso {step}</h1>
                            <span className={s.description}>Listo, solo falta iniciar sesión con tu nueva cuenta</span>
                        </div>

                        <div className={s.sep}></div>

                        <div className={s.form}>
                            <span className={s.link}><Link to="/login">Ir al login</Link></span>
                        </div>
                    </>)
                }
            })()}
        </div>
    )

}

export default Register