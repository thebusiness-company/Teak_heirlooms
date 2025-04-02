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
        <div className="absolute inset-0 bg-opacity-30 text-white text-4xl px-10 py-10">Teak Heirlooms</div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-lg md:text-4xl font-light">Unbox<br /> your Happiness</h1>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-10 px-6 md:px-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">ABOUT US</h2>
        <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
          In 2010, Teak Heirlooms pioneered omnichannel retail to launch Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quisque pellentesque pretium neque, et accumsan enim gravida in.
        </p>
        <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto mt-2">
          Praesent risus ante, malesuada nec tincidunt ut, blandit at libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="bg-[#F5E8D9] py-10 px-6 md:px-20">
        <h2 className="text-2xl font-semibold text-center mb-6">OUR STORY</h2>
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
