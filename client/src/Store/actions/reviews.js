import {
        GET_REVIEWS,
        POST_REVIEWS,
        PUT_REVIEWS,
        DELETE_REVIEW,
        ERROR_MESSAGE,
        // FILTER_BY_GOOD,
        // FILTER_BY_BAD,
        FILTER_BY_STATUS
        } from '../constanst/actionsTypes';

import axios from 'axios';

const SERVER = process.env.REACT_APP_SERVER || 'http://localhost:3001/'

export const postReview = (review,productid) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const idUser = !user?null:user.user.userid;
  return async() =>{
    const res= await axios.put(`${SERVER}review/${productid}/user/${idUser}`, review)
    return res
  }
}

export const getReviewsByProduct = (productid) => {
  return async(dispatch) =>{
    const user = JSON.parse(localStorage.getItem("user"));
    const idUser = !user?null:user.user.userid;
   axios.get(`${SERVER}review/${productid}/user/${idUser}`)
    .then((res) => {
      dispatch({
          type: GET_REVIEWS,
          payload: res.data
      })
  })
  .catch((error) => {
      console.log(error);
  })
  }
}

/* export const filterReviewByStatus = (payload) =>{
  return{
    type: FILTER_BY_STATUS,
    payload 
  }
} */

/* export const putReview = (review) =>{
  return async (dispatch) =>{
    let json = await axios.put(`${SERVER}review/:productId/review/:id
    `, review)

    return dispatch({
      type: PUT_REVIEWS,
      payload: json.data
    })
  }
} */

/* export const deleteReview = (review) =>{
  return async (dispatch) =>{
    let json = await axios.delete(`${SERVER}product/:productId/review/`)
  
  return dispatch({
    type: DELETE_REVIEW,
    payload: json.data
  })
}
} */

