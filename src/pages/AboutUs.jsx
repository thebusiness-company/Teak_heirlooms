import a1 from '../assets/images/aboutus/a1.png';
import a2 from '../assets/images/aboutus/ourstory-1.png';
import a3 from "../assets/images/aboutus/ourstory-2.png";
import a4 from "../assets/images/aboutus/ourstory-3.png";
const AboutUs = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-[400px] md:h-[500px] flex items-center px-20 justify-end bg-cover bg-center overflow-x-hidden"
        style={{ backgroundImage: `url(${a1})` }}
      >
        <div className="absolute inset-0 bg-opacity-30 text-white text-2xl md:text-4xl px-10 py-10 font-alata">
          TEAK HEIRLOOMS
        </div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-light font-infant lg:mt-36">
            Unbox
            <br /> your Happiness
          </h1>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-10 px-6 md:px-14 mt-4 mb-4 ">
        <h2 className="text-3xl lg:text-4xl mb-4 md:mb-8 lg:mb-10 text-[#3B493F] text-center">
          ABOUT US
        </h2>
        <p className="text-sm md:text-base w-full lg:max-w-[85%] mx-auto">
          At Teak Heirlooms, every creation begins with a story. Ours began
          generations ago with a single teak chair, gifted and passed down
          through our family. That one piece inspired a philosophy: furniture
          should outlive trends—and sometimes, even lifetimes.
        </p>
        <p className="text-sm md:text-base w-full lg:max-w-[85%] mx-auto mt-2 md:mt-4 lg:mt-6">
          We build with teak because it honors both form and function. We design
          with heart because we know your home deserves nothing less. And we
          obsess over detail because premium isn't a label—it’s how we work.
        </p>
        <p className="text-sm md:text-base w-full lg:max-w-[85%] mx-auto mt-2">
          With roots in tradition and eyes on the future, we don’t just make
          furniture. We craft heirlooms.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="bg-[#F5E8D9] py-10 px-6 md:px-14">
        <h2 className="text-3xl lg:text-4xl text-center text-[#3B493F] mb-8 lg:mb-16">
          OUR STORY
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-14 w-full lg:max-w-[90%] mx-auto mt-6 mb-10">
          <img src={a2} alt="Story 1" className="w-full h-56 object-cover " />
          <img src={a3} alt="Story 2" className="w-full h-56 object-cover " />
          <img src={a4} alt="Story 3" className="w-full h-56 object-cover " />
        </div>

        <div className=" mt-6">
          <p className="text-sm md:text-base w-full lg:max-w-[90%] mx-auto">
            Every corner of your home tells a story, and with Teak Heirlooms, it
            becomes timeless. Crafted from premium teak, our furniture blends
            modern elegance with traditional charm. Whether it’s a spacious hall
            or a cozy nook, each piece is designed to reflect your personality
            and elevate your lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
