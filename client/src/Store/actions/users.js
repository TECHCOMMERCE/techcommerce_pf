import {
    SET_USER_DATA,
    SET_USER_ERROR
} from '../constanst/actionsTypes.js'
import axios from 'axios'
//const {SERVER}= process.env
const SERVER = 'http://localhost:3001'

export function loginAccount(payload){
  return async function(dispatch){
    try{
        const {data} = await axios.post(`${SERVER}/user/login`, payload);        
        if(typeof data === 'object'){
            return dispatch({
                type: SET_USER_DATA,
                payload: {
                    ...data,
                    error:null
                }
            });
        }else{
            return dispatch({
                type: SET_USER_ERROR,
                payload: data
            });

        }
    }catch(e){
        console.log(e)
    }
  }
}

export function getuser(){
  return async function(dispatch){
    try{
        let data=JSON.parse(localStorage.getItem("user"));
        return dispatch({
            type: SET_USER_DATA,
            payload: data
        });
    }catch(e){
        console.log(e)
    }
  }
}