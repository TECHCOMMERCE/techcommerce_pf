import { GET_BRANDS } from "../constanst/actionsTypes";
import axios from "axios";

export const getBrands = () => {
  return async (dispatch) => {
    await axios.get("http://localhost:3001/brands").then((response) => {
      return dispatch({
        type: GET_BRANDS,
        payload: response.data,
      });
    });
  };
};
