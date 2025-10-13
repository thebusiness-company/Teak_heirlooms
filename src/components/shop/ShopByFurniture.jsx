import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";

import PrevArrowImg from "../../assets/images/Left.png";
import NextArrowImg from "../../assets/images/Right.png";
import { useCategories } from "../../Hooks/useCategories"; // Adjust path as needed

// Custom Arrows
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Previous Slide"
    className="absolute -left-1 md:left-1 lg:left-0 top-[110px] md:top-[180px] transform -translate-y-1/2 z-10 cursor-pointer bg-[#FFFFFF]"
  >
    <img
      src={PrevArrowImg}
      alt="Previous"
      className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
    />
  </button>
);
CustomPrevArrow.propTypes = { onClick: PropTypes.func.isRequired };

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Next Slide"
    className="absolute -right-1 md:right-1 lg:right-0 top-[110px] md:top-[180px] transform -translate-y-1/2 z-10 cursor-pointer bg-[#FFFFFF]"
  >
    <img
      src={NextArrowImg}
      alt="Next"
      className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
    />
  </button>
);
CustomNextArrow.propTypes = { onClick: PropTypes.func.isRequired };

const ShopByFurniture = () => {
  const { categories, isLoading, error } = useCategories();

  const settings = {
    lazyLoad: "ondemand",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    touchMove: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  if (isLoading) {
    return (
      <>
        <div className="max-w-7xl mx-auto text-center py-10 overflow-x-hidden">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-[#3b493f] mb-6 font-infant">
            Shop by Furniture
          </h2>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-10 animate-pulse">
            {[...Array(3)].map((_, index) => (
              <div 
              key={index}
              className={`w-[45%] lg:w-1/4 px-2
              ${index === 2 ? "hidden lg:block" : ""}
              `}
              >
                <div className="bg-white p-4">
                  <div className="w-full h-48 bg-gray-300 rounded-md"/>
                </div>

              </div>
            ))}

          </div>
        </div>
      </>
    );
  }
  
  if (error) return <p className="text-center text-red-500">Error loading categories.</p>;

  return (
    <div className="w-full max-w-[90%] mx-auto text-center py-10 relative overflow-x-hidden">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-[#3b493f] mb-6 font-infant">
        Shop by Furniture
      </h2>

      <div className="relative">
        <Slider {...settings}>
          {categories?.map((category) => (
            <div key={category.id} className="px-2">
              <div className="bg-white p-2 md:p-4">
                <Link to={`/Category/${category.slug}`}>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 md:h-[300px] lg:h-[380px] object-cover aspect-square"
                  />
                  <h3 className="text-lg font-semibold mt-4 text-[#9C0300]">
                    {category.name}
                  </h3>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ShopByFurniture;
