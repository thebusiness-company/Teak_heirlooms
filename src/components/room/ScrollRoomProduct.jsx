import { useRef } from "react";
import { useProducts } from "../../Hooks/useProducts";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevArrowIcon from "../../assets/images/Left.png";
import NextArrowIcon from "../../assets/images/Right.png";
import PropTypes from "prop-types";

const CustomPrevArrow = ({ onClick }) => (
  <button 
  onClick={ onClick } 
  className="absolute left-[-20px] top-[120px] transform -translate-y-1/2 z-10 bg-white  shadow-md p-1">
    <img src={PrevArrowIcon} 
    alt="Prev-Arrow"  
    className="w-6 h-6 md:w-8 md:h-8"/>
  </button>
);
CustomPrevArrow.propTypes = { onClick: PropTypes.func.isRequired };

const CustomNextArrow = ({ onClick }) => (
  <button 
  onClick={ onClick }
  className="absolute right-[-20px] top-[120px] transform -translate-y-1/2 z-10 bg-white shadow-md p-1">
    <img src={NextArrowIcon} 
    alt="Prev-Arrow" 
    className="w-6 h-6 md:w-8 md:h-8"/>
  </button>
);
CustomNextArrow.propTypes = { onClick: PropTypes.func.isRequired };


const ScrollRoomProduct = () => {
  const { products, isLoading, error } = useProducts();
  const sliderRef = useRef();

  const NewInProducts = products?.filter((product) => product.newin) || [];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow:4,
    slidesToScroll:1,
    arrows:true,
    swipeToSlide: true,
    prevArrow: <CustomPrevArrow/>,
    nextArrow: <CustomNextArrow/>,
     responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products</div>;
  }

  return (
    <div className="max-w-8xl mx-auto text-center px-10 py-10">

      {NewInProducts.length > 0 ? (
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {NewInProducts.map(( product ) =>(
              <div key={product.slug} >
                <Link to={`/product/${product.slug}`} className="block bg-white p-4 rounded shadow">
                  <div className="w-full h-[200px] flex items-center justify-center overflow-hidden ">
                    <img
                      src={product.images[0]?.image || "/path/to/fallback-image.jpg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium mt-4 truncate text-[#9C0300]">{product.name}</h3>
                  <p className=" font-semibold">₹ {product.price}</p>
                </Link>
              </div>
            ))}
          </Slider>
          {/* <div className="flex gap-4 md:gap-6 w-max">
            {NewInProducts.map((product) => (
              <div
                key={product.slug}
                className="min-w-[220px] sm:min-w-[250px] bg-white p-4 "
              >
                <Link to={`/product/${product.slug}`}>
                  <div className="w-full h-[200px] flex items-center justify-center overflow-hidden ">
                    <img
                      src={product.images[0]?.image || "/path/to/fallback-image.jpg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium mt-4 truncate text-[#9C0300]">{product.name}</h3>
                  <p className=" font-semibold">₹ {product.price}</p>
                </Link>
              </div>
            ))}
          </div> */}
        </div>
      ) : (
        <p className="text-gray-500">No New In products available.</p>
      )}
    </div>
  );
};

export default ScrollRoomProduct;
