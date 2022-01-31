import {
  GET_BRAND_BY_ID,
  RESET_BRAND_DETAIL,
} from "../constanst/actionsTypes";

const initialState = {
  brandDetail: [],
};

export const brandReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BRAND_BY_ID:
      return { ...state, brandDetail: payload };

    case RESET_BRAND_DETAIL:
      return { ...state, brandDetail: [] };

    default:
      return state;
  }
};
