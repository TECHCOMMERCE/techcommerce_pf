import {
        GET_REVIEWS,
        POST_REVIEWS,
        PUT_REVIEWS,
        DELETE_REVIEW,
        ERROR_MESSAGE
        } from '../constanst/actionsTypes';

import axios from 'axios';
// const url = 'http://localhost:3001';
const SERVER = process.env.REACT_APP_SERVER || 'http://localhost:3001/'

export const postReview = (review,productid) => {
  return async() =>{
    const res= await axios.post(`${SERVER}review/${productid}/review`, review)
    return res
  }
}

export const getReviewsByProduct = (productid) => {
  return async(dispatch) =>{
    // let json = await axios.get(`http://localhost:3001/product/${productId}/review`)
   axios.get(`${SERVER}review/${productid}/review`)
    .then((res) => {
      dispatch({
          type: GET_REVIEWS,
          payload: res.data.data
      })
      // console.log(res.data,'holi');
  })
  .catch((error) => {
      console.log(error);
  })
  }
}

// export const postReview = ( payload, productId ) =>{
//   // console.log(productId + ' holi id');
  
//   const posted = async() => {
//     try {
      
//       const response = await axios.post(`http://localhost:3001/product/${productId}/review`, payload)

//       return response

//     } catch (error) {
//       console.log(error);
//     }
//   }
//   return posted
// }

export const putReview = (review) =>{
  return async (dispatch) =>{
    let json = await axios.put(`${SERVER}review/:productId/review/:id
    `, review)

    return dispatch({
      type: PUT_REVIEWS,
      payload: json.data
    })
  }
}

export const deleteReview = (review) =>{
  return async (dispatch) =>{
    let json = await axios.delete(`${SERVER}product/:productId/review/`)
  
  return dispatch({
    type: DELETE_REVIEW,
    payload: json.data
  })
}
}

// get: http://localhost:3001/product/productid/review

/*
ort const postReview = (review,productid) => {
	return async () => {
		await axios
			.post(`${url}/review/${productid}/review`, review)
			.then((res) => {
				if (res.status === 200) {
					return dispatch({
						type: GET_REVIEWS,
						products: res.data.data,
					});
				} else {
					return dispatch({
						type: ERROR_MESSAGE,
						message: 'error al agregar review',
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
}
*/