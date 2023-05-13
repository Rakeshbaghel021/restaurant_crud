import axios from "axios";

import {
  ADDNEW_PRODUCT,
  GETALL_PRODUCTS,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "./types";

const API_URL = "http://localhost:4000";

export const addNewProduct = (data) => async (dispatch) => {
  console.log(data);

  try {
    const res = await axios.post(`${API_URL}/product`, data);
    console.log(data);
    dispatch({ type: ADDNEW_PRODUCT, payload: res.data });
  } catch (error) {
    console.log("Error while calling addNewProduct API ", error.message);
  }
};

export const getAllProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/products`);
    dispatch({ type: GETALL_PRODUCTS, payload: res.data });
  } catch (error) {
    console.log("Error while calling getAllProducts API ", error.message);
  }
};

export const updateProduct = (id, data) => async (dispatch) => {
  console.log(id, data);
  try {
    const res = await axios.put(`${API_URL}/product/${id}`, data);
    console.log(res.data);

    dispatch({ type: UPDATE_PRODUCT, payload: res.data.products });
  } catch (error) {
    console.log("Error while calling updateProduct API ", error.message);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${API_URL}/product/${id}`);

    dispatch({ type: DELETE_PRODUCT, payload: res.data.products });
  } catch (error) {
    console.log("Error while calling deleteProduct API ", error.message);
  }
};
