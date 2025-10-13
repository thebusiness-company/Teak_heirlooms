import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevArrow from "../../assets/images/Left.png"; // Custom left arrow
import NextArrow from "../../assets/images/Right.png"; // Custom right arrow
import PropTypes from 'prop-types';
import S1 from "../../assets/images/Bespoke/floral.png";
import S2 from "../../assets/images/Bespoke/sp.png";
import S3 from "../../assets/images/Bespoke/seaters.png";
import S4 from "../../assets/images/Bespoke/luxury.png";
import { useNavigate } from "react-router-dom";

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
        className="absolute left-0 -ml-2 md:-ml-4 md:left-1 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-[#FFFFFF]"
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
        className="absolute right-0 -mr-2 md:-mr-4 md:right-1 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-[#FFFFFF]"
      >
        <img src={NextArrow} alt="Next" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
      </button>
    );
  };

CustomNextArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
};


const BSservice = () => {
  const navigate = useNavigate();
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
      { breakpoint: 768, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="w-full bg-[#FFF1DF]">
      <div className="relative w-full mx-auto px-4 py-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#9C0300] text-center">
          TEAK HEIRLOOMS{" "}
          <span className="text-[#3B493F]">BESPOKE SERVICES</span>
        </h2>
        <h3 className="text-lg text-[#9C0300] mt-15 w-full max-w-[90%] mx-auto">
          INTRODUCING BESPOKE FABRIC SERVICE
        </h3>
        <p className="mt-2 w-full max-w-[90%] mx-auto">
          With these specific products, you can now personalize a Teak Heirlooms
          design and truly make your home unique by selecting your own fabric.
        </p>

        <div className=" mt-6 w-full max-w-[90%] mx-auto">
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="px-2">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-55  object-cover object-bottom "
                  />
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#3B493F] to-transparent p-4 text-white text-center font-semibold text-xl md:text-3xl font-infant">
                    {product.title}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => navigate("/contact")}
              className="mt-4 lg:mt-10 bg-[#9C0300] text-white hover:bg-red-700 transition-colors p-1 px-4 md:py-1 lg:px-6 lg:py-1 rounded-full text-xs sm:text-xs md:text-base my-2 cursor-pointer"
            >
              SPEAK TO OUR EXPERT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BSservice;
