import axios from 'axios';
import React, { useEffect } from 'react'

import s from "../../assets/styles/admin/sendMail.module.css";

import {BiSend} from "react-icons/bi";
import { Box, Button, MenuItem, Select, TextField } from '@material-ui/core';
import { useState } from 'react';



const SendMail = () => {
    const [data, setData] = useState({
        destinatario: "destinatario",
        asunto: "",
        mensaje: ""
    });

    const SERVER = process.env.REACT_APP_SERVER || "http://localhost:3001/";
    // useEffect(async() => {
    //     const res = axios.get(`${SERVER}`)
    // }, []);
    
    return (
        <div className={s.padding}>
            <div className={s.container}>
                <form className={s.form}>
                    <div className={s.top}>
                        <div className={s.left}>
                            <TextField className={s.input} id="standard-basic" label="Asunto" variant="standard" />
                            
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
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
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
                            defaultValue={data.mensaje}
                        />
                    </div>
                     

                    <Button className={s.button} variant="contained">
                        send mail
                        <BiSend/>
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default SendMail
