import {
        GET_REVIEWS,
        POST_REVIEWS,
        PUT_REVIEWS,
        DELETE_REVIEW
        } from '../constanst/actionsTypes';
import axios from 'axios';

export const getReviewsByProduct = (productId) => {
  return async(dispatch) =>{
    
    let json = await axios.get(`http://localhost:3001/product/${productId}/review`)

    return dispatch({
      type: GET_REVIEWS,
      payload: json.data
    })
  }
}

export const postReview = ( payload, productId ) =>{
  console.log(productId + ' holi id');
  
  const posted = async() => {
    try {
      
      const response = await axios.post(`http://localhost:3001/product/${productId}/review`, payload)

      // return response

    } catch (error) {
      console.log(error);
    }
  }
  return posted
}

export const putReview = (review) =>{
  return async (dispatch) =>{
    let json = await axios.put(`http://localhost:3001/product/:productId/review/:id
    `, review)

    return dispatch({
      type: PUT_REVIEWS,
      payload: json.data
    })
  }
}

export const deleteReview = (review) =>{
  return async (dispatch) =>{
    let json = await axios.delete(`http://localhost:3001/product/:productId/review/`)
  
  return dispatch({
    type: DELETE_REVIEW,
    payload: json.data
  })
}
}

// get: http://localhost:3001/product/productid/review