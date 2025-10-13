import { useState } from "react";
import { Link, replace, useNavigate } from "react-router-dom";
import img from "../assets/images/signupnew.png";
import google from "../assets/images/google.svg";
import facebook from "../assets/images/facebook.svg";
import axios from "axios";
import { BASEURL, API_URL} from "../api";
import { useGoogleLogin } from "@react-oauth/google";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const validatePassword = (password) => {
  const errors = [];

  if (password.length < 8) {
    errors.push("Password must be at least 8 characters.");
  }

  const commonPasswords = ["password", "12345678", "qwerty", "abc123"];
  if (commonPasswords.includes(password.toLowerCase())) {
    errors.push("Password is too common.");
  }

  if (!/[A-Z]/.test(password)) {
    errors.push("Include at least one uppercase letter.");
  }

  if (!/[a-z]/.test(password)) {
    errors.push("Include at least one lowercase letter.");
  }

  if (!/[0-9]/.test(password)) {
    errors.push("Include at least one number.");
  }

  if (!/[!@#$%^&*]/.test(password)) {
    errors.push("Include at least one special character (!@#$%^&*).");
  }

  return errors;
};

const Signup = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated, getuser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  const [error, setError] = useState(null);
  const [passwordErrors, setPasswordErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const googleSignup = useGoogleLogin({
      onSuccess: async (tokenResponse) =>{
        console.log("googleAccessToken", tokenResponse.access_token);
        try{
          const res = await axios.post(`${API_URL}/rest-auth/google/`,{
            access_token: tokenResponse.access_token,
          });
          console.log("Google signup response",res.data);
          localStorage.setItem("access",res.data.access);
          localStorage.setItem("refresh",res.data.refresh);
          setIsAuthenticated(true);
          await getuser();
          const from = "/";
          navigate(from,{replace: true})
        } catch (err){
          console.error("Google Signup Error:", err);
          setError("Google signup failed");
        }
      },
      onError: () => setError("Google signup was cancelled or failed"),
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setPasswordErrors([]);

    const validationErrors = validatePassword(formData.password1);
    if (validationErrors.length > 0) {
      setPasswordErrors(validationErrors);
      setLoading(false);
      return;
    }

    if (formData.password1 !== formData.password2) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      await axios.post(`${BASEURL}/api/user/register/`, {
        username: formData.username,
        email: formData.email,
        password: formData.password1,
        password2: formData.password2,
      });

      setFormData({ username: "", email: "", password1: "", password2: "" });
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.detail || "Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full bg-[#FFF1DF] flex items-center justify-center">
      <section className="relative flex flex-col bg-white md:flex-row items-center justify-between w-full max-w-7xl mx-auto rounded-4xl my-1 px-4 md:px-8">
        <div className="relative p-8 w-full lg:w-1/2 z-10">
          <h2 className="text-2xl font-semibold text-center mb-4">Create your account</h2>

          <div className="flex justify-center items-center">
            <button
            onClick={googleSignup}
            className="flex items-center space-x-4 border px-4 lg:px-8 py-2 rounded-full cursor-pointer"
            >
            <span>Sign up with Google</span>
            <img src={google} alt="Google" className="w-5 h-5" />
            </button>
          </div>

            {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="w-full border-[#9C0300]" />
            <span className="px-2 text-[#3B493F]">or</span>
            <hr className="w-full border-[#9C0300]" />
          </div>

          {/* Error Display */}
          {error && <p className="text-red-600 text-center">{error}</p>}
          {passwordErrors.length > 0 && (
            <ul className="text-red-600 text-sm list-disc list-inside mb-2">
              {passwordErrors.map((err, idx) => (
                <li key={idx}>{err}</li>
              ))}
            </ul>
          )}

          <form onSubmit={handleSubmit}>
            <p>User Name</p>
            <input
              type="text"
              name="username"
              value={formData.username}
              placeholder="User Name"
              className="border border-[#3B493F] p-2 rounded-full w-full my-2"
              onChange={handleChange}
              required
            />
            <p>Email</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Your Email"
              className="border border-[#3B493F] p-2 rounded-full w-full my-2"
              onChange={handleChange}
              required
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
              <p className="my-2">Password</p>
              <input
                type="password"
                name="password1"
                value={formData.password1}
                placeholder="Password"
                className="border border-[#3B493F] p-2 rounded-full"
                onChange={handleChange}
                required
              />
              </div>
              <div>
              <p className="my-2">Re-enter Password</p>
              <input
                type="password"
                name="password2"
                value={formData.password2}
                placeholder="Re-enter Password"
                className="border border-[#3B493F] p-2 rounded-full"
                onChange={handleChange}
                required
              />
              </div>
            </div>

            <div className="mt-4 flex items-center">
              <input type="checkbox" className="mr-2 accent-[#9C0300]" required />
              <span className="text-sm">
               <span className="text-[#3B493F]">I agree to the </span> <a href="#" className="text-[#9C0300] underline">Teak Heirlooms Policy</a>.
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-[#3B493F] text-white py-2 rounded-2xl mt-4 hover:bg-green-900 cursor-pointer transition-colors"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Signup"}
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            <span className="text-[#3B493F]">Already have an account? </span><Link to="/login" className="text-[#9C0300] underline">Login</Link>
          </p>
        </div>

        {/* Image */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3/5 md:w-2/5 z-0 hidden lg:block">
          <img src={img} alt="Design" className="lg:w-80 h-auto object-cover" />
        </div>
      </section>
    </div>
  );
};

export default Signup;
