import { GET_CATEGORIES } from "../constanst/actionsTypes";
import axios from "axios";

const SERVER = process.env.REACT_APP_SERVER || "http://localhost:3001/";

export const getCategories = () => {
  try {
    return async (dispatch) => {
      await axios.get(`${SERVER}categories`).then((response) => {
        return dispatch({
          type: GET_CATEGORIES,
          payload: response.data,
        });
      });
    };
  } catch (error) {
    console.log(error);
  }
};