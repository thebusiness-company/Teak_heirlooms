import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

const authService = {
  login: async (formData) => {
    const response = await axios.post(`${API_URL}/token/`, formData);
    
    // Store tokens
    localStorage.setItem("access_token", response.data.access);
    localStorage.setItem("refresh_token", response.data.refresh);

    // Fetch user details
    const userResponse = await axios.get(`${API_URL}/auth/user/`, {
      headers: { Authorization: `Bearer ${response.data.access}` },
    });

    localStorage.setItem("user", JSON.stringify(userResponse.data));

    // Dispatch event to update UI
    window.dispatchEvent(new Event("userLoggedIn"));

    return userResponse.data;
  },

  logout: () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");

    window.dispatchEvent(new Event("userLoggedOut"));
  },

  fetchUser: async () => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) throw new Error("No access token found");

    const response = await axios.get(`${API_URL}/auth/user/`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    return response.data;
  }
};

export default authService;
