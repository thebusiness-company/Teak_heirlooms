import img from '../assets/images/terms.png'
const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 lg:px-20 py-10">
      <h1 className="text-3xl lg:text-4xl font-bold mb-6">Terms and Conditions</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Section */}
        <div>
          <img
            src={img}
            alt="Chair and Wooden Panel"
            className="w-3/4 rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-[#9C0300]">Your Main Idea Goes Here</h2>
            <p className="text-gray-700 mt-2">
              In 2010, Teak Heirlooms pioneered omnichannel retail to launch Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque pretium neque, et accumsan enim gravida in. Praesent risus ante, malesuada nec tincidunt ut, blandit at libero.In 2010, Teak Heirlooms pioneered omnichannel retail to launch Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque pretium neque, et accumsan enim gravida in. Praesent risus ante, malesuada nec tincidunt ut, blandit at libero.
            </p>
          </div>

          <div>
            <p className="text-gray-700">
              In 2010, Teak Heirlooms pioneered omnichannel retail to launch Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque pretium neque, et accumsan enim gravida in. Praesent risus ante, malesuada nec tincidunt ut, blandit at libero.In 2010, Teak Heirlooms pioneered omnichannel retail to launch Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque pretium neque, et accumsan enim gravida in. Praesent risus ante, malesuada nec tincidunt ut, blandit at libero.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#9C0300]">Your Main Idea Goes Here</h2>
            <p className="text-gray-700 mt-2">
              In 2010, Teak Heirlooms pioneered omnichannel retail to launch Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque pretium neque, et accumsan enim gravida in. Praesent risus ante, malesuada nec tincidunt ut, blandit at libero.In 2010, Teak Heirlooms pioneered omnichannel retail to launch Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque pretium neque, et accumsan enim gravida in. Praesent risus ante, malesuada nec tincidunt ut, blandit at libero.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-10">
        <h2 className="text-xl font-bold text-[#9C0300]">YOUR MAIN IDEA GOES HERE</h2>
        <p className="text-gray-700 mt-4 max-w-4xl mx-auto">
          In 2010, Teak Heirlooms pioneered omnichannel retail to launch Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque pretium neque, et accumsan enim gravida in. Praesent risus ante, malesuada nec tincidunt ut, blandit at libero.In 2010, Teak Heirlooms pioneered omnichannel retail to launch Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque pretium neque, et accumsan enim gravida in. Praesent risus ante, malesuada nec tincidunt ut, blandit at libero.In 2010, Teak Heirlooms pioneered omnichannel retail to launch Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque pretium neque, et accumsan enim gravida in. Praesent risus ante, malesuada nec tincidunt ut, blandit at libero.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
