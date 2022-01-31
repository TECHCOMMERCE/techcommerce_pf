import {
  GET_PRODUCTS,
  GET_PRODUCTS_PAGINADO,
  GET_DETAILS,
  GET_BRANDS_PRODUCTS,
  GET_CATEGORIES_PRODUCTS,
  GET_PRODUCTS_FOR_ADMIN,
} from "../constanst/actionsTypes";

const initialState = {
  products: undefined,
  product: {},
  brands: null,
  categories: null,
  productsAdmin: [],
};

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_FOR_ADMIN:
      return { ...state, productsAdmin: action.payload };

    case GET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };

    case GET_PRODUCTS_PAGINADO:
      return {
        ...state,
        products: action.products,
      };

    case GET_DETAILS:
      console.log(action.payload);
      return {
        ...state,
        product: action.payload,
      };

    case GET_BRANDS_PRODUCTS:
      return {
        ...state,
        brands: action.payload,
      };
    case GET_CATEGORIES_PRODUCTS:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
}
