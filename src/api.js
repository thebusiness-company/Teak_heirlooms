import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const BASEURL = "http://127.0.0.1:8000/";
export const API_URL = "http://127.0.0.1:8000/";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access");
    if (token) {
      const decoded = jwtDecode(token);
      const expiry_date = decoded.exp;
      const current_time = Math.floor(Date.now() / 1000);

      // ✅ Only attach token if it is still valid
      if (expiry_date > current_time) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
