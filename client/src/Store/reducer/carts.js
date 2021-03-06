import {
  GET_PRODUCTS_CART,
  CLEAR_CART
} from '../constanst/actionsTypes'

const initialState = {
  productscart: [],
}

export function cartsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_CART:
      return {
        ...state,
        productscart: action.payload,
      };
      case CLEAR_CART:
        return {
          ...state,
          productscart: [],
        };

    default:
      return state
    }
}
