import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { productsReducer } from "./reducer/products";
import { brandsReducer } from "./reducer/brands";
import { categoriesReducer } from "./reducer/categories";
import { productReducer } from "./reducer/product";

import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    products: productsReducer,
    brandsReducer,
    categoriesReducer,
    productReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
