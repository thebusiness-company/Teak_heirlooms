
const StoreLocator = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-center text-xl md:text-2xl font-bold mb-4">
        STORE LOCATOR
      </h2>

      {/* Top Red Bar */}
      <div className="grid grid-cols-2 md:grid-cols-12 gap-2 mb-2">
        <div className="md:col-span-5 bg-[#9C0300] text-white text-center p-2 text-sm md:text-base font-semibold">
          Find our store near you
        </div>
        <div className="md:col-span-7 bg-[#9C0300] text-white text-center p-2 text-sm md:text-base font-semibold">
          Teak Heirlooms Chennai, ECR
        </div>
      </div>

      {/* Store Info and Map */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4  p-4">
        {/* Store Info */}
        <div className="md:col-span-5 p-6 border shadow-sm">
          <h3 className="text-lg md:text-xl font-bold bg-[#FFF1DF] px-2 py-1 inline text-[#9C0300] mb-2">
            Teak Heirlooms Chennai, ECR 
          </h3>
          <p className="text-sm md:text-lg text-gray-600 mb-2">
            Are you looking for the best Furniture Store near Neelankarai in Chennai?
            Shop at <span className="text-[#9C0300]">THL</span> for customized furniture.
          </p>

          <div className="mb-2">
            <span className="text-lg md:text-xl font-bold bg-[#FFF1DF] px-2 py-1 text-[#9C0300]">Address</span>
            <p className="text-sm md:text-lg text-gray-700 mt-1">
              Sri Kapaleeswarxx Naxx, Neelanxxx, Chennai, Tamil Nadu
            </p>
          </div>

          <div className="mb-2">
            <span className="text-lg md:text-xl font-bold bg-[#FFF1DF] px-2 py-1 text-[#9C0300]">Call</span>
            <p className="text-sm md:text-lg text-gray-700 mt-1">90xxx 25xxx</p>
          </div>

          <div className="mb-2">
            <span className="text-lg md:text-xl font-bold bg-[#FFF1DF] px-2 py-1 text-[#9C0300]">E-mail</span>
            <p className="text-sm md:text-lg text-blue-500 mt-1">
              <a href="mailto:Teakheirlooms@gmail.com">Teakheirlooms@gmail.com</a>
            </p>
          </div>

          <p className="text-sm md:text-lg text-gray-600 mt-2">Opens Everyday @ 9:30 to 21:00</p>
        </div>

        {/* Map Section */}
        <div className="md:col-span-7 border shadow-sm">
          <iframe
            className="w-full h-64 md:h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1705847292114!2d80.24662607484001!3d12.896750287411802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526666b333b8af%3A0x6261e351393d7f85!2sTeak%20Heirlooms!5e0!3m2!1sen!2sin!4v1742211729643!5m2!1sen!2sin"
            title="Teak Heirlooms Location"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Bottom Red Bar */}
      <div className="bg-[#9C0300] h-5 mt-2"></div>
    </div>
  );
};

export default StoreLocator;