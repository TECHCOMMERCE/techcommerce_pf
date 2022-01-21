import axios from 'axios';
import { GET_PRODUCTS, ERROR_MESSAGE, GET_DETAILS} from '../constanst/actionsTypes';

const url = 'localhost:3001';

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
				products.push(...res.data.map(cat => cat.products));

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
			console.log(err);
		});
	};
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

