import { GET_CATEGORIES } from "../constanst/actionsTypes";

const initialState = {
  categories: [],
};

export const categoriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CATEGORIES:
      return (state.categories = payload);

    default:
      return state;
  }
};
