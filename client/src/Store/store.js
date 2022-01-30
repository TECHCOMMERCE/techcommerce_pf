import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {productsReducer} from "./reducer/products";
import {productReducer} from "./reducer/product";
import {brandsReducer} from "./reducer/brands";
import {categoriesReducer} from "./reducer/categories";
import {usersReducer} from "./reducer/users";
import {cartsReducer} from './reducer/carts'
import {reviewReducer} from './reducer/reviews'

import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    products: productsReducer,
    brandsReducer,
    categoriesReducer,
    productReducer,
    users: usersReducer,
		cart: cartsReducer,
    review: reviewReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;