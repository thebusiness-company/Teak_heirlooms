import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import M1 from "../../assets/images/shop/M1.png";
import PrevArrow from "../../assets/images/Left.png"; // Custom left arrow
import NextArrow from "../../assets/images/Right.png"; // Custom right arrow

// Custom Arrow Components
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-[-15px] top-1/2 transform -translate-y-1/2 z-1 cursor-pointer bg-[#FFFFFF]"
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
        className="absolute right-[-15px]  top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-[#FFFFFF]"
      >
        <img src={NextArrow} alt="Next" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
      </button>
    );
  };

CustomNextArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
};

const ShopByRoom = () => {
  const products = [
    { id: 1, image: M1, title: "bedRoom" },
    { id: 2, image: M1, title: "kic"},
    { id: 3, image: M1, title: "Lorem ipsum" },
    { id: 4, image: M1, title: "Lorem ipsum"},
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // Smaller Tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // Mobile
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto text-center py-8 px-3 relative">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#3b493f] mb-6">Shop by Room</h2>

      <div className="relative">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-4">
              <div className="bg-white  relative">
                <Link to='/room'>
                <img src={product.image} alt={product.title} className="w-full" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#38493f] to-transparent p-4">
                  <p className="text-white text-xl text-center font-semibold">{product.title}</p>
                </div>
                <p className="text-red-600 font-semibold mt-2">{product.price}</p>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ShopByRoom;