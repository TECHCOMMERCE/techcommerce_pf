import { async } from "@firebase/util";
import axios from "axios";

import {
  GET_POLICY,
  GET_ONE_POLICY,
  GET_TYPE,
  POST_POLICY,
  DELETE_POLICY,
  FILTER_BY_CATEGORY_POLICY
} from '../constanst/actionsTypes'

const SERVER = process.env.REACT_APP_SERVER || "http://localhost:3001/";
// const SERVER = "http://localhost:3001/";

export const getPolicies = () => {
  return async(dispatch) =>{
    let response = await axios.get(`${SERVER}help/`);
    // console.log(response.data);
    dispatch({
      type: GET_POLICY,
      payload: response.data
    })
  } 
}

// export const getPolicies =()=> {
    // return async(dispatch) => {
      // return await fetch(`$(SERVER)help/`)
//         .then((response) => JSON.parse(response))
//         .then((json) => {
//           // console.log(json);
//           dispatch({ type: GET_POLICY, payload: json });
//         })
//         .catch((e) => console.error(e));
//     };
// }
// getPoliciesCategory()
 
export const getPoliciesId = (helpid) =>{
  return async(dispatch) => {
  try {
    
    let response = await axios.get(`${SERVER}help/${helpid}`)
    
    dispatch({
      type: GET_ONE_POLICY,
      payload: response.data
    })

  }
  catch (error){
    console.log(error);
  }
}
}

export const getCategory_policy = () => {
  return async function( dispatch ){
    try {
      const json = await axios.get(`${SERVER}help_category/`)
      return dispatch({
        type: GET_TYPE,
        payload: json.data
      })
    } catch (error) {
      console.log(error);
    }
  }
}


export const postPolicy = payload => {
  const posted = async() =>{
    try {
      
      const response = await axios.get(`${SERVER}help/`, payload)
      return response;

    } catch (error) {
      console.log(error);
    }
  }
  return posted
}

export const filterByHelpCategory = ( payload ) =>{
  return{
    type:FILTER_BY_CATEGORY_POLICY,
    payload
  }
}

