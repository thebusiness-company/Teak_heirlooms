import DH from "../../assets/images/design/DH.png";

export default function DHSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 max-w-6xl mx-auto">
      {/* Left Section */}
      <div className="lg:w-1/2 text-left">
        <h2 className="text-3xl lg:text-5xl font-infant text-[#3B493F] md:ml-12 mb-15 text-center leading-tight">
          5 Steps to Your <br className="hidden md:block" /> Dream Home
        </h2>

        <ul className="space-y-6">
          {["Book an appointment", "Meet Your Design Expert", "Customise Every Detail", "Track Your Piece in Progress", "Delivery & White-Glove Installation"].map((text, index) => (
            <li key={index} className="flex items-center justify-between border-b border-gray-300 pb-2">
              <span className="text-lg font-medium text-[#3B493F]">{text}</span>
              <span className="text-red-500 text-xl font-bold mr-16">→</span>
            </li>
          ))}
        </ul>

        <button className="mt-10 md:ml-15 sm:mx-10 md:mx-0 px-6 py-3 bg-[#9C0300] text-white font-semibold rounded-full hover:bg-red-700 transition shadow-md ">
          BOOK A CONSULTATION
        </button>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 mt-8 lg:ml-12 lg:mt-0">
        <img src={DH} alt="Dream Home" className="w-full shadow-lg object-cover" />
      </div>
    </div>
  );
}
