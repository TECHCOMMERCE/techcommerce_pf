import {
  GET_PRODUCT_BY_ID,
  POST_PRODUCT,
  PUT_PRODUCT,
  RESET_PRODUCT_DETAIL,
} from "../constanst/actionsTypes";
import axios from "axios";

export const postProduct = (product) => {
  return async (dispatch) => {
    await axios
      .post("http://localhost:3001/product", product)
      .then((response) => {
        return dispatch({
          type: POST_PRODUCT,
          payload: response.data,
        });
      })
      .catch((error) => {
        return dispatch({
          type: POST_PRODUCT,
          payload: error.data,
        });
      });
  };
};

export const putProduct = (product) => {
  return async (dispatch) => {
    await axios
      .put("http://localhost:3001/product", product)
      .then((response) => {
        return dispatch({
          type: PUT_PRODUCT,
          payload: response.data,
        });
      })
      .catch((error) => {
        return dispatch({
          type: PUT_PRODUCT,
          payload: error.data,
        });
      });
  };
};

export const getProductById = (id) => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:3001/product/${id}`)
      .then((response) => {
        return dispatch({
          type: GET_PRODUCT_BY_ID,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const resetProductDetail = () => {
  return (dispatch) => {
    return dispatch({
      type: RESET_PRODUCT_DETAIL,
    });
  };
};
