import axios from 'axios';
import {GET_PRODUCTS} from '../constanst/actionsTypes.js';


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