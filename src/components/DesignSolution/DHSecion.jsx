import DH from "../../assets/images/design/DH.png";

export default function DHSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 max-w-6xl mx-auto">
      {/* Left Section */}
      <div className="lg:w-1/2 text-left">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#3B493F] ml-12 mb-15 leading-tight">
          5 Steps to Your <br className="hidden md:block" /> Dream Home
        </h2>

        <ul className="space-y-6">
          {["Book an appointment", "Meet our Designer", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"].map((text, index) => (
            <li key={index} className="flex items-center justify-between border-b border-gray-300 pb-2">
              <span className="text-lg font-medium text-[#3B493F]">{text}</span>
              <span className="text-red-500 text-xl font-bold mr-20">→</span>
            </li>
          ))}
        </ul>

        <button className="mt-10 ml-15 px-6 py-3 bg-[#9C0300] text-white font-semibold rounded-full hover:bg-red-800 transition shadow-md ">
          BOOK A CONSULTATION
        </button>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <img src={DH} alt="Dream Home" className="w-full  shadow-lg object-cover" />
      </div>
    </div>
  );
}
