import { 
  SET_USER_DATA,
  SET_USER_ERROR,
  EDIT_USER_FRONT,
  GET_ONE_USER
} from "../constanst/actionsTypes";

const initialState = {
    token:null,
    error: null,
    user:null
};

export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_DATA:    
      localStorage.setItem("user", JSON.stringify(payload));
      return {
        ...state,
        ...payload
      };

    case SET_USER_ERROR:
      return {
        ...state,
        error: payload
      };

    case GET_ONE_USER: 
    return{
      ...state, 
      user: payload
    }
    default:
      return state;
  }
};