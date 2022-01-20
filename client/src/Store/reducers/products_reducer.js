import {GET_PRODUCTS, GET_DETAILS} from '../constanst/actionsTypes.js';

const initialState={
	products: [], 
    product: {}
}



export function productsReducer(state = initialState, action) {
    switch (action.type) {
    	case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }
         case GET_DETAILS:
             return  {
                 ...state,
                 product: action.payload
             }  
       
        default: 
		return state;    
    }

}