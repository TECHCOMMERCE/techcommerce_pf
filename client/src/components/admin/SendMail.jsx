import axios from 'axios';
import React, { useEffect, useState } from 'react'

import s from "../../assets/styles/admin/sendMail.module.css";

import {BiSend} from "react-icons/bi";
import { Box, Button, MenuItem, Select, TextField } from '@material-ui/core';

const SendMail = () => {
    const [data, setData] = useState({
        destinatario: "destinatario",
        asunto: "",
        mensaje: ""
    });

    const [users, setUsers] = useState([])

    const SERVER = process.env.REACT_APP_SERVER || "http://localhost:3001/";
    useEffect(async() => {
        const res = await axios.get(`${SERVER}user?attributes=userid-name-email`);

        setUsers(res.data);
    }, []);
    
    return (
        <div className={s.padding}>
            <div className={s.container}>
                <form className={s.form} onSubmit={async(e) => {
                    e.preventDefault();

                    try{
                        const res = await axios.post(`${SERVER}user/mail`, data);

                        console.log(res.data);
                    }catch(e){
                        console.log(e);
                    }
                }}>
                    <div className={s.top}>
                        <div className={s.left}>
                            <TextField 
                                className={s.input} 
                                id="standard-basic" 
                                label="Asunto" 
                                variant="standard" 
                                value={data.asunto}
                                onChange={e => setData(prev => {
                                    return {
                                        ...prev,
                                        asunto: e.target.value
                                    }
                                })}
                            />
                            
                            <div className={s.destinatario}>
                                <div className={s.text}>
                                    to  
                                </div>

                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={data.destinatario}
                                    onChange={e => {
                                        setData(prev => {
                                            return{
                                                ...prev,
                                                destinatario: e.target.value
                                            }
                                        })
                                    }}
                                    label="destinatario"
                                >
                                    <MenuItem value="destinatario">destinatario</MenuItem>

                                    {users?.map(user => <MenuItem key={user.userid} value={user.email}>{user.name}</MenuItem>)}
                                </Select>
                            </div>
                        </div>
                        
                        <div className={s.sep}></div>

                        <TextField
                            className={s.area}
                            id="outlined-multiline-static"
                            label="Mensaje"
                            multiline
                            rows={8}
                            value={data.mensaje}
                            onChange={e => setData(prev => {
                                return {
                                    ...prev,
                                    mensaje: e.target.value
                                }
                            })}
                        />
                    </div>
                     
                    <div className={s.buttonArea}>
                        <Button type='submit' className={s.button} variant="contained">
                            send mail
                            <BiSend/>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SendMail
