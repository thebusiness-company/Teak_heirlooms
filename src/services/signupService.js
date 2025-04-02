import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

const authService = {
  signup: async (formData) => {
    const response = await axios.post(`${API_URL}/user/register/`, {
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
