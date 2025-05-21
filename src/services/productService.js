// src/services/productService.js
import axios from "axios";
import { BASEURL } from "../api";

const API_URL = `${BASEURL}/api/products/`;

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
export const fetchSubCategory = async () => {
  try {
    const response = await axios.get(`${BASEURL}/api/subcategories/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const addProduct = async (formData) => {
  const config = { headers: { "Content-Type": "multipart/form-data",
    "X-CSRFToken": getCookie("csrftoken"), } };
  try {
    return await axios.post(API_URL, formData, config);
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

export const updateProduct = async (slug, formData) => {
  const config = { headers: { "Content-Type": "multipart/form-data" ,
    "X-CSRFToken": getCookie("csrftoken"),
  } };
  try {
    return await axios.patch(`${API_URL}${slug}/`, formData, config);
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

export const deleteProduct = async (slug) => {
  try {
    return await axios.delete(`${API_URL}${slug}/`);
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};


function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}