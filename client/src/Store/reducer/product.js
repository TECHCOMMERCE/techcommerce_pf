import {
  GET_PRODUCT_BY_ID,
  POST_PRODUCT,
  PUT_PRODUCT,
  RESET_PRODUCT_DETAIL,
} from "../constanst/actionsTypes";

const initialState = {
  status: "",
  productDetail: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_PRODUCT:
      return { ...state, status: payload };

    case PUT_PRODUCT:
      return { ...state, status: payload };

    case GET_PRODUCT_BY_ID:
      return { ...state, productDetail: payload };

    case RESET_PRODUCT_DETAIL:
      return { ...state, productDetail: [] };

    default:
      return state;
  }
};
