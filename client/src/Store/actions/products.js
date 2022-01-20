import axios from 'axios';

import { GET_PRODUCTS, ERROR_MESSAGE,} from '../constanst/actionsTypes';

const url = 'localhost:3001';

export function getProducts() {
	return (dispatch) => {
		axios
			.get(`http://${url}/products`)
			.then((res) => {
				if (res.status === 200) {
					dispatch({
						type: GET_PRODUCTS,
						products: res.data.data,
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

