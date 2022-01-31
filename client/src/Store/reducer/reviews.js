import {
    GET_REVIEWS,
    POST_REVIEWS,
    PUT_REVIEWS,
    DELETE_REVIEW,
    FILTER_BY_GOOD,
    FILTER_BY_BAD,
    FILTER_BY_STATUS
  } from '../constanst/actionsTypes';

const initialState = {
  review: [],
  userreviews: null,
  AllReviewsCopy: [] 
}

export const reviewReducer = (state = initialState, action) =>{
  
  switch(action.type){
    case GET_REVIEWS:
      // console.log('aqui estoy');
      return{
        ...state,
        ...action.payload
      }
    case POST_REVIEWS:
      return{
        ...state,
        status: action.payload
      }
    case FILTER_BY_STATUS:

      let filterStatus;

      switch(action.payload){
        case 'All':
          filterStatus = state.AllReviewsCopy
        break;
        case 'Good':
          filterStatus = state.AllReviewsCopy.filter( (e) => e.stars >= 4)
        break;
        case 'Bad':
          filterStatus = state.AllReviewsCopy.filter( (e) => e.stars <= 3)
        break;
        default:
          return {...state}
      }

      return{
        ...state,
        review: filterStatus
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