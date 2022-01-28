import {
    GET_REVIEWS,
    POST_REVIEWS,
    PUT_REVIEWS,
    DELETE_REVIEW
  } from '../constanst/actionsTypes';

const initialState = {
  review: []
}

const reviewReducer = (state = initialState, action) =>{
  
  switch(action.type){
    case GET_REVIEWS:
      return{
        ...state,
        review: action.paydload
      }
    case POST_REVIEWS:
      return{
        ...state,
        status: action.paydload
      }
    case PUT_REVIEWS:
      return{

    }
    case DELETE_REVIEW:
      return{

      }
    default:
      return state
  }

}

export default reviewReducer;