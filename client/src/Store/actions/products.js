import axios from 'axios';
import { GET_PRODUCTS,GET_PRODUCTS_PAGINADO, ERROR_MESSAGE, GET_DETAILS , GET_BRANDS_PRODUCTS, GET_CATEGORIES_PRODUCTS } from '../constanst/actionsTypes';

const url = 'localhost:3001';



//porque no me deja

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
		type: GET_BRANDS_PRODUCTS,
		payload: data.data
	})
} 

export function getProducts(page, name, category) {
	return (dispatch) => {
		// va armando la url donde hará la petición, agregando las query strings si es que existen
		let finalUrl = `http://${url}/products${category || name ? '?' : ''}${category ? 'categories=' + category : ''}${category && name ? '&' : ''}${name ? 'name=' + name : ''}`;

		console.log(finalUrl);

		let products = [];

		axios
		.get(finalUrl)
		.then((res) => {
			if(res.data[0].categoryid){
				// Si se le aplicó el filtrado por categorías se arma un array que contenga los arrays de productosd e cáda categoría
				products.push(...res.data.map(cat => cat.products));

				// Luego se aplana para que esten en un solo array (osea lo normalizo)
				products = products.flat();
			}else{
				products.push(...res.data);
			}

			if (res.status === 200) {
				dispatch({
					type: GET_PRODUCTS,
					products,
				});
			} else {
				dispatch({
					type: ERROR_MESSAGE,
					message: 'Error al mostrar productos',
				});
			}
		})
		.catch((err) => {
			dispatch({
				type: GET_PRODUCTS,
				products: [],
			});
		});
	};
}

export function getProductsFront(obj, page) {
	const {category, brand, sort} =obj;
	
	return (dispatch) => {
		axios
			.get(`http://${url}/products/all?page=${page}&category=${obj.category}&brand=${obj.brand}&sort=${sort}`,)
			.then((res) => {
				
				if (res.status === 200) {
					dispatch({
						type: GET_PRODUCTS_PAGINADO,
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
	

