import { GET_BRANDS } from "../constanst/actionsTypes";
import axios from "axios";

export const getBrands = () => {
  try {
    return async (dispatch) => {
      await axios
        .get(
          `${process.env.REACT_APP_SERVER}/brands`
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
