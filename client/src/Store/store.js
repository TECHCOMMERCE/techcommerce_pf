import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer } from "./reducer/products";
import { productReducer } from "./reducer/product";
import { brandsReducer } from "./reducer/brands";
import { categoriesReducer } from "./reducer/categories";
import { categoryReducer } from "./reducer/category";
import { usersReducer } from "./reducer/users";
import { cartsReducer } from "./reducer/carts";
import {brandReducer} from "./reducer/brand";
import {wishReducer} from "./reducer/wishlist";
import  TicketReducer from './reducer/tickets';

import thunk from "redux-thunk";


const store = createStore(
  combineReducers({
    products: productsReducer,
    brandsReducer,
    brandReducer,
    categoriesReducer,
    categoryReducer,
    productReducer,
    users: usersReducer,
    cart: cartsReducer,
    tickets: TicketReducer,
    wishlist: wishReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
