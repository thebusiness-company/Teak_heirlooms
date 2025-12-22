import axios from "axios";
import { API_URL } from "../api";

export const fetchHomeCategories = async () => {
  const { data } = await axios.get(`${API_URL}/api/home-categories/`);
  return data;
};
