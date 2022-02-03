import {
  GET_CATEGORY_BY_ID,
  RESET_CATEGORY_DETAIL,
  POST_CATEGORY,
} from "../constanst/actionsTypes";

const initialState = {
  categoryDetail: [],
  categoryResponse: "",
};

export const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_CATEGORY:
      return {...state, categoryResponse: payload};

    case GET_CATEGORY_BY_ID:
      return { ...state, categoryDetail: payload };

    case RESET_CATEGORY_DETAIL:
      return { ...state, categoryDetail: [] };

    default:
      return state;
  }
};
