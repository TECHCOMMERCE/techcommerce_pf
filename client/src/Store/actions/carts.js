import axios from 'axios'
import {
  GET_PRODUCTS_CART,
  CLEAR_CART
} from '../constanst/actionsTypes'
const SERVER = 'http://localhost:3001';

export function getProductsCartUser(userId){
  return async function (dispatch){
    try{
      if(!userId){
        const itemsCart = JSON.parse(localStorage.getItem("cart")) || [];
        return dispatch({
            type: GET_PRODUCTS_CART,
            payload: itemsCart
        })
          
      }else{
        const {data}= await axios.get(`${SERVER}/users/cart/${userId}`)
        const localCart = JSON.parse(localStorage.getItem("cart")) || [] //orderId es el estado para la orden de ese usuario
        localStorage.removeItem("cart")
        const res= await axios.put(`${SERVER}/users/cart/${userId}`,{productsInfo: [...data.cart,...localCart]})
        return dispatch ({
            type: GET_PRODUCTS_CART,
            payload: res.data.cart
        })
      }
    }catch(err){
      console.log(err)
    }
  }
}

export const addToCart = (product, userId,cart) => (dispatch) => {
  if (!userId) {
    let products = JSON.parse(localStorage.getItem("cart")) || [];
    let productFind = false;
    products = products.map((p) => { 
      if (p.productid === product.productid ) {
        productFind = true;
        return {
          ...p,
          quantity: Number(p.quantity) + product.quantity<=p.stock?Number(p.quantity) + product.quantity:p.quantity,
        }; 
      }
      return p;
    });
    if (productFind===false){ 
        products.push(product);
    }
    products= products.filter(p=>p.quantity>0)
    localStorage.setItem("cart", JSON.stringify(products));
    return dispatch({ 
      type: GET_PRODUCTS_CART,
      payload: products 
    });
  }
if (userId) {
    let exits=false;
    let aux= Array.isArray(cart)?cart.map(p=>{
        if(p.idProduct===product.idProduct){
          exits=true;
          return {
              ...p,
              quantity: Number(p.quantity)+Number(product.quantity)
          }
        }
        return p;
    }):[]

    if(!exits) aux=[...aux, product]
    const body = {productsInfo: aux}
    return axios
      .put(`${SERVER}/users/cart/${userId}`, body)
      .then((response) => {
        dispatch({ 
          type: GET_PRODUCTS_CART,
          payload: response.data.cart 
        });
      })
      .catch((error) => console.error(error));
  } 
};

export function deleteItemFromCart(idProduct, userId){
  return async (dispatch) =>{
    try{
      if(!userId){
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart = cart.filter((p) => p.idProduct != idProduct)
        localStorage.setItem("cart", JSON.stringify(cart));
        return dispatch ({
          type: GET_PRODUCTS_CART,
          payload: cart
        })
      }
      else{
        const {data} = await axios.delete(`${SERVER}/users/cart/${userId}?idProduct=${idProduct}`)
        return dispatch ({
            type: GET_PRODUCTS_CART,
            payload: data.cart
        })
      }
    }catch(err){
        console.log({msg: 'Item not remove'}, err)
    }
  }
}


export function changeAmount(products, userId){
  try{
    return async (dispatch) => {
      if(userId){
        const qtyProduct = await axios.put(`${SERVER}/users/cart/${userId}`,{productsInfo: products})
        return dispatch({
            type: GET_PRODUCTS_CART,
            payload: qtyProduct.data.cart
        })
      }else{
        localStorage.setItem("cart", JSON.stringify(products));
        return dispatch({
            type: GET_PRODUCTS_CART,
            payload: products
        })
      }
    }
  }catch(err) {
      console.log(err)
  }
}

export function clearCart(idUser){
  return async function(dispatch){
    if(idUser)
      await axios.delete(`${SERVER}/users/cart/${idUser}`);
    localStorage.removeItem("cart")
    return dispatch({
      type: CLEAR_CART,
      payload: []
    })
  }
} 