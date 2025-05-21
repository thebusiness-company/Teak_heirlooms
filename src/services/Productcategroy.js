import axios from "axios";
import { BASEURL } from "../api";

const API_URL = `${BASEURL}/api/collection/`;

// Fetch latest banner
export const fetchCollection = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching Collection:", error);
        throw error;
    }
};