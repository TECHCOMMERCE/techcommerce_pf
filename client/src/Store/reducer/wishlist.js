import {
  GET_WISHLIST
} from '../constanst/actionsTypes'

const initialState = {
  wishList: [],
}

export function wishReducer(state = initialState, action) {
  switch (action.type) {
    case GET_WISHLIST:
      return {
        ...state,
        wishList: action.payload,
      };
      
    default:
      return state
    }
}
