import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import M1 from "../../assets/images/shop/M1.png";
import PrevArrow from "../../assets/images/Left.png"; // Custom left arrow
import NextArrow from "../../assets/images/Right.png"; // Custom right arrow

// Custom Arrow Components
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useState } from "react";

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
        className="absolute right-2 md:right-1 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-[#FFFFFF]"
      >
        <img src={NextArrow} alt="Next" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
      </button>
    );
  };

CustomNextArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
};

const ShopByFurniture = () => {

  const categorys = [
    { id: 1, image: M1, title: "Sofas", categoryChoice: "sofas" },
    { id: 2, image: M1, title: "Beds", categoryChoice: "Beds" },
    { id: 3, image: M1, title: "Tables", categoryChoice: "Tables" },
    { id: 4, image: M1, title: "Book Shelf", categoryChoice: "BookShelf" },
    { id: 5, image: M1, title: "Cabinet", categoryChoice: "Cabinet" },
    { id: 6, image: M1, title: "Dining", categoryChoice: "Dining" },
    { id: 7, image: M1, title: "Bar", categoryChoice: "Bar" },
    { id: 8, image: M1, title: "Pooja", categoryChoice: "Pooja" },
    { id: 9, image: M1, title: "TV Units", categoryChoice: "TV Units" },
    { id: 10, image: M1, title: "Wardrobe", categoryChoice: "Wardrobe" },
    { id: 11, image: M1, title: "Wall Panels", categoryChoice: "WallPanels" },
    { id: 12, image: M1, title: "Paintings", categoryChoice: "Paintings" },
  ];

  const settings = {
    lazyLoad: 'ondemand',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    touchMove: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2, arrows: false } },
      { breakpoint: 640, settings: { slidesToShow: 2, arrows: false } },
    ],
  };
  
  return (
    <div className="max-w-7xl mx-auto text-center py-10  relative">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#3b493f] mb-6">Shop by Furniture</h2>

      <div className="relative">
        <Slider {...settings}>
          {categorys.map((category) => (
            <div key={category.id} className="px-2">
              <div className="bg-white p-4 ">
                <Link to={`/Category/${category.categoryChoice}`}>
                <img src={category.image} alt={category.title} className="w-full" />
                <h3 className="text-lg font-medium mt-4">{category.title}</h3>
                <p className="text-red-600 font-semibold">{category.price}</p>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ShopByFurniture;
