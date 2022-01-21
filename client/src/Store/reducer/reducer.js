import {GET_PRODUCTS} from '../constanst/actionsTypes';



const inicialState = {
	
	products: [],
	
	
};

const ReducerCategory = (state = inicialState, action) => {
	// console.log(action);
	switch (action.type) {
		/****************************** CATEGORIES ********************************/

		/****************************** PRODUCTS **********************************/
		case GET_PRODUCTS:
			return { ...state, products: action.products };

		
		/****************************** USERS *********************************** */
		
		/****************************** CATALOGO **********************************/
	
		/****************************** CART **************************************/
		

		/****************************** ORDERS ************************************/
	
		/********************************* LOGIN ********************************* */
	
		/****************************** REVIEW ********************************/
	}
}
export default ReducerCategory;
