import { createStore, applyMiddleware, combineReducers} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import {productsReducer} from "./reducer/products";

import thunk from "redux-thunk" ;



const store= createStore(
	combineReducers({
		products: productsReducer,
		
	}), composeWithDevTools(
		applyMiddleware(thunk) 
	));

export default store;