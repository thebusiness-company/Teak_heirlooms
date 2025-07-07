
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../../assets/images/collections/Prev.png"; // Custom left arrow
import RightArrow from "../../assets/images/collections/Next.png"; // Custom right arrow
import Wardrobe from "../../assets/images/collections/Wardrobe.svg";
import Sofa from "../../assets/images/collections/sofa.svg";    
import bar from "../../assets/images/collections/bar.svg";    
import Paintings from "../../assets/images/collections/Paintings.svg";    
import tvunit from "../../assets/images/collections/tvunit.svg";    
import beds from "../../assets/images/collections/beds.svg";    
import cabinet from "../../assets/images/collections/cabinet.svg";    
import bookshelf from "../../assets/images/collections/bookshelf.svg";    
import poojaunit from "../../assets/images/collections/poojaunit.svg";    
import tables from "../../assets/images/collections/tables.svg";    
import wallpanels from "../../assets/images/collections/wallpanels.svg";    
import Dining from "../../assets/images/collections/Dining.svg";    

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
      { id: 1, image: Sofa, title: "Sofas", categoryChoice: "sofas" },
      { id: 2, image: beds, title: "Beds", categoryChoice: "beds" },
      { id: 3, image: tables, title: "Tables", categoryChoice: "tables" },
      { id: 4, image: bookshelf, title: "Book Shelf", categoryChoice: "book-shelf" },
      { id: 5, image: cabinet, title: "Cabinet", categoryChoice: "cabinet" },
      { id: 6, image: Dining, title: "Dining", categoryChoice: "dining" },
      { id: 7, image: bar, title: "Bar", categoryChoice: "bar" },
      { id: 8, image: poojaunit, title: "Pooja", categoryChoice: "pooja" },
      { id: 9, image: tvunit, title: "TV Units", categoryChoice: "tv-units" },
      { id: 10, image: Wardrobe, title: "Wardrobe", categoryChoice: "wardrobe" },
      { id: 11, image: wallpanels, title: "Wall Panels", categoryChoice: "wall-panels" },
      { id: 12, image: Paintings, title: "Paintings", categoryChoice: "paintings" },
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
      <h2 className="text-3xl lg:text-5xl text-[#3b493f] mb-12 mt-6 font-upright">Our Products</h2>

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
