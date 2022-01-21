import { GET_PRODUCTS, GET_DETAILS} from "../constanst/actionsTypes";


const initialState={
	products: [],
  product: {} 
    
}



export function productsReducer(state = initialState, action) {
    switch (action.type) {
    	case GET_PRODUCTS:
        return {
          ...state,
          products: action.products
        }
      case GET_DETAILS :
        console.log(action.payload)
        return {
          ...state,
          product: action.payload
        }
           
        default: 
		return state;    
    }

}

