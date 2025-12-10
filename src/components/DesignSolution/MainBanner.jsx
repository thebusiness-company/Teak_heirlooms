import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import img from "../../assets/images/design/design-2.png";

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
      <div className="bg-white text-center py-10 px-4 w-full max-w-[90%] mx-auto">
        <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-infant font-bold text-[#3B493F] mb-6 lg:mb-8">
          Why Choose us?
        </h2>
        <p className="text-[#3B493F] mt-2 text-sm sm:text-base md:text-lg">
          At Teak Heirlooms, we believe that furniture should be personal,
          soulful, and built to last. Each piece we create begins with a
          conversation and ends in a masterpiece tailored just for you.
        </p>
        <p className="text-[#3B493F] mt-2 text-sm sm:text-base md:text-lg">
          We're not here to mass produce. We're here to preserve the art of
          making. From selecting the finest teak to working with seasoned
          artisans, we obsess over every grain and groove—because details make
          the difference
        </p>
        <p className="text-[#3B493F] mt-2 text-sm sm:text-base md:text-lg">
          While trends come and go, your story doesn't. We design furniture that
          fits your life now—and becomes part of your legacy later. When you
          choose us, you're choosing meaning over mass, depth over decor.
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
          className="absolute right-2 bottom-0 p-4 md:p-6 md:right-5 md:bottom-10  bg-white bg-opacity-80   shadow-lg  w-3/4 sm:w-[90%] md:w-[50%] lg:w-[45%]"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left md:text-center">
            <div className="border-1 border-dashed border-[black] text-left md:text-center p-2 md:p-4 lg:p-5 break-words">
              <Counter value={4} />
              <p className="text-xs md:text-sm  text-[#3B493F] text-left md:text-center">
                Catering to Cities
              </p>
            </div>
            <div className="border-1 border-dashed border-[black] text-left md:text-center p-2 md:p-4 lg:p-5 break-words">
              <Counter value={20} />
              <p className="text-xs md:text-sm text-[#3B493F] text-left md:text-center">
                Homes Furnished
              </p>
            </div>
            <div className="border-1 border-dashed border-[black] text-left md:text-center p-2 md:p-4 lg:p-5 break-words">
              <Counter value={25} />
              <p className="text-xs md:text-sm  text-[#3B493F] text-left md:text-center">
                Years of Experience
              </p>
            </div>
            <div className="border-1 border-dashed border-[black] text-left md:text-center p-2 md:p-4 lg:p-5 break-words">
              <Counter value={1000} />
              <p className="text-xs md:text-sm  text-[#3B493F] text-left md:text-center">
                Happy Customers
              </p>
            </div>
            <div className="border-1 border-dashed border-[black] text-left md:text-center p-2 md:p-4 lg:p-5 break-words">
              <p className="text-xs md:text-sm  text-[#3B493F] text-left md:text-center">
                100% Transparent Pricing
              </p>
            </div>
            <div className="border-1 border-dashed border-[black] text-left md:text-center p-2 md:p-4 lg:p-5 break-words">
              <p className="text-xs md:text-sm  text-[#3B493F] text-left md:text-center ">
                End-to-End Project Management
              </p>
            </div>
            <div className="border-1 border-dashed border-[black] text-left md:text-center p-2 md:p-4 lg:p-5 break-words">
              <p className="text-xs md:text-sm  text-[#3B493F] text-left md:text-center">
                100% Satisfaction
              </p>
            </div>
            <div className="border-1 border-dashed border-[black] text-left md:text-center p-2 md:p-4 lg:p-5 break-words">
              <p className="text-xs md:text-sm  text-[#3B493F] text-left md:text-center">
                Quality Assurance
              </p>
            </div>
            <div className="border-1 border-dashed border-[black] text-left md:text-center p-2 md:p-4 lg:p-5 break-words">
              {/* <Counter value={20} /> */}
              <p className="text-xs md:text-sm  text-[#3B493F] text-left md:text-center">
                Strong Design Solutions
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MainBanner;
