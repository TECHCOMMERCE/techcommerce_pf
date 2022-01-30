import {
    GET_REVIEWS,
    POST_REVIEWS,
    PUT_REVIEWS,
    DELETE_REVIEW
  } from '../constanst/actionsTypes';

const initialState = {
  review: []
}

export const reviewReducer = (state = initialState, action) =>{
  
  switch(action.type){
    case GET_REVIEWS:
      // console.log('aqui estoy');
      return{
        ...state,
        review: action.payload
      }
    case POST_REVIEWS:
      return{
        ...state,
        status: action.payload
      }
    // case PUT_REVIEWS:
    //   return{

    // }
    // case DELETE_REVIEW:
    //   return{

    //   }
    default:
      return state
  }

}