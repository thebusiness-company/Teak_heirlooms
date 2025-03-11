import { useQuery } from "@tanstack/react-query";
import { fetchLatestBanner } from "../../services/shopBannerService";
import M1 from "../../assets/images/shop/M1.png";
import M2 from "../../assets/images/shop/M2.png";

const MainBanner = () => {
  const { data: banner, isLoading, error } = useQuery({
    queryKey: ["banner"],
    queryFn: fetchLatestBanner,
  });

  if (isLoading) return <p className="text-center text-gray-600">Loading banner...</p>;
  if (error || !banner) return <p className="text-center text-gray-600">No banner available</p>;

  return (
    <div className="flex flex-row flex-nowrap items-center justify-center w-full bg-white mt-8 overflow-hidden">
      {/* Left Image */}
      <div className="w-1/3 flex justify-center p-2">
        <img
          src={banner.image_left || M1}
          alt="Wall Panel 1"
          className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:w-auto h-auto"
        />
      </div>

      {/* Center Text */}
      <div className="w-1/3 text-center py-4">
        <h2 className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-semibold text-[#3B493F]">
          {banner.title}
        </h2>
        <p className="text-[#9C0300] text-xs sm:text-sm md:text-base mt-2">
          {banner.description} @RS.{banner.price_text}
        </p>
        <button className="mt-3 bg-[#9C0300] text-white px-4 py-2 sm:px-6 sm:py-2 rounded-md hover:bg-red-800 transition duration-300">
          Shop Now
        </button>
      </div>

      {/* Right Image */}
      <div className="w-1/3 flex justify-center p-2">
        <img
          src={banner.image_right || M2}
          alt="Wall Panel 2"
          className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default MainBanner;
