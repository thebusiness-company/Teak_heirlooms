import Img from '../../assets/images/design/DesignBanner.png';
import logo from '../../assets/images/logo.png';

const DesignBanner = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
      {/* Background Image */}
      <img src={Img} alt="Banner" className="w-full h-full object-cover" />

      {/* Consultation Button */}
      <button className="absolute bottom-10 left-5 md:left-10 bg-[#9C0300] text-white px-4 py-2 md:px-6 rounded-full font-semibold shadow-md hover:bg-red-700 text-sm md:text-base">
        BOOK A CONSULTATION
      </button>

      {/* Text Box */}
      <div className="absolute top-1/3 right-10 md:right-20 lg:right-28 border border-black bg-[rgba(255,241,223,0.8)] bg-opacity-90 p-4 md:p-8 shadow-lg w-[150px] md:w-[200px] lg:w-[290px]">
        {/* Logo */}
        <img src={logo} alt="Teak Heirlooms"  />

        {/* Heading */}
        <h3 className="text-[#3B493F] font-semibold text-xl md:text-3xl mt-4 md:mt-6 text-center font-infant">
          DESIGN AND BUILD WITH US
        </h3>

        {/* Description */}
        <p className="text-[#3B493F] text-sm md:text-base mt-2 text-center">
          Design Solutions & Interior Works
        </p>
      </div>
    </div>
  );
};

export default DesignBanner;
