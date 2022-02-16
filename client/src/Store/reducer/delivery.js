import { PUT_DELIVERY } from "../constanst/actionsTypes";

const initialState = {
  serverResponse: "",
}

const deliveryReducer = (state= initialState, {type, payload}) => {
  switch (type) {
    case PUT_DELIVERY:
      return {...state, serverResponse: payload};
  
    default:
      return state;
  }
}

export default deliveryReducer;