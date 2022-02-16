import axios from "axios";
import React, { useEffect, useState } from "react";

import s from "../../assets/styles/admin/Users.module.css";

const Users = () => {
    const [users, setUsers] = useState(null);

    const [data, setData] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        country: "",
        city: "",
        postalcode: "",
        type: "user"
    })

    const [mode, setMode] = useState("add");

    const SERVER = process.env.REACT_APP_SERVER || "http://localhost:3001/";

    async function actualizarTabla(){
        console.log(SERVER)
        const res = await axios.get(`${SERVER}user`);
        console.log(res);
        setUsers(res.data);
    }

    useEffect(() => {
        actualizarTabla()
    }, [mode]);

    return(
        <div className={s.container}>
            <div className={s.elements}>
                <h1>Usuarios</h1>

                <form className={s.form} onSubmit={async(e) => {
                    e.preventDefault();

                    if(mode === "add"){
                        console.log("voy a agregar");
                        await axios.post(`${SERVER}user`, data);
                    }else{
                        console.log("voy a editar")
                        await axios.put(`${SERVER}user/` + data.userid, data);
                        
                        setMode("add")
                    }
                    
                    actualizarTabla();

                    setData({
                        name: "",
                        lastname: "",
                        email: "",
                        password: "",
                        phone: "",
                        address: "",
                        country: "",
                        city: "",
                        postalcode: "",
                        type: "user"
                    })
                }}>
                    <div className={s.inputs}>
                        <input 
                            id="name"
                            className={s.input} 
                            type="text" 
                            placeholder="name"
                            value={data.name}
                            onChange={e => {
                                setData(prev => {
                                    return {
                                        ...prev,
                                        [e.target.id]: e.target.value
                                    }
                                })
                            }}
                        />
                            
                        <input 
                            id="lastname"
                            className={s.input} 
                            type="text" 
                            placeholder="lastname"
                            value={data.lastname}
                            onChange={e => {
                                setData(prev => {
                                    return {
                                        ...prev,
                                        [e.target.id]: e.target.value
                                    }
                                })
                            }}
                        />

                        <input 
                            id="email"
                            className={s.input} 
                            type="text" 
                            placeholder="email"
                            value={data.email}
                            onChange={e => {
                                setData(prev => {
                                    return {
                                        ...prev,
                                        [e.target.id]: e.target.value
                                    }
                                })
                            }}
                        />

                        <input 
                            id="password"
                            className={s.input} 
                            type="password" 
                            placeholder="password"
                            value={data.password}
                            onChange={e => {
                                setData(prev => {
                                    return {
                                        ...prev,
                                        [e.target.id]: e.target.value
                                    }
                                })
                            }}
                        />
                    </div>
                    
                    <div className={s.inputs}>
                        <input 
                            id="phone"
                            className={s.input} 
                            type="text" 
                            placeholder="phone"
                            value={data.phone}
                            onChange={e => {
                                setData(prev => {
                                    return {
                                        ...prev,
                                        [e.target.id]: e.target.value
                                    }
                                })
                            }}
                        />

                        <input 
                            id="address"
                            className={s.input} 
                            type="text" 
                            placeholder="address"
                            value={data.address}
                            onChange={e => {
                                setData(prev => {
                                    return {
                                        ...prev,
                                        [e.target.id]: e.target.value
                                    }
                                })
                            }}
                        />

                        <input 
                            id="country"
                            className={s.input} 
                            type="text" 
                            placeholder="country"
                            value={data.country}
                            onChange={e => {
                                setData(prev => {
                                    return {
                                        ...prev,
                                        [e.target.id]: e.target.value
                                    }
                                })
                            }}
                        />

                        <input 
                            id="city"
                            className={s.input} 
                            type="text" 
                            placeholder="city"
                            value={data.city}
                            onChange={e => {
                                setData(prev => {
                                    return {
                                        ...prev,
                                        [e.target.id]: e.target.value
                                    }
                                })
                            }}
                        />

                        <input 
                            id="postalcode"
                            className={s.input} 
                            type="text" 
                            placeholder="postalcode"
                            value={data.postalcode}
                            onChange={e => {
                                setData(prev => {
                                    return {
                                        ...prev,
                                        [e.target.id]: e.target.value
                                    }
                                })
                            }}
                        />
                    </div>
                    
                    <div>
                        <select 
                            id="type" 
                            className={s.down}
                            onChange={e => {
                                setData(prev => {
                                    return {
                                        ...prev,
                                        [e.target.id]: e.target.value
                                    }
                                })
                            }}
                            value={data.type}
                        >
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                        </select>     
                        
                    </div>

                    {mode === "add" ? <>
                        <input className={`${s.button} ${s.input}`} type="submit" value="crear usuario"/>
                    </> : <>
                        <input className={`${s.button} ${s.input}`} type="submit" value="editar"/>
                    </>}
                               

                </form>
                
                <div className={s.tableZone}>
                    {(() => {
                        if(users){
                            return(<div>
                                <span>cantidad de usuarios: {users.length}</span>
                                
                                <table className={s.table}>
                                    <thead>
                                        <tr className={s.thead}>
                                            <th>type</th>
                                            <th>name</th>
                                            <th>lastname</th>
                                            <th>email</th>
                                            <th>phone</th>
                                            <th>address</th>
                                            <th>country</th>
                                            <th>city</th>
                                            <th>postalcode</th>
                                            <th>force password</th>
                                            <th>Controls</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {users.map((user, i) => {
                                            return(<tr key={user.userid} className={`${s.row} ${i%2 != 0 ? s.row1 : null}`}>
                                                <td className={s.col}>{user.type}</td>
                                                <td>{user.name}</td>
                                                <td>{user.lastname}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.address}</td>
                                                <td>{user.country}</td>
                                                <td>{user.city}</td>
                                                <td>{user.postalcode}</td>
                                                <td>{user.force ? "bad" : "good"}</td>      {/* Si está en true, significa que debe cambiarla, de lo contrario está en good*/}
                                                <td>
                                                    <button
                                                        onClick={async() => {
                                                            await axios.put(`${SERVER}user/` + user.userid, {force: true});

                                                            actualizarTabla();
                                                        }}
                                                    >Force</button>
                                                    <button
                                                        onClick={() => {
                                                            setData({
                                                                userid: user.userid,
                                                                name: user.name,
                                                                lastname: user.lastname,
                                                                email: user.email,
                                                                password: user.password,
                                                                phone: user.phone,
                                                                address: user.address,
                                                                country: user.country,
                                                                city: user.city,
                                                                postalcode: user.postalcode,
                                                                type: user.type
                                                            })

                                                            setMode("edit");
                                                        }
                                                    }>Editar</button>
                                                    <button
                                                        onClick={async() => {
                                                            await axios.delete(`${SERVER}user/` + user.userid);
                                                            
                                                            actualizarTabla();
                                                        }
                                                    }>Eliminar</button>
                                                </td>
                                            </tr>)
                                        })}
                                    </tbody>
                                </table>    
                            </div>)
                        }else{
                            return(<h1>Cargando...</h1>)
                        }
                    })()}
                </div>
            </div>
        </div>
    )
}

export default Users;