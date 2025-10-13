import Sustainability1 from "../assets/images/sustainability-1.png";
import Sustainability2 from "../assets/images/sustainability-2.png";

const SustainabilitySection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full md:max-w-[90%] mx-auto bg-[#FFF] gap-8 mt-10 md:mt-14 lg:mt-28 mb-10 md:mb-14 lg:mb-28">
      {/* First Section - Overlay on Laptop, Normal on Mobile */}
      <section className="relative flex flex-col md:flex-row-reverse items-center justify-between w-full lg:max-w-[94%] mx-auto md:mt-20 bg-[#FFF1DFD9] p-6 md:p-8">
        {/* Text Container */}
        <div className="relative p-4 w-full md:w-1/2 z-10 text-center md:text-left">
          <div className="lg:w-[80%] lg:flex flex-col lg:mr-auto">
            <h2 className="text-3xl lg:text-4xl text-[#9C0300]">
              Honest to the planet
            </h2>
            <p className="text-lg md:text-2xl font-semibold mt-2">
              ‘Sustainability’ isn’t just a trend. It’s timeless, just like TEAK
            </p>
            <p className="mt-4 text-sm md:text-base leading-relaxed">
              Every teak masterpiece begins with a promise, and there’s a story
              behind it. We work to protect the forests that inspire us. By
              using only ethically sourced or reclaimed teak, we reduce our
              environmental impact and encourage conscious living through
              durable design.
            </p>
            <p className="mt-4 text-sm md:text-base leading-relaxed">
              Our process values long-lasting quality over mass production
              because we strongly believe that true design should never cost the
              planet.
            </p>
          </div>
        </div>

        {/* Image - Overlay on Laptop, Normal on Mobile */}
        <div className="w-full md:w-[40%] flex justify-center md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 opacity-90">
          <img
            src={Sustainability1}
            alt="Sustainability"
            className="w-3/5 md:w-5/6 max-w-[300px] md:max-w-none object-cover max-h-[600px]"
          />
        </div>
      </section>

      {/* Second Section - Overlay on Laptop, Normal on Mobile */}
      <section className="relative flex flex-col md:flex-row items-center justify-between w-full lg:max-w-[94%] mx-auto bg-[#FFF1DFD9] p-6 md:p-8 md:mt-40 md:mb-10 ">
        {/* Text Container */}
        <div className="relative p-4 w-full md:w-1/2 z-10 text-center md:text-right ">
          <div className="lg:w-[80%] lg:flex flex-col lg:items-end lg:ml-auto">
            <h2 className="text-3xl lg:text-4xl text-[#9C0300]">
              Carry our traditions without harm!
            </h2>
            <p className="text-lg md:text-2xl font-semibold mt-2">
              Every teak piece tells the story of craftsmanship and culture.
            </p>
            <p className="mt-4 text-sm md:text-base leading-relaxed">
              Our journey starts with the dream of capturing our culture from
              the roots in the form of furniture. Behind each and every artistic
              curve, there are masterminds
            </p>
            <p className="mt-4 text-sm md:text-base leading-relaxed">
              We know the value of our mother nature, so we responsibly source
              teak without compromising on protecting our green forests. True
              heritage always carries honor through responsible creations.
            </p>
          </div>
        </div>

        {/* Image - Overlay on Laptop, Normal on Mobile */}
        <div className="w-full md:w-[40%] flex justify-center md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 opacity-90">
          <img
            src={Sustainability2}
            alt="Sustainability"
            className="w-3/5 md:w-5/6 max-w-[300px] md:max-w-none object-cover max-h-[600px]"
          />
        </div>
      </section>
    </div>
  );
};

export default SustainabilitySection;
