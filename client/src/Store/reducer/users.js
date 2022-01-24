import { 
  SET_USER_DATA,
  SET_USER_ERROR
} from "../constanst/actionsTypes";

const initialState = {
    token:null,
    data: null,
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

    default:
      return state;
  }
};