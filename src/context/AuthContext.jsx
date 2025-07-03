// src/context/AuthContext.js
import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { jwtDecode } from 'jwt-decode';
import api from '../api';

export const AuthContext = createContext(false);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  const handleAuth = () => {
    const token = localStorage.getItem('access');
    if (!token) {
      setIsAuthenticated(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const expiry_date = decoded.exp;
      const current_date = Math.floor(Date.now() / 1000);

      if (expiry_date < current_date) {
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Invalid token:', error.message);
      setIsAuthenticated(false);
    }
  };

  const getuser = () => {
    return api.get('profile/')
      .then((response) => {
        setUser(response.data);
        return response.data; // ✅ returning user data
      })
      .catch((error) => {
        console.error('Error fetching user:', error.message);
      });
  };

  useEffect(() => {
    handleAuth();
    getuser();
  }, []);

  const authValue = {
    isAuthenticated,
    setIsAuthenticated,
    getuser,
    user,
  };

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
