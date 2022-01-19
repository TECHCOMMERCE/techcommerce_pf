import {GET_PRODUCTS} from '../constanst/actionsTypes.js';

const initialState={
	products: [], 
}



export function productsReducer(state = initialState, action) {
    switch (action.type) {
    	case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }
       
        default: 
		return state;    
    }

}