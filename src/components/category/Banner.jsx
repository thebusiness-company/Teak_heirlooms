import img from '../../assets/images/categorybanner.jpg'
const Banner = () => {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[500px] lg:h-[85vh]">
      {/* Background Image */}
      <img
        src={img} // Replace with the correct path
        alt="Banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-end pr-12">
        <div className="bg-[#38493f]/60 text-white p-4 sm:p-6 md:p-8 ">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-center font-infant">
            The Perfect Pieces for Every Room!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
