import React from 'react';
import banner from '../../assets/images/campaign/camp-banner.png';

const Banner = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] w-full h-[381px] sm:h-[420px] md:h-[500px] lg:h-[560px] xl:h-[620px] 2xl:h-[762px]">
        <div className="relative w-full h-full">
          <img
            src={banner}
            alt="campaign-banner"
            className="w-full h-full object-cover object-[75%] md:object-center"
          />
          <div className="absolute top-[76%] md:top-[70%] left-0 transform py-1.5 px-4 sm:px-5 md:py-3 md:px-6  lg:px-8  lg:p-4 xl:p-6 2xl:p-8 gradient-animate bg-[linear-gradient(to_top_left,#DAC6C5_0%,#C88987_1%,#9C0300_20%,#360100_90%,#DAC6C5_120%)]">
            <h1 className="text-white text-base sm:text-lg md:text-[22px] lg:text-[27px] xl:text-4xl 2xl:text-5xl font-infant font-bold md:tracking-wide">
              Stop searching everywhere…
              <br /> Both interiors and furniture are in one place!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
