import { GET_BRANDS } from "../constanst/actionsTypes";
import axios from "axios";

const SERVER = process.env.REACT_APP_SERVER || "http://localhost:3001/";

export const getBrands = () => {
  try {
    return async (dispatch) => {
      await axios
        .get(
          `${SERVER}brands`
        )
        .then((response) => {
          return dispatch({
            type: GET_BRANDS,
            payload: response.data,
          });
        });
    };
  } catch (error) {
    console.log(error);
  }
};
