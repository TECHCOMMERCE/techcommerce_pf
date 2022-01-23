import axios from 'axios';
import { GET_PRODUCTS, ERROR_MESSAGE, GET_DETAILS , GET_BRANDS, GET_CATEGORIES_PRODUCTS } from '../constanst/actionsTypes';

const url = 'localhost:3001';

export function getProducts(obj, page) {
	const {category, brand, sort} =obj;
	
	return (dispatch) => {
		axios
			.get(`http://${url}/products/all?page=${page}&category=${obj.category}&brand=${obj.brand}&sort=${sort}`,)
			.then((res) => {
				
				if (res.status === 200) {
					dispatch({
						type: GET_PRODUCTS,
						products: res.data,
					});
				} else {
					dispatch({
						type: ERROR_MESSAGE,
						message: 'Error al mostrar productos',
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
}


export const getCategories = () => async(dispatch) => {
	const data= await axios.get(`http://${url}/categories`)
	return dispatch({
		type: GET_CATEGORIES_PRODUCTS,
		payload: data.data
	})
}



export const getDetails = (id) => async(dispatch) => {
	console.log('entre')
	const data = await axios.get(`http://${url}/product/${id}`)
	console.log('data',data.data)
	return dispatch({
		type: GET_DETAILS,
		payload: data.data
	})
}


export const getBrand = () => async(dispatch) => {
	const data= await axios.get(`http://${url}/brands`)
	
	return dispatch({
		type: GET_BRANDS,
		payload: data.data
	})
} 
