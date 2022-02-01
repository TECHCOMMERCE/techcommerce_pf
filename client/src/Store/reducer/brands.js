import { GET_BRANDS, GET_BRANDS_FOR_ADMIN } from "../constanst/actionsTypes";

const initialState = {
  brands: [],
  brandsAdmin: [],
};

export const brandsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BRANDS_FOR_ADMIN:
      return { ...state, brandsAdmin: payload };

    case GET_BRANDS:
      return { ...state, brands: payload };

    default:
      return state;
  }
};
