import axios from "axios";
import {
  GET_PRODUCT_BY_ID,
  POST_PRODUCT,
  PUT_PRODUCT,
  RESET_PRODUCT_DETAIL,
} from "../constanst/actionsTypes";

const SERVER = process.env.REACT_APP_SERVER;

export const postProduct = (product) => {
  console.log(product);
  try {
    return async (dispatch) => {
      await axios
        .post(
          `${SERVER}/product`,
          product
        )
        .then((response) => {
          return dispatch({
            type: POST_PRODUCT,
            payload: response.data,
          });
        });
    };
  } catch (error) {
    console.log(error);
  }
};

export const putProduct = (product) => {
  try {
    return async (dispatch) => {
      await axios
        .put(
          `${SERVER}/product`,
          product
        )
        .then((response) => {
          return dispatch({
            type: PUT_PRODUCT,
            payload: response.data,
          });
        });
    };
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = (id) => {
  try {
    return async (dispatch) => {
      await axios
        .get(
          `${SERVER}/product/${id}`
        )
        .then((response) => {
          return dispatch({
            type: GET_PRODUCT_BY_ID,
            payload: response.data,
          });
        });
    };
  } catch (error) {
    console.log(error);
  }
};

export const resetProductDetail = () => {
  try {
    return (dispatch) => {
      return dispatch({
        type: RESET_PRODUCT_DETAIL,
      });
    };
  } catch (error) {
    console.log(error);
  }
};
