// src/context/AuthContext.js
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { jwtDecode } from "jwt-decode";
import api from "../api";

export const AuthContext = createContext(false);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  // Validate token
  const handleAuth = () => {
    const token = localStorage.getItem("access");

    if (!token) {
      setIsAuthenticated(false);
      return false;
    }

    try {
      const decoded = jwtDecode(token);
      const expiry_date = decoded.exp;
      const now = Math.floor(Date.now() / 1000);

      if (expiry_date < now) {
        setIsAuthenticated(false);
        return false;
      }

      setIsAuthenticated(true);
      return true;

    } catch {
      setIsAuthenticated(false);
      return false;
    }
  };

  // Fetch user only if authenticated
  const getuser = async () => {
    try {
      const response = await api.get("profile/");
      setUser(response.data);
      return response.data;
    } catch {
      // Silent fail in production – avoid console spam
      setUser({});
      return null;
    }
  };

  useEffect(() => {
    const valid = handleAuth();

    // Only fetch user when token is valid
    if (valid) {
      getuser();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, getuser, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
