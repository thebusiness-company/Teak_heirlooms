import SE from "../../assets/images/design/speaktoexpert.png";
import { useNavigate } from "react-router-dom";

const CampaignExpertSection = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/contact");
  };
  return (
    <>
      <div className="relative mb-10 md:mb-2 2xl:mb-20">
        {/* Text Section - Mobile View*/}
        <div className="lg:hidden pt-8 pb-4 px-5 md:px-7 ">
          <h2 className="text-[#9C0300] text-xl pb-5 font-semibold">
            Your Dream Interior Starts Here...
          </h2>
          <p className="text-[15px] text-[#3B493F]">
            You have dreamed about your house a million times and created a
            beautiful image in your mind. We are here to bring that vision into
            the real world. We create incredible interior designs with aligned
            customised furniture that fits perfectly in every space. Let us
            build your dream home together.
          </p>
        </div>
        {/* Text Section - Desktop View*/}
        <div className="hidden lg:block absolute top-10 lg:top-6 xl:top-10 2xl:top-15 right-15 pt-8 pb-2 px-5 z-6 w-1/3 lg:w-[42%]">
          <h2 className="text-[#9C0300] text-[26px] xl:text-3xl 2xl:text-4xl pb-5 2xl:pb-8 font-semibold">
            Your Dream Interior Starts Here...
          </h2>
          <p className="text-[15px] lg:text-lg 2xl:text-[26px] text-[#3B493F]">
            You have dreamed about your house a million times and created a
            beautiful image in your mind. We are here to bring that vision into
            the real world. We create incredible interior designs with aligned
            customised furniture that fits perfectly in every space. Let us
            build your dream home together.
          </p>
        </div>
        <section className="relative w-full mt-26 mb-10 2xl:mb-20 lg:mb-26 sm:mt-44 md:mt-50 lg:mt-84 2xl:mt-116">
          <div className="relative bg-[#2D3A2D] p-13 sm:p-16 md:p-28 xl:p-32 2xl:p-36 text-white flex flex-col justify-end items-end ">
            {/* Image Section */}
            <div className="absolute inset-x-0 -top-[60%] sm:-top-[120%] md:-top-[60%] lg:-top-[120%] xl:-top-[96%] 2xl:-top-[130%] w-1/2 z-6 ">
              <img
                src={SE}
                alt="Interior Design"
                className="h-[187px] sm:h-80 w-10/12 lg:w-[75%] xl:w-[80%] 2xl:w-[75%] md:w-96 max-h-full md:h-106 lg:h-144 xl:h-144 2xl:h-194 object-cover ml-4 md:ml-8 lg:ml-14 2xl:ml-18"
              />
            </div>
            <h2 className="absolute top-2 md:top-6 right-4 md:right-8 sm:right-1 lg:right-40 text-base sm:text-xs md:text-3xl lg:text-4xl xl:text-[42px] 2xl:text-5xl px-2 font-infant text-left font-semibold my-2 sm:mx-2 ">
              Begin The Journey To <br /> Your Dream <br /> Home Interiors
            </h2>
            {/* Speak to expert button - Desktop View */}
            <div className="hidden md:flex justify-center mt-4">
              <button
                onClick={handleContactClick}
                className="absolute top-38 lg:top-26 xl:top-30 2xl:top-34 right-6 sm:right-4 md:right-24 lg:right-52 mt-4 lg:mt-16 text-white p-1 md:px-6 md:py-2 lg:px-8 2xl:px-10  lg:py-2.5 2xl:py-3 rounded-full my-2 button-hover-gradient cursor-pointer"
              >
                <span className="button-hover-scale text-xs sm:text-xs md:text-base xl:text-lg 2xl:text-2xl tracking-wide">
                  Speak to our Expert
                </span>
              </button>
            </div>
          </div>
          {/* Speak to expert button - Mobile View */}
          <div className="absolute inset-x-0 flex md:hidden justify-center mt-10">
            <button
              onClick={handleContactClick}
              className=" mt-4 lg:mt-16 bg-[linear-gradient(to_bottom_right,#9C0300,#360100)] text-white hover:bg-red-700 transition-colors p-1 py-2.5 px-8 md:px-4 md:py-1 lg:px-6 lg:py-1 rounded-full my-4 mobile-infinite-animate cursor-pointer"
            >
              <span className="text-sm md:text-base tracking-wide mobile-infinite-text">
                Speak to our Expert
              </span>
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default CampaignExpertSection;
