// src/pages/Login.jsx
import { useContext, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import img from "../assets/images/signup.png";
import api, { API_URL } from "../api";
import { AuthContext } from "../context/AuthContext";
import { useGoogleLogin } from "@react-oauth/google";
import axios from 'axios';

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

  const redirectBasedOnRole = (user) => {
    const from = location.state?.from?.pathname;
    if (from) {
      navigate(from, { replace: true });
    } else if (user?.is_superuser) {
      navigate("/admin", { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await api.post('token/', formData);
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      setIsAuthenticated(true);
      const userData = await getuser();
      setFormData({ email: "", password: "" });
      setError("");
      redirectBasedOnRole(userData);
    } catch (err) {
      console.log(err);
      setError("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  const googleLogin = useGoogleLogin({
  onSuccess: async (tokenResponse) => {
        console.log("googleAccessToken",tokenResponse.access_token);

    try {
      const res = await axios.post(`${API_URL}/rest-auth/google/`, {
        access_token: tokenResponse.access_token,
      });
      console.log("google Login response:",res.data);
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh",res.data.refresh);

      setIsAuthenticated(true);
      getuser();
      setError("");

      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } catch (err) {
      console.error("Google login error:", err);
      setError("Google login failed");
    }
  },
  onError: () => setError("Google login was cancelled or failed"),
});

  return (
    <div className="h-screen w-full bg-[#FFF1DF] flex items-center justify-center">
      <section className="relative flex flex-col bg-white md:flex-row items-center justify-between w-full max-w-7xl mx-auto rounded-lg my-1 px-4 md:px-8">
        <div className="relative p-8 w-full md:w-1/2 z-10">
          <h2 className="text-2xl font-semibold text-center mb-4">Sign in to your account</h2>

          <div className="flex justify-center mb-4">
            <button
              type="button"
              className="border border-gray-400 px-12 py-2 text-sm flex cursor-pointer items-center gap-2"
              onClick={() => googleLogin()}
            >
              <span className="text-xs text-[#4285F4]">GOOGLE</span>
            </button>
          </div>

          <div className="flex items-center my-4">
            <hr className="w-full border-gray-300" />
            <span className="px-2 text-gray-500">or</span>
            <hr className="w-full border-gray-300" />
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className={isLoading ? "opacity-50 pointer-events-none" : ""}>
            <p className="text-[#9C0300]">Email</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Your Email"
              className="border border-[#3B493F] p-2 rounded-2xl w-full my-2"
              onChange={handleChange}
              required
            />
            <p className="text-[#9C0300]">Password</p>
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Your Password"
              className="border border-[#3B493F] p-2 rounded-2xl w-full my-2"
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-[#3B493F] text-white py-2 rounded-2xl mt-4 hover:bg-green-900"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-red-600 underline">Sign up</Link>
          </p>
        </div>

        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3/5 md:w-2/5 z-0 hidden lg:block">
          <img src={img} alt="Design" className=" lg:w-72 lg:h-auto object-cover" />
        </div>
      </section>
    </div>
  );
};

export default Login;
