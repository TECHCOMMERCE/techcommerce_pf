import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// estilos css 
import buy_date_party_ from '../../assets/Imgs/buy_date_party_time.svg'
import s from "../../assets/styles/Register.module.css";

import Swal from "sweetalert2";

const Register = () => {
    const SERVER = process.env.REACT_APP_SERVER ||'http://localhost:3001/';

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
                            <img src={buy_date_party_} alt="buy_date_party_" />
                            <div className={s.headerTitleContainer}>
                            <h1 className={s.step}> 
                                step {step} 
                            </h1>
                            <span className={s.description}>
                                Let's fill out your info!
                            </span>
                            </div>
                        </div>

                        {/* <div className={s.sep}></div> */}
                        <div className={s.body}>
                        <form className={s.form} onSubmit={async(e) => {
                            e.preventDefault();
                            
                            const {name, lastname, email, password, confirmPassword} = data;

                            if(name && lastname && email && password && (password === confirmPassword)){
                                const res = await axios.post(`${SERVER}user`, data);
    
                                setFormStatus(res.data);
                            }else{
                                Swal.fire({
                                    icon: "warning",
                                    title: "Revise bien los campos",
                                    text: "Es posible que haya algun campo incorrecto"
                                })
                            }
                            
                        }}>
                          <div className={s.formGrup}>
                           <label htmlFor="" className={s.omrs_input_underlined}> 
                            <input 
                                type="text" 
                                value={data.name} 
                                // placeholder="name"
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
                            <span className={s.omrs_input_helper}>Name</span>
                          </label>
                         </div>

                         <div className={s.formGrup}>
                           <label htmlFor="" className={s.omrs_input_underlined}> 
                            <input 
                                type="text" 
                                value={data.lastname}
                                // placeholder="lastname"
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
                            <span className={s.omrs_input_helper}>Last Name</span>
                           </label>
                         </div>

                         <div className={s.formGrup}>
                           <label htmlFor="" className={s.omrs_input_underlined}> 
                            <input 
                                type="email" 
                                value={data.email} 
                                // placeholder="email"
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
                            <span className={s.omrs_input_helper}>Email</span>
                          </label>
                         </div>

                         <div className={s.formGrup}>
                          <label htmlFor="" className={s.omrs_input_underlined}> 
                            <input 
                                type={type}
                                value={data.password} 
                                // placeholder="password"
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
                            <span className={s.omrs_input_helper}>Password</span>
                           </label>
                         </div>

                            <div>
                                <input name="type" type="checkbox" onChange={e => {
                                    setType(e.target.checked ? "text" : "password");
                                }}/>
                                <label htmlFor="type">Show Password</label>
                            </div>
                         
                         <div className={s.formGrup}>
                           <label htmlFor="" className={s.omrs_input_underlined}> 
                            <input
                                type={type} 
                                value={data.confirmPassword} 
                                // placeholder="confirmar password"
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
                            <span className={s.omrs_input_helper}>Password</span>
                           </label>
                         </div>

                            <input type="submit" className={`${s.input} ${s.button}`} value="enviar"/>
                        </form>
                        </div>
                    </>)
                }else if(step === 2){
                    return(<>
                        <div className={s.left}>
                            <h1 className={s.step}>paso {step}</h1>
                            <span className={s.description}>Ahora Ingrese los datos adicionales</span>
                        </div>

                        {/* <div className={s.sep}></div> */}

                        <form className={s.form} onSubmit={async(e) => {
                            e.preventDefault();

                            const res = await axios.put(`${SERVER}user/` + formStatus.userid, {...aditionalData, userid: formStatus.userid});

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

                        {/* <div className={s.sep}></div> */}

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