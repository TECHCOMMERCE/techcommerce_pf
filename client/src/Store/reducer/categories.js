import {
  GET_CATEGORIES,
  GET_CATEGORIES_BY_NAME,
  GET_CATEGORIES_FOR_ADMIN,
} from "../constanst/actionsTypes";

const initialState = {
  categories: [],
  categoriesAdmin: [],
};

export const categoriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CATEGORIES_BY_NAME:
      return { ...state, categoriesAdmin: payload };

    case GET_CATEGORIES_FOR_ADMIN:
      return { ...state, categoriesAdmin: payload };

    case GET_CATEGORIES:
      return { ...state, categories: payload };

    default:
      return state;
  }
};
