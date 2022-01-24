const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
}

export function cart(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case ADD_TO_CART_FROM_DB:
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return state
    }
}
