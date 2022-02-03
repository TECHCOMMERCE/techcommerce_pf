import {
  GET_BRAND_BY_ID,
  RESET_BRAND_DETAIL,
  POST_BRAND,
} from "../constanst/actionsTypes";

const initialState = {
  brandDetail: [],
  brandResponse: "",
};

export const brandReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_BRAND:
      return { ...state, brandResponse: payload };

    case GET_BRAND_BY_ID:
      return { ...state, brandDetail: payload };

    case RESET_BRAND_DETAIL:
      return { ...state, brandDetail: [] };

    default:
      return state;
  }
};
