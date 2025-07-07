import a1 from '../assets/images/aboutus/a1.png';
import a2 from '../assets/images/aboutus/a2.png';
import a3 from '../assets/images/aboutus/a3.png';
import a4 from '../assets/images/aboutus/a4.png';
const AboutUs = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px] flex items-center px-20 justify-end bg-cover bg-center" 
        style={{ backgroundImage: `url(${a1})` }}>
        <div className="absolute inset-0 bg-opacity-30 text-white text-4xl px-10 py-10 font-alata">TEAK HEIRLOOMS</div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-light font-infant lg:mt-36">Unbox<br /> your Happiness</h1>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-10 px-6 md:px-20 text-center">
        <h2 className="text-3xl lg:text-5xl mb-4 text-[#3B493F]">ABOUT US</h2>
        <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
          At Teak Heirlooms, every creation begins with a story. Ours began generations ago with a single teak chair, gifted and passed down through our family. That one piece inspired a philosophy: furniture should outlive trends—and sometimes, even lifetimes.
        </p>
        <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto mt-2">
          We build with teak because it honors both form and function. We design with heart because we know your home deserves nothing less. And we obsess over detail because premium isn't a label—it’s how we work.
        </p>
        <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto mt-2">
          With roots in tradition and eyes on the future, we don’t just make furniture. We craft heirlooms.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="bg-[#F5E8D9] py-10 px-6 md:px-20">
        <h2 className="text-3xl lg:text-5xl text-center text-[#3B493F] mb-6">OUR STORY</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <img src={a2} alt="Story 1" className="w-full h-56 object-cover " />
          <img src={a3} alt="Story 2" className="w-full h-56 object-cover " />
          <img src={a4} alt="Story 3" className="w-full h-56 object-cover " />
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
            In 2010, Teak Heirlooms pioneered omnichannel retail to launch Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto mt-2">
            Quisque pellentesque pretium neque, et accumsan enim gravida in. Praesent risus ante, malesuada nec tincidunt ut, blandit at libero.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
