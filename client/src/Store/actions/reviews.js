import {
        GET_REVIEWS,
        POST_REVIEWS,
        PUT_REVIEWS,
        DELETE_REVIEW,
        ERROR_MESSAGE
        } from '../constanst/actionsTypes';

import axios from 'axios';
const url = 'http://localhost:3001';

export const postReview = (review,productid) => {
	return async (dispatch) => {
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

export const getReviewsByProduct = (productid) => {
  return async(dispatch) =>{
    
    // let json = await axios.get(`http://localhost:3001/product/${productId}/review`)

    let json = await axios.get(`${url}/review/${productid}/review`)

    return dispatch({
      type: GET_REVIEWS,
      payload: json.data
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
    let json = await axios.put(`${url}/review/:productId/review/:id
    `, review)

    return dispatch({
      type: PUT_REVIEWS,
      payload: json.data
    })
  }
}

export const deleteReview = (review) =>{
  return async (dispatch) =>{
    let json = await axios.delete(`${url}/product/:productId/review/`)
  
  return dispatch({
    type: DELETE_REVIEW,
    payload: json.data
  })
}
}

// get: http://localhost:3001/product/productid/review