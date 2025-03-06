import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Product1 from "../../assets/images/shop/M1.png";
import Product2 from "../../assets/images/shop/M2.png";
import Product3 from "../../assets/images/shop/M1.png";
import Product4 from "../../assets/images/shop/M2.png";
import LeftArrow from "../../assets/images/Left.png";
import RightArrow from "../../assets/images/Right.png";

// Custom arrow components
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Previous Slide"
    className="absolute left-1 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2  shadow-md"
  >
    <img src={LeftArrow} alt="Previous" className="w-5 h-5 md:w-6 md:h-6" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Next Slide"
    className="absolute right-1 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2  shadow-md"
  >
    <img src={RightArrow} alt="Next" className="w-5 h-5 md:w-6 md:h-6" />
  </button>
);

CustomPrevArrow.propTypes = { onClick: PropTypes.func.isRequired };
CustomNextArrow.propTypes = { onClick: PropTypes.func.isRequired };

const NewIn = () => {
  const products = [
    { id: 1, image: Product1, title: "Lorem Ipsum", price: "₹ 0000.00" },
    { id: 2, image: Product2, title: "Lorem Ipsum", price: "₹ 0000.00" },
    { id: 3, image: Product3, title: "Lorem Ipsum", price: "₹ 0000.00" },
    { id: 4, image: Product4, title: "Lorem Ipsum", price: "₹ 0000.00" },
  ];

  const settings = {
    dots: false,
    lazyLoad: "ondemand",
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    TouchMove: true,
    swipe: true,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } },
    ],
  };

return (
    <div className="max-w-7xl mx-auto text-center py-10 relative">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#3b493f] mb-6">New In</h2>

        <div className="relative">
            <Slider {...settings}>
                {products.map((product) => (
                    <div key={product.id} className="px-3">
                        <div className="bg-white p-4">
                            <Link to='/shop'>
                            <img src={product.image} alt={product.title} className="w-full object-cover" />
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

export default NewIn;
