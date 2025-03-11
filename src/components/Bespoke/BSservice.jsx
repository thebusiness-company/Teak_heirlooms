import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevArrow from "../../assets/images/Left.png"; // Custom left arrow
import NextArrow from "../../assets/images/Right.png"; // Custom right arrow
import PropTypes from 'prop-types';
import S1 from "../../assets/images/Bespoke/S1.png";
import S2 from "../../assets/images/Bespoke/S2.png";
import S3 from "../../assets/images/Bespoke/S3.png";
import S4 from "../../assets/images/Bespoke/S4.png";

const products = [
  { id: 1, image: S1 , title: "Floral" },
  { id: 2, image: S2, title: "Seamless Pattern" },
  { id: 3, image: S3, title: "Seaters" },
  { id: 4, image: S4, title: "Luxury" }
];
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
        className="absolute right-1 md:right-1 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-[#FFFFFF]"
      >
        <img src={NextArrow} alt="Next" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
      </button>
    );
  };

CustomNextArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
};


const BSservice = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />, 
    nextArrow: <CustomNextArrow />, 
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2, arrows: false } },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#9C0300] text-center">TEAK HEIRLOOMS <span className="text-gray-700">BESPOKE SERVICES</span></h2>
      <h3 className="text-lg text-[#9C0300] mt-15">INTRODUCING BESPOKE FABRIC SERVICE</h3>
      <p className="text-gray-600 mt-2">With these specific products, you can now personalize a Teak Heirlooms design and truly make your home unique by selecting your own fabric.</p>
      
      <div className="relative mt-6">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-2">
              <div className="relative">
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover " />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 text-white text-center font-semibold">{product.title}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BSservice;
