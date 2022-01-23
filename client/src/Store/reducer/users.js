import { SET_USER_DATA } from "../constanst/actionsTypes";

const initialState = {
  token: null,
  
};

export const brandsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_DATA:
      return (state.brands = payload);

    default:
      return state;
  }
};