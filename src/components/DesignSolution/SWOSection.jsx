import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";

import LeftArrow from "../../assets/images/Left.png";  // Update path if needed
import RightArrow from "../../assets/images/Right.png";
import img1 from "../../assets/images/design/S1.png";
import img2 from "../../assets/images/design/S2.png";
import img3 from "../../assets/images/design/S3.png";

// Custom Arrow Components
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      aria-label="Previous Slide"
      className="absolute left-3 md:left-1 top-[186px] transform -translate-y-1/2 z-10 cursor-pointer bg-[#FFFFFF]"
    >
      <img src={LeftArrow} alt="Previous" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
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
      className="absolute right-3 md:right-1 top-[186px] transform -translate-y-1/2 z-10 cursor-pointer bg-[#FFFFFF]"
    >
      <img src={RightArrow} alt="Next" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
    </button>
  );
};

CustomPrevArrow.propTypes = { onClick: PropTypes.func };
CustomNextArrow.propTypes = { onClick: PropTypes.func };

const SWOSection = () => {
  const services = [
    { id: 1, image: img1, title: "Inhouse Interior Design Expert", desc: "Lorem ipsum dolor sit amet..." },
    { id: 2, image: img2, title: "Customized Interior Solutions", desc: "Lorem ipsum dolor sit amet..." },
    { id: 3, image: img3, title: "End to End Project Management", desc: "Lorem ipsum dolor sit amet..." },
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
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full max-w-[90%] mx-auto text-center md:py-10 ">
      <h2 className="text-3xl md:text-4xl font-bold text-[#3b493f] font-infant">
        Services We Offer
      </h2>
      <p className="text-[#3b493f] mt-2 mx-4">
        Design. Craft. Deliver. Repeat.
      </p>
      <p className="text-[#3b493f] mt-2 mx-4">
        From custom-built beds to statement shelving, every project begins with
        your vision. We take it from there—adding design intelligence,
        craftsmanship, and precision at every step until it arrives at your
        door, ready to live in.
      </p>

      <div className="relative mt-8">
        <Slider {...settings}>
          {services.map((service) => (
            <div key={service.id} className="px-4">
              <div className="bg-white p-4 text-left">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto mb-4"
                />
                {/* <h3 className="text-lg font-semibold text-[#3b493f]">{service.title}</h3>
                <p className="text-[#3b493f]">{service.desc}</p> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SWOSection;
