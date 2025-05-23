import axios from "axios";
import { BASEURL } from "../api";
// import { BASEURL } from "./api";
const API_URL = `${BASEURL}/api/homebanner/`;  // Update with your backend URL

export const fetchHomeBanner = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching home banner:", error);
        throw error;
    }
};

export const uploadHomeBanner = async (formData) => {
    try {
        const response = await axios.post(API_URL, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error uploading home banner:", error);
        throw error;
    }
};

export const deleteHomeBanner = async () => {
    try {
        const response = await axios.delete(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error deleting home banner:", error);
        throw error;
    }
};
