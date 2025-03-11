import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import img from "../../assets/images/design/MainBanner.png";

const Counter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 50);
    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        clearInterval(interval);
        setCount(value);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(interval);
  }, [value, duration]);

  return <motion.p className="text-lg sm:text-xl font-bold">{count}+</motion.p>;
};
Counter.propTypes = {
  value: PropTypes.number.isRequired,
  duration: PropTypes.number,
};

const MainBanner = () => {
  return (
    <div className="relative w-full">
      {/* Text Section */}
      <div className="bg-white text-center py-10 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800">
          Why Choose us?
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
          We are the largest design set-up in India with over 15 years of
          experience in home interiors and modular solutions.
        </p>
      </div>

      {/* Stats Section with Background Image */}
      <div
        className="relative bg-cover bg-center py-10 sm:py-16 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[600px] xl:h-[700px]"
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Stats Box Positioned at Bottom Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.95, scale: 0.9 }}
          transition={{ duration: 1 }}
          className="absolute right-5 bottom-10 sm:right-10 sm:bottom-16 bg-white bg-opacity-80 p-6  shadow-lg  w-3/4 sm:w-[50%] md:w-[40%] lg:w-[35%]"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
            <div className="border-1 border-dashed border-[black] p-4">
              <Counter value={12} />
              <p className="text-xs sm:text-sm  text-gray-600">Cities</p>
            </div>
            <div className="border-1 border-dashed border-[black]  p-4">
              <Counter value={8} />
              <p className="text-xs sm:text-sm  text-gray-600">Design Studios</p>
            </div>
            <div className="border-1 border-dashed border-[black]  p-4">
              <Counter value={50} />
              <p className="text-xs sm:text-sm  text-gray-600">Homes Designed</p>
            </div>
            <div className="border-1 border-dashed border-[black]  p-4">
              <Counter value={2673} />
              <p className="text-xs sm:text-sm  text-gray-600">Happy Customers</p>
            </div>
            <div className="border-1 border-dashed border-[black]  p-4">
              <p className="text-xs sm:text-sm  text-gray-600">
                100% Transparent Pricing
              </p>
            </div>
            <div className="border-1 border-dashed border-[black]  p-4">
              <p className="text-xs sm:text-sm  text-gray-600">
                End-to-End Project Management
              </p>
            </div>
            <div className="border-1 border-dashed border-[black]  p-4">
              <p className="text-xs sm:text-sm  text-gray-600">100% Satisfaction</p>
            </div>
            <div className="border-1 border-dashed border-[black]  p-4">
              <p className="text-xs sm:text-sm  text-gray-600">Quality Assurance</p>
            </div>
            <div className="border-1 border-dashed border-[black]  p-4">
              <Counter value={30} />
              <p className="text-xs sm:text-sm  text-gray-600">In-house Designers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MainBanner;
