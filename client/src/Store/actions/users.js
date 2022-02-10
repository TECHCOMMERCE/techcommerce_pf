import {
    SET_USER_DATA,
    SET_USER_ERROR,
    EDIT_USER_FRONT,   
    GET_ONE_USER 
} from '../constanst/actionsTypes.js'
import axios from 'axios'

let SERVER = process.env.REACT_APP_SERVER ||'http://localhost:3001/';

export function loginAccount(payload){
  return async function(dispatch){
    try{
        const {data} = await axios.post(`${SERVER}user/login`, payload);        

        console.log(data);

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

export const editUserFront = (data) => async(dispatch) =>{
    try {
        console.log(data);
        let response = await axios.put(`${SERVER}user/` , data)
        console.log('response', response)
    } catch (error) {
        console.log(error)
    }
} 

export const getOneUser = (userid) => async(dispatch)=> {
    try {
        let response = await axios.get(`${SERVER}user/${userid}`)
        return dispatch({
            type: GET_ONE_USER,
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}