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
    className="absolute left-1 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 shadow-md"
  >
    <img src={LeftArrow} alt="Previous" className="w-5 h-5 md:w-6 md:h-6" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Next Slide"
    className="absolute right-1 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 shadow-md"
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

  const settings = {
    dots: false,
    lazyLoad: "ondemand",
    infinite: topSellingProducts.length > 1, // Disable infinite loop if only one product
    speed: 500,
    slidesToShow: Math.min(topSellingProducts.length, 4), // Ensure it doesn't exceed product count
    touchMove: true,
    swipe: true,
    slidesToScroll: 1,
    prevArrow: showArrows ? <CustomPrevArrow /> : null,
    nextArrow: showArrows ? <CustomNextArrow /> : null,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: Math.min(topSellingProducts.length, 2) } },
      { breakpoint: 768, settings: { slidesToShow: 2, arrows: false } },
    ],
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products</div>;
  }

  return (
    <div className="max-w-7xl mx-auto text-center py-10 relative">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#3b493f] mb-6">Best Seller</h2>

      <div className="relative">
        {topSellingProducts.length > 0 ? (
          <Slider {...settings}>
            {topSellingProducts.map((product) => (
              <div key={product.slug} className="px-3">
                <div className="bg-white p-4">
                  <Link to={`/product/${product.slug}`}>
                    <div className="w-full h-[200px] flex items-center justify-center overflow-hidden">
                      <img
                        src={product.images[0]?.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-medium mt-4">{product.name}</h3>
                    <p className="text-red-600 font-semibold">{product.price}</p>
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
