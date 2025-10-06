import { useState, useEffect } from "react";
import Bannerimg1 from "../../assets/images/hpbanner-1.jpg";
import Bannerimg2 from "../../assets/images/bannerimg2.png";
import Bannerimg3 from "../../assets/images/bannerimg3.png";

const images = [Bannerimg1, Bannerimg2, Bannerimg3, Bannerimg1];

const HomeBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] bg-gray-900 text-white flex items-center justify-center overflow-hidden">
            {/* Image Slider */}
            <img
                src={images[currentIndex]}
                alt="Banner"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            />
            <div className="absolute inset-0 bg-opacity-30"></div>
            
            {/* Slide Indicators */}
            <div className="absolute bottom-4 flex space-x-2">
                {images.map((_, i) => (
                    <span
                        key={i}
                        className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-white scale-110' : 'bg-gray-400'}`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default HomeBanner;
