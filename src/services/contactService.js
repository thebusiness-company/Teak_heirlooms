import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/contact/";


// Fetch all contacts
export const fetchContacts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const submitContactForm = async (formData) => {
    const response = await axios.post(API_URL, formData);
    return response.data;
};
