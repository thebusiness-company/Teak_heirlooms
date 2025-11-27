import { useQuery } from "@tanstack/react-query";
import { fetchLatestBanner } from "../../services/shopBannerService";
import M1 from "../../assets/images/shop/M1.png";
import M2 from "../../assets/images/shop/M2.png";
import { useNavigate } from "react-router-dom";

const MainBanner = () => {
  const navigate = useNavigate();
  const { data: banner, isLoading, error } = useQuery({
    queryKey: ["banner"],
    queryFn: fetchLatestBanner,
  });

   if (isLoading) {
     return (
       <div className="flex flex-row flex-nowrap items-center justify-between w-full bg-white mt-8 overflow-hidden animate-pulse">
         {/* Left skeleton image */}
         <div className="w-1/3 flex justify-center p-2">
           <div className="bg-gray-300 w-full md:max-w-[75%] lg:max-w-[60%] h-32 sm:h-40 md:h-52 lg:h-64 rounded" />
         </div>

         <div className="w-1/3 text-center py-4 space-y-4">
           <div className="h-6 md:h-10 lg:h-12 bg-gray-300 w-3/4 mx-auto rounded"></div>
           <div className="h-3 md:h-5 bg-gray-300 w-2/3 mx-auto rounded"></div>
           <div className="h-4 md:h-10 bg-gray-300 w-20 md:w-32 lg:w-40 mx-auto rounded-2xl mt-4"></div>
         </div>

         {/* Right skeleton image */}
         <div className="w-1/3 flex justify-center p-2">
           <div className="bg-gray-300 w-full md:max-w-[75%] lg:max-w-[60%] h-32 sm:h-40 md:h-52 lg:h-64 rounded" />
         </div>
       </div>
     );
   }
   
  if (error || !banner) return <p className="text-center text-gray-600">No banner available</p>;

  return (
    <div className="w-full mx-auto flex flex-row flex-nowrap items-center justify-center bg-white mt-8 overflow-hidden">
      {/* Left Image */}
      <div className="w-1/3 flex">
        <img
          src={banner.image_left || M1}
          // src={M2}
          alt="Wall Panel 1"
          className="w-full max-w-[90%] sm:max-w-[90%] md:max-w-[75%] lg:w-auto h-auto"
        />
      </div>

      {/* Center Text */}
      <div className="w-1/3 text-center py-4 px-4">
        <h2 className="text-lg sm:text-xl md:text-3xl lg:text-6xl text-[#3B493F] font-infant leading-tight">
          {banner.title}
        </h2>
        <p className="text-[#9C0300] text-xs sm:text-sm md:text-base mt-2">
          {banner.description} @RS.{banner.price_text}
        </p>
        <button
          className="text-xs md:text-base mt-3 bg-[#9C0300] text-white px-4 py-0.5 md:px-6 md:py-2 md:mt-20 rounded-2xl hover:bg-red-800 transition duration-300 leading-snug whitespace-nowrap cursor-pointer"
          onClick={() => navigate("/Category/wall-panels")}
        >
          Shop Now
        </button>
      </div>

      {/* Right Image */}
      <div className="w-1/3 flex justify-end">
        <img
          src={banner.image_right || M2}
          // src={M1}
          alt="Wall Panel 2"
          className="w-full max-w-[90%] sm:max-w-[90%] md:max-w-[75%] lg:w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default MainBanner;
