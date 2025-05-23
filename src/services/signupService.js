import axios from "axios";
import { BASEURL } from "../api";

const API_URL = BASEURL;

const authService = {
  signup: async (formData) => {
    const response = await axios.post(`${API_URL}/api/user/register/`, {
      username: formData.username,
      email: formData.email,
      password: formData.password1, // Django expects "password" not "password1"
    });

    return response.data;
  },

  socialLogin: (provider) => {
    window.location.href = `${API_URL}/auth/${provider}/`;
  },
};

export default authService;
