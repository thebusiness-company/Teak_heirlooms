import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import M1 from "../../assets/images/shop/M1.png";
import PrevArrow from "../../assets/images/Left.png"; // Custom left arrow
import NextArrow from "../../assets/images/Right.png"; // Custom right arrow
import { useProductCat } from "../../Hooks/useProductCat";

// Custom Arrow Components
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import api from "../../api";

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        aria-label="Previous Slide"
        className="absolute left-1 md:left-1 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-[#FFFFFF]"
      >
        <img src={PrevArrow} alt="Previous" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
      </button>
    );
  };

CustomPrevArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
};
  
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        aria-label="Next Slide"
        className="absolute right-2 md:right-1 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-[#FFFFFF]"
      >
        <img src={NextArrow} alt="Next" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
      </button>
    );
  };

CustomNextArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
};

const ShopByFurniture = () => {

  useEffect(() => {
    api.get("collection/")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  const products = [
    { id: 1, image: M1, title: "Lorem ipsum", price: "₹ 0000.00" },
    { id: 2, image: M1, title: "Lorem ipsum", price: "₹ 0000.00" },
    { id: 3, image: M1, title: "Lorem ipsum", price: "₹ 0000.00" },
    { id: 4, image: M1, title: "Lorem ipsum", price: "₹ 0000.00" },
  ];

  const settings = {
    lazyLoad: 'ondemand',
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
      { breakpoint: 768, settings: { slidesToShow: 2, arrows: false } },
      { breakpoint: 640, settings: { slidesToShow: 2, arrows: false } },
    ],
  };
  
  return (
    <div className="max-w-7xl mx-auto text-center py-10  relative">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#3b493f] mb-6">Shop by Furniture</h2>

      <div className="relative">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-2">
              <div className="bg-white p-4 ">
                <Link to='/shop'>
                <img src={product.image} alt={product.title} className="w-full" />
                <h3 className="text-lg font-medium mt-4">{product.title}</h3>
                <p className="text-red-600 font-semibold">{product.price}</p>
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
