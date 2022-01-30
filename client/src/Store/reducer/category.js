import {
  GET_CATEGORY_BY_ID,
  RESET_CATEGORY_DETAIL,
} from "../constanst/actionsTypes";

const initialState = {
  categoryDetail: [],
};

export const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CATEGORY_BY_ID:
      return { ...state, categoryDetail: payload };

    case RESET_CATEGORY_DETAIL:
      return { ...state, categoryDetail: [] };

    default:
      return state;
  }
};
