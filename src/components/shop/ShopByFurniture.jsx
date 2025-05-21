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
    className="absolute left-1 md:left-1 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-[#FFFFFF]"
  >
    <img src={PrevArrowImg} alt="Previous" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
  </button>
);
CustomPrevArrow.propTypes = { onClick: PropTypes.func.isRequired };

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Next Slide"
    className="absolute right-2 md:right-1 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-[#FFFFFF]"
  >
    <img src={NextArrowImg} alt="Next" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
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

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error loading categories.</p>;

  return (
    <div className="max-w-7xl mx-auto text-center py-10 relative">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#3b493f] mb-6">Shop by Furniture</h2>

      <div className="relative">
        <Slider {...settings}>
          {categories?.map((category) => (
            <div key={category.id} className="px-2">
              <div className="bg-white p-4">
                <Link to={`/Category/${category.slug}`}>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover"
                  />
                  <h3 className="text-lg font-medium mt-4">{category.name}</h3>
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
