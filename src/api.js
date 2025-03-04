import axios from "axios";

    export const BASEURL = "http://127.0.0.1:8000/"
    export  const API_URL = "http://127.0.0.1:8000/"

    const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    });
    export default api;