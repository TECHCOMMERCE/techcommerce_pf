import axios from "axios";

import {
  GET_PRODUCTS,
  GET_PRODUCTS_PAGINADO,
  ERROR_MESSAGE,
  GET_DETAILS,
  GET_BRANDS_PRODUCTS,
  GET_CATEGORIES_PRODUCTS,
  GET_PRODUCTS_FOR_ADMIN,
  GET_PRODUCTS_BY_NAME,
} from "../constanst/actionsTypes";

const SERVER = process.env.REACT_APP_SERVER || "http://localhost:3001/";

export const getProductsByName = (name, page) => {
  try {
    return async (dispatch) => {
      await axios.get(`${SERVER}products?name=${name}&page=${page}`).then((response) => {
        return dispatch({
          type: GET_PRODUCTS_BY_NAME,
          payload: response.data,
        });
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const getProductsForAdmin = (page) => {
  try {
    // page debe ser mayor que 0 y menor que la cuenta de productos/ 10
    return async (dispatch) => {
      await axios.get(`${SERVER}products?page=${page}`).then((response) => {
        return dispatch({
          type: GET_PRODUCTS_FOR_ADMIN,
          payload: response.data,
        });
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = () => async (dispatch) => {
  /* console.log("entre aca categories"); */
  const data = await axios.get(`${SERVER}categories`);
  return dispatch({
    type: GET_CATEGORIES_PRODUCTS,
    payload: data.data,
  });
};

export const getDetails = (id) => async (dispatch) => {
  /* console.log("entre"); */
  const data = await axios.get(`${SERVER}product/${id}`);
  return dispatch({
    type: GET_DETAILS,
    payload: data.data,
  });
};

export const getBrand = () => async (dispatch) => {
  const data = await axios.get(`${SERVER}brands`);
 /*  console.log("entro aca", data); */
  return dispatch({
    type: GET_BRANDS_PRODUCTS,
    payload: data.data,
  });
};

export function getProducts(page, name, category) {
  /* console.log("hola"); */
  return (dispatch) => {
    // va armando la url donde hará la petición, agregando las query strings si es que existen
    let finalUrl = `${SERVER}products${category || name ? "?" : ""}${
      category ? "categories=" + category : ""
    }${category && name ? "&" : ""}${name ? "name=" + name : ""}`;

    console.log(finalUrl);

    let products = [];

    axios
      .get(finalUrl)
      .then((res) => {
        if (res.data[0].categoryid) {
          // Si se le aplicó el filtrado por categorías se arma un array que contenga los arrays de productosd e cáda categoría
          products.push(...res.data.map((cat) => cat.products));

          // Luego se aplana para que esten en un solo array (osea lo normalizo)
          products = products.flat();
        } else {
          products.push(...res.data);
        }

        if (res.status === 200) {
          dispatch({
            type: GET_PRODUCTS,
            products,
          });
        } else {
          dispatch({
            type: ERROR_MESSAGE,
            message: "Error al mostrar productos",
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_PRODUCTS,
          products: [],
        });
      });
  };
}

export function getProductsFront(obj, page, name = "") {
  const { category, brand, sort } = obj;

  // va armando la url donde hará la petición, agregando las query strings si es que existen
  let finalUrl = `${SERVER}products/all?page=${page}&category=${obj.category}&brand=${obj.brand}&sort=${sort}&name=${name}`;

  return (dispatch) => {
    axios
      .get(finalUrl)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: GET_PRODUCTS_PAGINADO,
            products: res.data,
          });
        } else {
          dispatch({
            type: ERROR_MESSAGE,
            message: "Error al mostrar productos",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
