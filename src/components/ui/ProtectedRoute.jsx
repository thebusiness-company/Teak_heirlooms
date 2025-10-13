import { useEffect, useState, useContext } from 'react';
import { jwtDecode } from 'jwt-decode';
import api from '../../api';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../../context/AuthContext';
import Spinner from './Spinner';

const ProtectedRoute = ({ children, requireSuperuser = false, allowOnlySuperuser = false }) => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const refreshToken = async () => {
            const refresh = localStorage.getItem('refresh');
            try {
                const res = await api.post('/token/refresh/', { refresh });
                if (res.status === 200) {
                    localStorage.setItem('access', res.data.access);
                    setIsAuthorized(true);
                } else {
                    setIsAuthorized(false);
                }
            } catch (error) {
                console.error("Error refreshing token:", error);
                setIsAuthorized(false);
            }
        };

        const auth = async () => {
            const token = localStorage.getItem('access');
            if (!token) {
                setIsAuthorized(false);
                setLoading(false);
                return;
            }

            try {
                const decoded = jwtDecode(token);
                const expiry_date = decoded.exp;
                const current_date = Math.floor(Date.now() / 1000);
                if (expiry_date < current_date) {
                    await refreshToken();
                } else {
                    setIsAuthorized(true);
                }
            } catch {
                setIsAuthorized(false);
            }

            setLoading(false);
        };

        auth();
    }, []);

    if (loading) return <Spinner />;

    // 🔒 If not authenticated
    if (!isAuthorized) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // 🔒 If only superusers are allowed but the user isn't one
    if (requireSuperuser && !user?.is_superuser) {
        return <Navigate to="/" replace />;
    }

    // 🔒 If superusers should only access /admin
    if (allowOnlySuperuser && user?.is_superuser && location.pathname !== '/admin') {
        return <Navigate to="/admin" replace />;
    }

    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
    requireSuperuser: PropTypes.bool,
    allowOnlySuperuser: PropTypes.bool,
};

export default ProtectedRoute;
