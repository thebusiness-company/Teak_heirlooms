
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../../assets/images/collections/Prev.png"; // Custom left arrow
import RightArrow from "../../assets/images/collections/Next.png"; // Custom right arrow
import Bedroom from "../../assets/images/collections/Bedroom.png";
import DiningSet from "../../assets/images/collections/Dinning.png";
import Living from "../../assets/images/collections/Seat.png";
import Office from "../../assets/images/collections/office.png";
import Sleeper from "../../assets/images/collections/Sleeper.png";
import Sofa from "../../assets/images/collections/sofa.png";    

// Custom Arrow Components
import PropTypes from 'prop-types';

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-[-30px] md:left-[-40px] top-1/2 transform -translate-y-1/2 hidden md:block"
    >
      <img src={LeftArrow} alt="Previous" className="w-6 h-6 md:w-8 md:h-8" />
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
      className="absolute right-[-30px] md:right-[-40px] top-1/2 transform -translate-y-1/2 hidden md:block"
    >
      <img src={RightArrow} alt="Next" className="w-6 h-6 md:w-8 md:h-8" />
    </button>
  );
};

CustomNextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const HomeCollection = () => {
  
    const categorys = [
      { id: 1, image: Bedroom, title: "Sofas", categoryChoice: "sofas" },
      { id: 2, image: Bedroom, title: "Beds", categoryChoice: "Beds" },
      { id: 3, image: Bedroom, title: "Tables", categoryChoice: "Tables" },
      { id: 4, image: Bedroom, title: "Book Shelf", categoryChoice: "BookShelf" },
      { id: 5, image: Bedroom, title: "Cabinet", categoryChoice: "Cabinet" },
      { id: 6, image: Bedroom, title: "Dining", categoryChoice: "Dining" },
      { id: 7, image: Bedroom, title: "Bar", categoryChoice: "Bar" },
      { id: 8, image: Bedroom, title: "Pooja", categoryChoice: "Pooja" },
      { id: 9, image: Bedroom, title: "TV Units", categoryChoice: "TV Units" },
      { id: 10, image: Bedroom, title: "Wardrobe", categoryChoice: "Wardrobe" },
      { id: 11, image: Bedroom, title: "Wall Panels", categoryChoice: "WallPanels" },
      { id: 12, image: Bedroom, title: "Paintings", categoryChoice: "Paintings" },
    ];
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768, // Smaller Tablets
        settings: { slidesToShow: 3, arrows: false },
      },
      {
        breakpoint: 640, // Mobile
        settings: { slidesToShow: 2, arrows: false },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto text-center py-10 px-4 relative">
      <h2 className="text-3xl lg:text-5xl md:text-4xl font-semibold text-[#3b493f] mb-12 mt-6">Our Products</h2>

      <div className="relative">
        <Slider {...settings}>
          {categorys.map((item) => (
            <div key={item.id} className="px-2 mb-10">
              <Link to={`/Category/${item.categoryChoice}`} className="flex flex-col items-center">
                <img src={item.image} alt={item.title} className="w-14 h-14 md:w-20 md:h-20" />
                <p className="text-sm md:text-base text-[#9c0300] font-medium mt-2">{item.title}</p>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeCollection;
