import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import M1 from "../../assets/images/shop/M1.png";
import PrevArrow from "../../assets/images/Left.png"; // Custom left arrow
import NextArrow from "../../assets/images/Right.png"; // Custom right arrow

// Custom Arrow Components
import PropTypes from 'prop-types';

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-1 md:left-1 top-1/2 transform -translate-y-1/2 z-1 cursor-pointer bg-[#FFFFFF]"
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
        className="absolute right-2 md:right-1 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-[#FFFFFF]"
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
    { id: 1, image: M1, title: "bedRoom", price: "₹ 0000.00" },
    { id: 2, image: M1, title: "kic", price: "₹ 0000.00" },
    { id: 3, image: M1, title: "Lorem ipsum", price: "₹ 0000.00" },
    { id: 4, image: M1, title: "Lorem ipsum", price: "₹ 0000.00" },
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
        settings: { slidesToShow: 2, arrows: false },
      },
      {
        breakpoint: 640, // Mobile
        settings: { slidesToShow: 1, arrows: false },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto text-center py-10 px-4 relative">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-6">Shop by Room</h2>

      <div className="relative">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-2">
              <div className="bg-white p-4 relative">
                <img src={product.image} alt={product.title} className="w-full" />
                <h3 className="absolute inset-0 flex items-center justify-center text-white text-2xl md:text-3xl font-bold drop-shadow-lg mt-50">
                  {product.title}
                </h3>
                <p className="text-red-600 font-semibold mt-2">{product.price}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ShopByRoom;