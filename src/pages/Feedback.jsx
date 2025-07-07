import { useState } from "react";
import emailjs from "@emailjs/browser";
import img from "../assets/images/signup.png";

const FeedbackForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }

    const templateParams = {
      user_email: email,
      user_message: message,
    };

    emailjs
      .send(
        "service_q1piwn9", // Replace with your EmailJS service ID
        "template_nf0kcbv", // Replace with your EmailJS template ID
        templateParams,
        "mN9qUH1GZJVpsCA9M" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          setStatus("Feedback sent successfully!");
          setEmail("");
          setMessage("");
        },
        (error) => {
          setStatus("Failed to send feedback. Try again later.");
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#FAEDE5] p-6 md:p-20">
      {/* Left Side */}
      <div className="w-full md:w-1/2 max-w-xl space-y-6">
        <div className="flex flex-col sm:flex-row items-center sm:space-x-3">
          <label className="text-lg md:text-2xl lg:text-3xl font-semibold">Email:</label>
          <div className="relative bg-white shadow-md rounded-lg w-full max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-4 text-lg rounded-lg focus:outline-none placeholder-[#9C030099]"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md w-full">
          <textarea
            className="w-full h-32 p-2 focus:outline-none"
            placeholder="Write your valuable feedback..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <button
          onClick={sendEmail}
          className="w-full md:w-auto px-6 py-3 bg-[#9C0300] text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition"
        >
          Share your valuable feedback
        </button>

        {status && <p className="text-gray-700">{status}</p>}
      </div>

      {/* Right Side (Image) */}
      <div className="w-full md:w-1/2 md:ml-10 flex justify-center mt-6 md:mt-0">
        <div className="relative w-full max-w-md">
          <img
            src={img}
            alt="Decorative"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
