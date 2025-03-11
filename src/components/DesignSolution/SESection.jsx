import SE from "../../assets/images/design/SE.png"; 
const SESection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto">
      {/* Image Section */}
      {/* <div className="w-full md:w-1/2">
        <img
          src={SE}
          alt="Interior Design"
          className="w-full h-auto object-cover"
        />
      </div> */}

      {/* Text Section */}
      <img
          src={SE}
          alt="Interior Design"
          className="w-sm ml-30 h-auto object-cover z-10"
        />
      <div className="w-full -ml-110  bg-[#2D3A2D] p-6 md:p-12 text-white flex flex-col justify-end">
        <h2 className="text-xl md:text-2xl font-serif text-center md:text-center font-semibold">
          Begin The Journey To <br /> Your Dream <br /> Home Interiors
        </h2>
        <div className="flex justify-center md:justify-center mt-4">
          <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm md:text-base">
            SPEAK TO OUR EXPERT
          </button>
        </div>
      </div>
    </section>
  );
};

export default SESection;
