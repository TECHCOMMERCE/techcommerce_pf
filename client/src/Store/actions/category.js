import axios from "axios";
import { PUT_CATEGORY, POST_CATEGORY } from "../constanst/actionsTypes";

const SERVER = process.env.REACT_APP_SERVER;

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
    return async(dispatch) => {
      await axios.post(`${SERVER}/category`, category)
      .then(() => {
        return dispatch({
          type: POST_CATEGORY,
        })
      });
    };
  } catch (error) {}
};
