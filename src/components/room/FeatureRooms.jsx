import  { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bedroom1 from "../../assets/images/Rooms/R1.png";
import bedroom2 from "../../assets/images/Rooms/R2.png";
import bedroom3 from "../../assets/images/Rooms/R3.png";
import bedroom4 from "../../assets/images/Rooms/R4.png";
import bedroom5 from "../../assets/images/Rooms/R5.png";
import PrevArrowIcon from "../../assets/images/Left.png";
import NextArrowIcon from "../../assets/images/Right.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const bedroomData = [
  { id: 1, image: bedroom1, text: "An eclectic bedroom with space" },
  { id: 2, image: bedroom2, text: "An eclectic bedroom with space" },
  { id: 3, image: bedroom3, text: "An eclectic bedroom with space" },
  { id: 4, image: bedroom4, text: "An eclectic bedroom with space" },
  { id: 5, image: bedroom5, text: "An eclectic bedroom with space" },
];

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-15px] top-1/2 transform -translate-y-1/2 z-10 bg-white  shadow-md p-1"
  >
    <img src={PrevArrowIcon} alt="Previous" className="w-6 h-6 md:w-8 md:h-8" />
  </button>
);
CustomPrevArrow.propTypes = { onClick: PropTypes.func.isRequired };

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-15px] top-1/2 transform -translate-y-1/2 z-10 bg-white  shadow-md p-1"
  >
    <img src={NextArrowIcon} alt="Next" className="w-6 h-6 md:w-8 md:h-8" />
  </button>
);
CustomNextArrow.propTypes = { onClick: PropTypes.func.isRequired };

const FeaturedBedrooms = () => {
  const sliderRef = useRef();

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="px-4 md:px-16 py-8 relative max-w-8xl mx-auto">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 font-infant">Featured Bedrooms</h2>
      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
        {bedroomData.map((item) => (
          
          <div key={item.id} className="px-2">
            <Link to='/room' className="relative overflow-hidden text-center">
              <img
                src={item.image}
                alt="bedroom"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute bottom-4 bg-[#9C0300] bg-opacity-90 text-white flex justify-center items-center w-3/4 py-2 text-sm md:text-base font-medium left-1/2 transform -translate-x-1/2">
                {item.text}
              </div>
            </Link>

          </div>
        ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedBedrooms;
