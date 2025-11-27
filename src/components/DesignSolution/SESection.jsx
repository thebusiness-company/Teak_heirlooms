import SE from "../../assets/images/design/speaktoexpert.png";
import { useNavigate } from "react-router-dom";
const SESection = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/contact");
  };
  return (
    <section className="relative w-full mt-22 mb-10 md:mb-16 lg:mb-22 xl:mb-25 2xl:mb-30 sm:mt-44 md:mt-50 lg:mt-64 2xl:mt-116">
      <div className="relative bg-[#2D3A2D] p-15 sm:p-16 md:p-28 xl:p-32 2xl:p-36 text-white flex flex-col justify-end items-end ">
        {/* Image Section */}
        <div className="absolute inset-x-0 -top-[48%] sm:-top-[120%] md:-top-[60%] lg:-top-[100%] xl:-top-[90%] 2xl:-top-[130%] w-1/2 z-6 ">
          <img
            src={SE}
            alt="Interior Design"
            className="h-[221px] sm:h-80 w-10/12 md:w-[80%] lg:w-[75%] 2xl:w-[75%]  max-h-full md:h-106 lg:h-134 xl:h-144 2xl:h-194 object-cover ml-4 md:ml-8 lg:ml-14 2xl:ml-18"
          />
        </div>
        <h2 className="absolute top-2 md:top-6 right-4 md:right-8 sm:right-1 lg:right-40 text-base sm:text-xs md:text-3xl lg:text-4xl xl:text-[42px] 2xl:text-5xl px-2 font-infant text-left font-semibold my-2 sm:mx-2 ">
          Begin The Journey To <br /> Your Dream <br /> Home Interiors
        </h2>
        {/* Speak to expert button - Desktop View */}
        <div className="flex justify-center mt-4">
          <button
            onClick={handleContactClick}
            className="absolute top-21 md:top-38 lg:top-26 xl:top-30 2xl:top-34 right-6 sm:right-4 md:right-24 lg:right-52 mt-4 lg:mt-16 bg-[#9C0300] text-white hover:bg-red-700 transition-colors p-1 py-1 px-4  md:px-6 md:py-2 lg:px-8 2xl:px-10 lg:py-2 2xl:py-2.5 rounded-full text-xs sm:text-xs md:text-base xl:text-lg 2xl:text-2xl my-2 cursor-pointer"
          >
            Speak to our Expert
          </button>
        </div>
      </div>
    </section>
  );
};

export default SESection;
