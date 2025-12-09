import { useState, useEffect } from "react";
// import Bannerimg1 from "../../assets/images/hp-1.webp";
// import Bannerimg2 from "../../assets/images/hp-2.webp";
// import Bannerimg3 from "../../assets/images/hp-3.webp";
// import Bannerimg4 from "../../assets/images/hp-4.webp";

const images = [
  "/images/banners/hp-1.webp",
  "/images/banners/hp-2.webp",
  "/images/banners/hp-3.webp",
  "/images/banners/hp-4.webp",
];

const HomeBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
      <div className="relative w-full h-[230px] sm:h-[400px] md:h-[500px] lg:h-[85vh] lg:max-h-screen bg-gray-900 text-white flex items-center justify-center overflow-hidden">
        {/* Image Slider */}
        <img
          src={images[currentIndex]}
          width='1920'
          height='800'
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
          loading={currentIndex === 0 ? "eager" : "lazy"}
          fetchPriority={currentIndex === 0 ? "high" : "low"}        
          />
        {images[currentIndex] &&
          images[currentIndex] === "/images/banners/hp-1.webp" && (
            <div className="absolute top-8 md:top-30 right-0 mt-5 bg-[#38493f]/60 p-2 md:p-4 shadow-lg w-fit md:w-[50%] text-left px-4 md:px-0 md:pl-8 lg:pl-14">
              <h2 className="font-corinthia font-semibold text-base md:text-3xl lg:text-4xl tracking-wider bottom-[5%] text-white right-1/2 md:left-auto md:translate-x-0 md:top-[35%] md:right-[15%]">
                Crafted. Curated. Bespoke
              </h2>
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
