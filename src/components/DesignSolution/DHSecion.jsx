import React from "react";
import DH from "../../assets/images/design/dhsection.png";
import { useNavigate } from "react-router-dom";

export default function DHSection() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row md:gap-4 items-center justify-between px-6 py-12 w-full max-w-[90%] mx-auto">
      {/* Left Section */}
      <div className="md:w-1/2 text-left">
        <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-infant font-bold text-[#3B493F] md:ml-12 mb-15 text-center leading-tight">
          5 Steps to Your <br className="hidden md:block" /> Dream Home
        </h2>

        <ul className="space-y-6">
          {[
            "Book an appointment",
            "Meet Your Design Expert",
            "Customise Every Detail",
            "Track Your Piece in Progress",
            "Delivery & White-Glove Installation",
          ].map((text, index) => (
            <li
              key={index}
              className="flex items-center justify-between border-b border-gray-300 pb-2"
            >
              <span className="text-lg font-medium text-[#3B493F]">{text}</span>
              <span className="text-red-500 text-xl font-bold ml-4 mr-16">
                →
              </span>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center md:mt-4">
          <button
            className=" mt-10  sm:mx-10 md:mx-0 px-6 py-2 bg-[#9C0300] text-white font-semibold rounded-full hover:bg-red-700 transition shadow-md cursor-pointer"
            onClick={() => navigate("/contact")}
          >
            BOOK A CONSULTATION
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-8 lg:ml-12 lg:mt-0 ">
        <img
          src={DH}
          alt="Dream Home"
          className="w-full h-[350px] md:h-[500px] lg:h-[550px] shadow-lg object-cover"
        />
      </div>
    </div>
  );
}
