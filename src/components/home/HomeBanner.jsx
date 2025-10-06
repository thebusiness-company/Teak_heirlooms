import { useState, useEffect } from "react";
import Bannerimg1 from "../../assets/images/hp-1.png";
import Bannerimg2 from "../../assets/images/hp-2.png";
import Bannerimg3 from "../../assets/images/hp-3.png";
import Bannerimg4 from "../../assets/images/hp-4.png";

const images = [Bannerimg1, Bannerimg2, Bannerimg3, Bannerimg4];

const HomeBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[80vh] lg:max-h-screen bg-gray-900 text-white flex items-center justify-center overflow-hidden">
        {/* Image Slider */}
        <img
          src={images[currentIndex]}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-opacity-30"></div>
        {images[currentIndex] && images[currentIndex] === Bannerimg1 && (
          <div className="">
            <h1 className="absolute font-corinthia font-semibold text-2xl md:text-3xl lg:text-4xl tracking-wider bottom-[5%] text-black right-1/2 text-center md:left-auto md:translate-x-0 md:top-[35%] md:right-[15%]">
              Crafted. Curated. Bespoke
            </h1>
          </div>
        )}

        {/* Slide Indicators */}
        <div className="absolute bottom-4 flex space-x-2">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-white scale-110" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    );
};

export default HomeBanner;
