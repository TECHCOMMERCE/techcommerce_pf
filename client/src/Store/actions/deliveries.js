import { GET_DELIVERIES } from "../constanst/actionsTypes";
import axios from "axios";

const SERVER = process.env.REACT_APP_SERVER || "http://localhost:3001/";

export const getDeliveries = () => {
  return async (dispatch) => {
    await axios.get(`${SERVER}deliveries`).then((response) => {
      return dispatch({
        type: GET_DELIVERIES,
        payload: response.data,
      });
    });
  };
};
