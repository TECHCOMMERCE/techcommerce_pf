import { GET_CATEGORIES } from "../constanst/actionsTypes";
import axios from "axios";

export const getCategories = () => {
  return async (dispatch) => {
    await axios.get("http://localhost:3001/categories").then((response) => {
      return dispatch({
        type: GET_CATEGORIES,
        payload: response.data,
      });
    });
  };
};
