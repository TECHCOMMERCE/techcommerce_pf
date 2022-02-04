import axios from "axios";
import {
  POST_BRAND,
  PUT_BRAND,
  RESET_BRAND_DETAIL,
  GET_BRAND_BY_ID,
} from "../constanst/actionsTypes";

//const SERVER = process.env.REACT_APP_SERVER || "http://localhost:3001/";
const SERVER = process.env.REACT_APP_SERVER || "http://localhost:3001/";

export const getBrandById = (id) => {
  try {
    return async (dispatch) => {
      await axios.get(`${SERVER}brand/${id}`).then((response) => {
        return dispatch({
          type: GET_BRAND_BY_ID,
          payload: response.data,
        });
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const putBrand = (brand) => {
  try {
    return async (dispatch) => {
      await axios.put(`${SERVER}brand`, brand).then(() => {
        return dispatch({
          type: PUT_BRAND,
        });
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const postBrand = (brand) => {
  try {
    return async (dispatch) => {
      await axios.post(`${SERVER}brand`, brand).then((response) => {
        return dispatch({
          type: POST_BRAND,
          payload: response.data
        });
      });
    };
  } catch (error) {}
};

export const resetBrandDetail = () => {
  return (dispatch) => {
    return dispatch({
      type: RESET_BRAND_DETAIL,
    });
  };
};
