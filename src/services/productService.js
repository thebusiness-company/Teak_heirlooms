// src/services/productService.js
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/products/";

export const fetchProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addProduct = async (formData) => {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  return await axios.post(API_URL, formData, config);
};

export const updateProduct = async (slug, formData) => {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  return await axios.patch(`${API_URL}${slug}/`, formData, config);
};

export const deleteProduct = async (slug) => {
  return await axios.delete(`${API_URL}${slug}/`);
};
