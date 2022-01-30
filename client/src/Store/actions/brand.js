import axios from "axios";
import { POST_BRAND, PUT_BRAND } from "../constanst/actionsTypes";

const SERVER = process.env.REACT_APP_SERVER;

export const putBrand = (brand) => {
  try {
    return async (dispatch) => {
      await axios.put(`${SERVER}/brand`, brand).then(() => {
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
      await axios.post(`${SERVER}/brand`, brand).then(() => {
        return dispatch({
          type: POST_BRAND,
        });
      });
    };
  } catch (error) {}
};
