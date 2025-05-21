import axios from "axios";
import { BASEURL } from "../api";

const API_URL = `${BASEURL}/api/contact/`;


// Fetch all contacts
export const fetchContacts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const submitContactForm = async (formData) => {
    const response = await axios.post(API_URL, formData);
    return response.data;
};
