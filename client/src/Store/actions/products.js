import axios from 'axios';
import {GET_PRODUCTS, GET_DETAILS} from '../constanst/actionsTypes.js';


export const getProducts = (page) => async (dispatch) => {
  try {
      const res = await axios.get(`/products/products?page=${page}`);
      return dispatch({
          type: GET_PRODUCTS,
          payload: res.data,
      });
  } catch (error) {
      console.log(error);
  }
};


export const getDetails = (id) => async(dispatch) => {
    try {
         const res = await axios.get(`/products/details/${id}`)   
         return dispatch({
             type: GET_DETAILS,
             payload: res.data
         })


    } catch (error) {
        console.log(error)
    }
}