import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/images/signup.png";
import google from "../assets/images/google.svg";
import facebook from "../assets/images/facebook.svg";
import axios from "axios";
import { BASEURL } from "../api";

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
        <div className="relative p-8 w-full md:w-1/2 z-10">
          <h2 className="text-2xl font-semibold text-center mb-4">Create your account</h2>

          {/* Social Buttons */}
          <div className="flex justify-center space-x-4 mb-4">
            <span className="border px-4 py-2 rounded-full flex items-center space-x-6">
              <span>Login with Google/Facebook</span>
              <button><img src={google} alt="Google" className="w-5 h-5" /></button>
              <button><img src={facebook} alt="Facebook" className="w-5 h-5" /></button>
            </span>
          </div>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="w-full border-gray-300" />
            <span className="px-2 text-gray-500">or</span>
            <hr className="w-full border-gray-300" />
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
            <input
              type="text"
              name="username"
              value={formData.username}
              placeholder="User Name"
              className="border p-2 rounded-md w-full my-2"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Your Email"
              className="border p-2 rounded-md w-full my-2"
              onChange={handleChange}
              required
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="password"
                name="password1"
                value={formData.password1}
                placeholder="Password"
                className="border p-2 rounded-md"
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password2"
                value={formData.password2}
                placeholder="Re-enter Password"
                className="border p-2 rounded-md"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mt-4 flex items-center">
              <input type="checkbox" className="mr-2" required />
              <span className="text-sm">
                I agree to the <a href="#" className="text-red-600 underline">Teak Heirlooms Policy</a>.
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-[#3B493F] text-white py-2 rounded-md mt-4 hover:bg-green-900"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Signup"}
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Already have an account? <a href="/login" className="text-red-600 underline">Login</a>
          </p>
        </div>

        {/* Image */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 w-3/5 md:w-2/5 z-0">
          <img src={img} alt="Design" className="w-full h-auto object-cover" />
        </div>
      </section>
    </div>
  );
};

export default Signup;
