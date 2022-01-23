import { GET_BRANDS } from "../constanst/actionsTypes";

const initialState = {
  brands: [],
};

export const brandsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BRANDS:
      return (state.brands = payload);

    default:
      return state;
  }
};