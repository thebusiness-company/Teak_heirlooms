import axios from "axios";
// import { BASEURL } from "./api";
const API_URL = `http://127.0.0.1:8000/api/homebanner/`;  // Update with your backend URL

export const fetchHomeBanner = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const uploadHomeBanner = async (formData) => {
    const response = await axios.post(API_URL, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
};

export const deleteHomeBanner = async () => {
    const response = await axios.delete(API_URL);
    return response.data;
};
