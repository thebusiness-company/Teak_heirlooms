import { ChevronLeft, ChevronRight } from "lucide-react";
import PropTypes from 'prop-types';
import { useEffect,useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getTestimonials } from "../../services/testimonialService";
import LeftArrow from "../../assets/images/collections/Prev.png"; // Custom left arrow
import RightArrow from "../../assets/images/collections/Next.png"; // Custom right arrow
import { data } from "react-router-dom";


const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute left-0 z-1 top-1/2 transform -translate-y-1/2 p-2 text-white rounded-full transition-colors duration-200 cursor-pointer"
      onClick={onClick}
    >
      {/* <ChevronLeft size={24} />  */}
      <img src={LeftArrow} alt="prevArrow" className="w-6 h-6 md:w-8 md:h-8" />
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
      className="absolute right-0 z-1 top-1/2 transform -translate-y-1/2 p-2 text-white rounded-full transition-colors duration-200 cursor-pointer"
      onClick={onClick}
    >
      {/* <ChevronRight size={24} /> */}
      <img src={RightArrow} alt="nextArrow" className="w-6 h-6 md:w-8 md:h-8" />
    </button>
  );
};

CustomNextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default function TestimonialCarousel() {
      const [testimonials, setTestimonials] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(false);
      const [ expanded, setExpanded ] = useState(false);
  useEffect(() => {
    fetchTestimonials();
  }
  , []);
  const fetchTestimonials = async () => {
    try{
      const data = await getTestimonials();
      setTestimonials(data);
    }catch (error){
      setError(true);
    }finally {
      setLoading(false);
    }
  };


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // arrows: false,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  if (loading || error || testimonials.length === 0) {
    return null;
  }

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const truncateText = (text, wordLimit) => {
     const words = text.split(" ");
     if (words.length > wordLimit) {
       return words.slice(0, wordLimit).join(" ") + "...";
     }
     return text;
   };
   console.log("testimonials: ", testimonials);
   

  return (
    <div className="py-12 flex flex-col items-center text-center w-full bg-[#EDEAE5]">
      <h2 className="text-3xl lg:text-5xl text-[#3B493F] font-upright w-full max-w-[94%]">
        In Their Words, Our Legacy
      </h2>
      <p className="text-[#000000] mb-6">Happy Words of Our Happy Customers</p>
      <div className="w-full max-w-[94%] px-4 sm:px-6 md:px-8 relative">
        <Slider key={testimonials.length} {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-4 flex justify-center">
              <div className="bg-[#EDEAE5] p-6 flex flex-col md:flex-row items-center mx-auto max-w-md md:max-w-lg w-full">
                <img
                  src={`${testimonial.image}`}
                  loading="lazy"
                  alt="Testimonial"
                  className="w-full md:w-1/3 h-56 object-cover rounded mb-4 md:mb-0 md:mr-6"
                />

                <div className="w-full md:w-2/3 text-left">
                  <h3 className="font-semibold text-lg mb-2 text-[#000000]">
                    {testimonial.title}
                  </h3>
                  <p className="text-[#000000] text-sm">
                    {expanded[testimonial.id]
                      ? testimonial.text
                      : truncateText(testimonial.text, 40)}
                  </p>
                  <button
                    onClick={() => toggleExpand(testimonial.id)}
                    className="text-[#9C0300] mt-2 cursor-pointer"
                  >
                    {expanded[testimonial.id] ? "Show Less" : "Read More"}
                  </button>
                  <p className="font-medium text-[#000000] mt-12">
                    {testimonial.name}
                  </p>
                  <p className="text-[#A78262] text-lg">
                    {"★".repeat(testimonial.rating)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
