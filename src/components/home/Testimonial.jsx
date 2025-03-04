import { ChevronLeft, ChevronRight } from "lucide-react";
import PropTypes from 'prop-types';
import { useEffect,useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getTestimonials } from "../../services/testimonialService";


const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute left-0 z-1 top-1/2 transform -translate-y-1/2 p-2 bg-[#9C0300] hover:bg-amber-50 text-white rounded-full transition-colors duration-200"
      onClick={onClick}
    >
      <ChevronLeft size={24} />
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
      className="absolute right-0 z-1 top-1/2 transform -translate-y-1/2 p-2 bg-[#9C0300] hover:bg-amber-50 text-white rounded-full transition-colors duration-200"
      onClick={onClick}
    >
      <ChevronRight size={24} />
    </button>
  );
};

CustomNextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default function TestimonialCarousel() {
      const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetchTestimonials();
  }
  , []);
  const fetchTestimonials = async () => {
    const data = await getTestimonials();
    setTestimonials(data);
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
          arrows: false,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="py-12 flex flex-col items-center text-center w-full bg-[#EDEAE5]">
      <h2 className="text-3xl font-semibold text-[#3B493F]">Their Words Our Pride</h2>
      <p className="text-[#000000] mb-6">Happy Words of Our Happy Customers</p>
      <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8 relative">
        {testimonials.length>0 ?(
        <Slider key={testimonials.length} {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-4">
              <div className="bg-[#EDEAE5] p-6 flex flex-col md:flex-row items-center">
                <img
                  src={`${testimonial.image}`}
                  loading="lazy"
                  alt="Testimonial"
                  className="w-full md:w-1/3 h-56 object-cover rounded mb-4 md:mb-0 md:mr-4"
                />

                <div className="w-full md:w-2/3 text-left">
                  <h3 className="font-semibold text-lg mb-2 text-[#000000]">{testimonial.title}</h3>
                  <p className="text-[#000000]">{testimonial.text}</p>
                  <p className="font-medium text-[#000000] mt-12">{testimonial.name}</p>
                  <p className="text-[#A78262] text-lg">{"★".repeat(testimonial.rating)}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        ):(
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
