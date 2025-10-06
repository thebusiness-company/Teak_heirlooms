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
      className="absolute left-[12px] md:left-1 top-[184px] transform -translate-y-1/2 z-10 cursor-pointer bg-[#FFFFFF]"
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
      className="absolute right-[12px] md:right-1 top-[184px] transform -translate-y-1/2 z-10 cursor-pointer bg-[#FFFFFF]"
    >
      <img src={RightArrow} alt="Next" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
    </button>
  );
};

CustomPrevArrow.propTypes = { onClick: PropTypes.func };
CustomNextArrow.propTypes = { onClick: PropTypes.func };

const DBASection = () => {
  const items = [
    { id: 1, image: img1, title: "Personal Design Expert", desc: "From your very first call to final delivery, a dedicated design consultant helps bring your dream to life - making the process seamless, exciting, and deeply personal." },
    { id: 2, image: img2, title: "Complete Customisation", desc: "Every single element - from the texture of the fabric to the silhouette of the piece - is yours to choose. Nothing is pre-fixed. Everything is tailored." },
    { id: 3, image: img3, title: "Seamless Execution", desc: "Once your design is locked in, we take care of the rest. Our team handles the build, transport, and installation - so all you have to do is enjoy the results." },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, 
      } },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto text-center py-10">
      <h2 className="mx-4 text-3xl md:text-4xl font-bold text-[#3b493f] font-infant tracking-wide">
        The Design & Build Advantage
      </h2>
      <p className="text-gray-600 mt-2 mx-4">
        Where your vision meets masterful craftsmanship to create timeless,
        bespoke pieces that define luxury living
      </p>

      {/* mobile view slider format  */}
      <div className="block md:hidden relative mt-8">
        <Slider {...settings}>
          {items.map((item) => (
            <div key={item.id} className="px-4">
              <div className="bg-white p-4 text-left">
                <img
                  src={item.image}
                  alt={item.title}
                  className=" w-full h-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-[#3B493F]">
                  {item.title}
                </h3>
                <p className=" text-[#3B493F]">{item.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* desktop view grid format  */}
      <div className="hidden md:grid grid-cols-3 mt-8">
          {items.map((item) => (
            <div key={item.id} className="px-2 lg:px-4">
              <div className="bg-white p-4 text-left">
                <img
                  src={item.image}
                  alt={item.title}
                  className=" w-full h-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-[#3B493F]">
                  {item.title}
                </h3>
                <p className=" text-[#3B493F]">{item.desc}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DBASection;
