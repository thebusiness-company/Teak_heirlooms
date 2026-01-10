import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import { useProducts } from "../../Hooks/useProducts";

import LeftArrow from "../../assets/images/Left.png";
import RightArrow from "../../assets/images/Right.png";
import { Link } from "react-router-dom";

// Custom arrow components
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Previous Slide"
    className="absolute -left-[11px] md:left-[2px] top-[85px] md:top-[145px] lg:top-[105px] xl:top-[125px] 2xl:top-[185px] transform -translate-y-1/2 z-10 bg-white p-2 shadow-md cursor-pointer"
  >
    <img src={LeftArrow} alt="Previous" className="w-5 h-5 md:w-6 md:h-6" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Next Slide"
    className="absolute -right-[11px] md:right-[2px] top-[85px] md:top-[145px] lg:top-[105px] xl:top-[125px] 2xl:top-[185px] transform -translate-y-1/2 z-10 bg-white p-2 shadow-md cursor-pointer"
  >
    <img src={RightArrow} alt="Next" className="w-5 h-5 md:w-6 md:h-6" />
  </button>
);

CustomPrevArrow.propTypes = { onClick: PropTypes.func.isRequired };
CustomNextArrow.propTypes = { onClick: PropTypes.func.isRequired };
const BestSeller = () => {
  const { products, isLoading, error } = useProducts();

  // Filter only top-selling products
  const topSellingProducts = products?.filter((product) => product.topselling) || [];

  // Hide arrows if there are fewer than 4 products
  const showArrows = topSellingProducts.length >= 4;
  const productCount = topSellingProducts.length;

const settings = {
  dots: false,
  lazyLoad: "ondemand",
  speed: 500,

  // FIXED layout
  slidesToShow: 4,

  // BEHAVIOR changes based on count
  infinite: productCount > 4,
  arrows: productCount > 4,
  swipe: productCount > 1,

  slidesToScroll: 1,

  prevArrow: productCount > 4 ? <CustomPrevArrow /> : null,
  nextArrow: productCount > 4 ? <CustomNextArrow /> : null,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        infinite: productCount > 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        infinite: productCount > 2,
      },
    },
  ],
};

    if (isLoading) {
      return (
        <>
          <div className="w-full max-w-[90%] mx-auto text-center py-10 relative">
            <h2 className="text-3xl md:text-4xl 2xl:text-6xl font-semibold text-[#3b493f] mb-6 font-infant">
              Best Sellers
            </h2>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-0 animate-pulse">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className={`w-[45%] lg:w-1/4 
              ${index === 2 ? "hidden lg:block" : ""} 
              ${index === 3 ? "hidden lg:block" : ""}
              `}
                >
                  <div className="bg-white p-4">
                    <div className="w-full h-48 bg-gray-300 mb-4 rounded-md" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }

  if (error) {
    return null;
  }

  return (
    <div className="w-full max-w-[90%] mx-auto text-center py-10 relative">
      <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-[#3b493f] mb-6 font-infant">
        Best Sellers
      </h2>

      <div className="relative">
        {topSellingProducts.length > 0 ? (
          <Slider {...settings}>
            {topSellingProducts.map((product) => (
              <div key={product.slug} className="md:px-3">
                <div className="bg-white p-2 md:p-4">
                  <Link to={`/product/${product.slug}`}>
                    <div className="w-full aspect-square flex items-center justify-center overflow-hidden">
                      <img
                        src={product.images[0]?.image}
                        alt={product.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-medium mt-4 text-[#9C0300]">
                      {product.name}
                    </h3>
                    <p className="text-[#9C0300] font-semibold">
                      ₹ {product.price}
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-gray-500">No top-selling products available.</p>
        )}
      </div>
    </div>
  );
};

export default BestSeller;
