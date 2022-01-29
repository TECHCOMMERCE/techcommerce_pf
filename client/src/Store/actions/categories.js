import { GET_CATEGORIES } from "../constanst/actionsTypes";
import axios from "axios";

export const getCategories = () => {
  try {
    return async (dispatch) => {
      await axios.get(`${process.env.REACT_APP_SERVER}/categories`).then((response) => {
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

export const PutCategory = (category) => {
  try {
    return async (dispatch) => {
      await axios.put(`${process.env.REACT_APP_SERVER}/category`)
    }
  } catch (error) {
    
  }
}