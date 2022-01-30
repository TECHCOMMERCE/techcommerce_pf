import axios from "axios";
import {
  PUT_CATEGORY,
  POST_CATEGORY,
  GET_CATEGORY_BY_ID,
  RESET_CATEGORY_DETAIL,
} from "../constanst/actionsTypes";

const SERVER = process.env.REACT_APP_SERVER;

export const getCategoryById = (id) => {
  try {
    return async (dispatch) => {
      await axios.get(`${SERVER}/category/${id}`).then((response) => {
        return dispatch({
          type: GET_CATEGORY_BY_ID,
          payload: response.data,
        });
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const putCategory = (category) => {
  try {
    return async (dispatch) => {
      await axios.put(`${SERVER}/category`, category).then(() => {
        return dispatch({
          type: PUT_CATEGORY,
        });
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const postCategory = (category) => {
  try {
    return async (dispatch) => {
      await axios.post(`${SERVER}/category`, category).then(() => {
        return dispatch({
          type: POST_CATEGORY,
        });
      });
    };
  } catch (error) {}
};

export const resetCategoryDetail = () => {
  try {
    return (dispatch) => {
      return dispatch({ type: RESET_CATEGORY_DETAIL });
    };
  } catch (error) {
    console.log(error);
  }
};
