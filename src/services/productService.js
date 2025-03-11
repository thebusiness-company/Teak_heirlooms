// src/services/productService.js
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/products/";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const addProduct = async (formData) => {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  try {
    return await axios.post(API_URL, formData, config);
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

export const updateProduct = async (slug, formData) => {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
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
