import { PUT_DELIVERY } from "../constanst/actionsTypes";
import axios from "axios";

const SERVER = process.env.REACT_APP_SERVER || "http://localhost:3001/";

export const putDelivery = (delivery) => {
  return async (dispatch) => {
    await axios.put(`${SERVER}delivery`, delivery).then((response) => {
      return dispatch({
        type: PUT_DELIVERY,
        payload: response.data,
      });
    });
  };
};
