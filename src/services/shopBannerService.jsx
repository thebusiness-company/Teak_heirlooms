import axios from "axios";
import { BASEURL } from "../api";

const API_URL = `${BASEURL}/api/banners/`;

// Fetch latest banner
export const fetchLatestBanner = async () => {
    try {
        const response = await axios.get(`${BASEURL}/api/latest/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching latest banner:", error);
        throw error;
    }
};

export const fetchBanners = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching banners:", error);
        throw error;
    }
};

export const addBanner = async (formData) => {
    try {
        const response = await axios.post(API_URL, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return response.data;
    } catch (error) {
        console.error("Error adding banner:", error);
        throw error;
    }
};

// Use PATCH for partial updates
export const updateBanner = async ({ id, formData }) => {
    try {
        const response = await axios.patch(`${API_URL}${id}/`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return response.data;
    } catch (error) {
        console.error("Error updating banner:", error);
        throw error;
    }
};

export const deleteBanner = async (id) => {
    try {
        await axios.delete(`${API_URL}${id}/`);
    } catch (error) {
        console.error("Error deleting banner:", error);
        throw error;
    }
};
