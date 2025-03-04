import axios from "axios";

const API_URL = "http://localhost:8000/api/testimonials/";

export const getTestimonials = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

export const addTestimonial = async (formData) => {
  const response = await axios.post(API_URL, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const updateTestimonial = async (id, formData) => {
  const response = await axios.put(`${API_URL}${id}/`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const deleteTestimonial = async (id) => {
  await axios.delete(`${API_URL}${id}/`);
};
