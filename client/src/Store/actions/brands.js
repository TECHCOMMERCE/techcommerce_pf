import {
  GET_BRANDS,
  GET_BRANDS_FOR_ADMIN,
  GET_BRANDS_BY_NAME,
} from "../constanst/actionsTypes";
import axios from "axios";

const SERVER = process.env.REACT_APP_SERVER || "http://localhost:3001/";

export const getBrandsByName = (name, page) => {
  try {
    return async (dispatch) => {
      await axios.get(`${SERVER}brands?name=${name}&page=${page}`).then((response) => {
        return dispatch({
          type: GET_BRANDS_BY_NAME,
          payload: response.data,
        });
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const getBrandsForAdmin = (page) => {
  try {
    // page debe ser mayor que 0 y menor que la cuenta de productos/ 10
    return async (dispatch) => {
      await axios.get(`${SERVER}brands?page=${page}`).then((response) => {
        return dispatch({
          type: GET_BRANDS_FOR_ADMIN,
          payload: response.data,
        });
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const getBrands = () => {
  try {
    return async (dispatch) => {
      await axios.get(`${SERVER}brands`).then((response) => {
        return dispatch({
          type: GET_BRANDS,
          payload: response.data,
        });
      });
    };
  } catch (error) {
    console.log(error);
  }
};
