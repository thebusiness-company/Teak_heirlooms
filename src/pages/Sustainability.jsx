import SustainabilityImg from "../assets/images/terms.png"; // Replace with actual image path

const SustainabilitySection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-[#FFF] gap-8">
      
      {/* First Section - Overlay on Laptop, Normal on Mobile */}
      <section className="relative flex flex-col md:flex-row-reverse items-center justify-between w-full max-w-7xl mx-auto md:mt-20 bg-[#FFF1DFD9] p-6 md:p-8">
        
        {/* Text Container */}
        <div className="relative p-4 w-full md:w-1/2 z-10 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-5xl text-[#9C0300]">Sustainability</h2>
          <p className="text-lg md:text-2xl lg:text-3xl font-semibold mt-2">This is a two-line quote <br /> for a website landing page.</p>
          <p className="text-gray-700 mt-4 text-sm md:text-base leading-relaxed">
            In 2010, Teak Heirlooms pioneered omnichannel retail to launch Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque pellentesque pretium neque, et accumsan enim gravida in.In 2010, Teak Heirlooms pioneered omnichannel retail to launch Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque pellentesque pretium neque, et accumsan enim gravida in.In 2010, Teak Heirlooms pioneered omnichannel retail to launch Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque pellentesque pretium neque, et accumsan enim gravida in.
          </p>
        </div>

        {/* Image - Overlay on Laptop, Normal on Mobile */}
        <div className="w-full md:w-1/3 flex justify-center md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 opacity-90">
          <img src={SustainabilityImg} alt="Sustainability" className="w-3/5 md:w-5/6 max-w-[300px] md:max-w-none object-cover " />
        </div>
      </section>

      {/* Second Section - Overlay on Laptop, Normal on Mobile */}
      <section className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto bg-[#FFF1DFD9] p-6 md:p-8 md:mt-40 md:mb-10 ">
        
        {/* Text Container */}
        <div className="relative p-4 w-full md:w-1/2 z-10 text-center md:text-left">
          <h2 className="text-3xl lg:text-5xl text-[#9C0300]">Sustainability</h2>
          <p className="text-lg md:text-2xl lg:text-3xl font-semibold mt-2">This is a two-line quote <br /> for a website landing page.</p>
          <p className="text-gray-700 mt-4 text-sm md:text-base leading-relaxed">
            In 2010, Teak Heirlooms pioneered omnichannel retail to launch Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque pellentesque pretium neque, et accumsan enim gravida in.In 2010, Teak Heirlooms pioneered omnichannel retail to launch Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque pellentesque pretium neque, et accumsan enim gravida in.In 2010, Teak Heirlooms pioneered omnichannel retail to launch Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque pellentesque pretium neque, et accumsan enim gravida in.
          </p>
        </div>

        {/* Image - Overlay on Laptop, Normal on Mobile */}
        <div className="w-full md:w-1/3 flex justify-center md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 opacity-90">
          <img src={SustainabilityImg} alt="Sustainability" className="w-3/5 md:w-5/6 max-w-[300px] md:max-w-none object-cover" />
        </div>
      </section>

      {/* Final Text Section */}
      <p className="text-lg text-black text-center max-w-4xl px-6 py-10 leading-relaxed">
        In 2010, Teak Heirlooms pioneered omnichannel retail to launch Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque pellentesque pretium neque, et accumsan enim gravida in. Praesent risus ante, malesuada nec tincidunt ut, blandit at libero.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque pretium neque, et accumsan enim gravida in.
      </p>

    </div>
  );
};

export default SustainabilitySection;
