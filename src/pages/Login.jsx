import { useContext, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import img from "../assets/images/signup.png";
import api from "../api";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { setIsAuthenticated, getuser } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    api.post('token/', formData)
      .then(res => {
        console.log(res.data);
        setIsLoading(false);
        setIsAuthenticated(true);
        getuser();
        localStorage.setItem("access", res.data.access);
        localStorage.setItem("refresh", res.data.refresh);
        setFormData({ email: "", password: "" });
        setError("");
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
        setError("Invalid email or password");
      });
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      setIsLoading(true);
      const decoded = jwtDecode(credentialResponse.credential);
      console.log("Google user info:", decoded);
      
      const response = await api.post('auth/convert-token', {
        grant_type: 'convert_token',
        client_id: 'iqTXKlUrhVpSsNZ2zWYheVeb6BD3Hb58Fi1bGsNu', // Must match Django admin
        client_secret: 'TNFqmUvT8uOMit6dBhNuZaUNOin3nvBeNUs0v6x4qwb9g0QNodWz1qMgQyf6p56jUbox5K9ATa4jhHS8at8j6fGGt1PsXgTZHFNPt25wHg0Gn5W8dNloyEd7aXoSo0cF', // Must match Django admin
        backend: 'google-oauth2',
        token: credentialResponse.credential
      });
      
      localStorage.setItem("access", response.data.access_token);
      localStorage.setItem("refresh", response.data.refresh_token);
      setIsAuthenticated(true);
      await getuser();
      
      navigate(location.state?.from?.pathname || "/", { replace: true });
    } catch (error) {
      console.error('Google login error:', error.response?.data || error);
      setError(error.response?.data?.error_description || "Google login failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleFailure = () => {
    console.log('Google login failed');
    setError("Couldn't connect to Google. Please try another method.");
  };

  return (
    <div className="h-screen w-full bg-[#FFF1DF] flex items-center justify-center">
      <section className="relative flex flex-col bg-white md:flex-row items-center justify-between w-full max-w-7xl mx-auto rounded-lg my-1 px-4 md:px-8">
        <div className="relative p-8 w-full md:w-1/2 z-10">
          <h2 className="text-2xl font-semibold text-center mb-4">Sign in to your account</h2>

          <div className="flex justify-center mb-4">
            <GoogleOAuthProvider clientId="789880228117-pb73ieo7dqf95k6fsph5vuofq4rk88p8.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleFailure}
                useOneTap
                size="large"
                shape="rectangular"
                theme="filled_blue"
                text="continue_with"
              />
            </GoogleOAuthProvider>
          </div>

          <div className="flex items-center my-4">
            <hr className="w-full border-gray-300" />
            <span className="px-2 text-gray-500">or</span>
            <hr className="w-full border-gray-300" />
          </div>

          {error && <p className="text-red-600 text-center">{error}</p>}

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Your Email"
              className="border p-2 rounded-md w-full my-2"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Password"
              className="border p-2 rounded-md w-full my-2"
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-[#3B493F] text-white py-2 rounded-md mt-4 hover:bg-green-900"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Don&apos;t have an account? <Link to="/signup" className="text-red-600 underline">Sign up</Link>
          </p>
        </div>

        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 w-3/5 md:w-2/5 z-0">
          <img src={img} alt="Design" className="w-full h-auto object-cover" />
        </div>
      </section>
    </div>
  );
};

export default Login;