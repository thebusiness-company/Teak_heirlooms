import img from "../../assets/images/Bespoke/banner.png";
const BSBanner = () => {
return (
    <div
        className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] bg-cover bg-center flex items-center "
        style={{ backgroundImage: `url(${img})` }}
    >
        <div className="absolute inset-0 bg-opacity-20"></div>
        <div className="absolute z-10 max-w-4xl mx-auto px-6 text-center text-white right-10  top-10 mt-30 ">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-">BESPOKE</h1>
            <p className="mt-10 text-sm md:text-lg text-gray-600">
                GIVE YOUR IDEAL HOUSE A PERSONAL TOUCH.
            </p>
            <button className="mt-5 px-8 py-1 bg-[#9C0300] text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition">
                Shop Now
            </button>
        </div>
    </div>
);
};

export default BSBanner;
