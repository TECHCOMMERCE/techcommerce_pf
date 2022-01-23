import axios from "axios";
import React, { useEffect, useState } from "react";

import s from "../../assets/styles/admin/Users.module.css";

const Users = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        (async() => {
            const res = await axios.get("http://localhost:3001/user");
            setUsers(res.data);
        })()
    }, []);

    return(
        <div className={s.container}>
            <div className={s.elements}>
                <h1>Usuarios</h1>

                <form className={s.form}>
                    <div className={s.inputs}>
                        <input className={s.input} type="text" placeholder="name"/>
                        <input className={s.input} type="text" placeholder="lastname"/>
                        <input className={s.input} type="text" placeholder="email"/>
                        <input className={s.input} type="text" placeholder="password"/>
                    </div>
                    
                    <div className={s.inputs}>
                        <input className={s.input} type="text" placeholder="phone"/>
                        <input className={s.input} type="text" placeholder="address"/>
                        <input className={s.input} type="text" placeholder="country"/>
                        <input className={s.input} type="text" placeholder="city"/>
                        <input className={s.input} type="text" placeholder="postalcode"/>
                    </div>
                    
                    <div>
                        <select className={s.down}>
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                        </select>     
                        
                    </div>
                    <input className={`${s.button} ${s.input}`} type="submit" value="crear usuario"/>           

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
                                            console.log(user.force)
                                            return(<tr key={user.userid} className={i%2!=0 ? s.row1 : null}>
                                                <td>{user.type}</td>
                                                <td>{user.name}</td>
                                                <td>{user.lastname}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.adress}</td>
                                                <td>{user.country}</td>
                                                <td>{user.City}</td>
                                                <td>{user.postalcode}</td>
                                                <td>{user.force}</td>
                                                <td>
                                                    <button>Force</button>
                                                    <button>Editar</button>
                                                    <button>Eliminar</button>
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