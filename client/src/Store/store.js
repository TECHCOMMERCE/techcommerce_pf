import { createStore, applyMiddleware, combineReducers} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import {productsReducer} from "./reducer/products";

import {brandsReducer} from "./reducer/brands";
import {categoriesReducer} from "./reducer/categories";


import thunk from "redux-thunk" ;



const store= createStore(
	combineReducers({
		products: productsReducer, brandsReducer, categoriesReducer

		
	}), composeWithDevTools(
		applyMiddleware(thunk) 
	));

export default store;