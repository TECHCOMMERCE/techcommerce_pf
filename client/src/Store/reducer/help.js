import {
  GET_POLICY,
  POST_POLICY,
  GET_ONE_POLICY,
  DELETE_POLICY,
  GET_TYPE,
  FILTER_BY_CATEGORY_POLICY
} from '../constanst/actionsTypes'

const initialState = {
  policies:[],
  policiesCopy: [],
  categoryPolicies: [],
  detail: []
}


export const helpReducer = (state = initialState, action) =>{
  switch (action.type) {
    case GET_POLICY:
      console.log(action.payload);
      return{
        ...state,
        policies: action.payload,
        policiesCopy: action.payload
      }
    case GET_TYPE:
      return{
        ...state,
        categoryPolicies: action.payload
      }
    case POST_POLICY:
      return{
        ...state
      }
    case FILTER_BY_CATEGORY_POLICY:
      return{}
    case GET_ONE_POLICY:
      return{
        ...state,
        detail: action.payload
      }
    default:
       return{state}
  }
}

