import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";

import LeftArrow from "../../assets/images/Left.png";  // Update path if needed
import RightArrow from "../../assets/images/Right.png";
import img1 from "../../assets/images/design/D1.png";
import img2 from "../../assets/images/design/D2.png";
import img3 from "../../assets/images/design/D3.png";

// Custom Arrow Components
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      aria-label="Previous Slide"
      className="absolute left-1 md:left-1 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-[#FFFFFF]"
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
      className="absolute right-2 md:right-1 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-[#FFFFFF]"
    >
      <img src={RightArrow} alt="Next" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
    </button>
  );
};

CustomPrevArrow.propTypes = { onClick: PropTypes.func };
CustomNextArrow.propTypes = { onClick: PropTypes.func };

const DBASection = () => {
  const items = [
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
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto text-center py-10">
      <h2 className="text-3xl font-semibold text-[#3b493f]">The Design & Build Advantage</h2>
      <p className="text-gray-600 mt-2">
        All aspects of your home are catered to by us, including furniture, modular solutions, 
        room planning, interior design, project management, and home décor.
      </p>

      <div className="relative mt-8">
        <Slider {...settings}>
          {items.map((item) => (
            <div key={item.id} className="px-4">
              <div className="bg-white p-4 text-left">
                <img src={item.image} alt={item.title} className="w-full h-auto mb-4" />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DBASection;
