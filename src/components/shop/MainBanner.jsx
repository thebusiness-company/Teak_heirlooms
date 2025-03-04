import M1 from '../../assets/images/shop/M1.png';
import M2 from '../../assets/images/shop/M2.png';

const MainBanner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white py-10 px-5">
      {/* Left Image */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-end p-3">
        <img
          src={M1}
          alt="Wall Panel 1"
          className="w-64 lg:w-full md:w-72 h-auto "
        />
      </div>

      {/* Center Text */}
      <div className="w-full md:w-1/3 text-center py-5">
        <h2 className="text-2xl lg:text-6xl md:text-3xl font-semibold text-gray-800">
          Make Space for New Wall
        </h2>
        <p className="text-red-600 text-sm md:text-base mt-2">
          Wall panel Starting @RS.3600
        </p>
        <button className="mt-4 bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-800 transition duration-300">
          Shop Now
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full  md:w-1/3 flex justify-center md:justify-start p-3">
        <img
          src={M2}
          alt="Wall Panel 2"
          className="w-64 lg:w-full md:w-72 h-auto "
        />
      </div>
    </div>
  );
};

export default MainBanner;


// const MainBanner = ({data}) => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center bg-white py-10 px-5 border rounded-lg shadow-lg mt-5">
//         {/* Left Image */}
//         <div className="w-full md:w-1/3 flex justify-center md:justify-end p-3">
//           {data.leftImage && <img src={data.leftImage} alt="Left Wall Panel" className="w-full max-w-xs md:max-w-sm h-auto" />}
//         </div>
  
//         {/* Center Text */}
//         <div className="w-full md:w-1/3 text-center py-5">
//           <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-800">{data.title}</h2>
//           <p className="text-red-600 text-sm md:text-base mt-2">{data.subtitle}</p>
//           <button className="mt-4 bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-800 transition duration-300">
//             {data.buttonText}
//           </button>
//         </div>
  
//         {/* Right Image */}
//         <div className="w-full md:w-1/3 flex justify-center md:justify-start p-3">
//           {data.rightImage && <img src={data.rightImage} alt="Right Wall Panel" className="w-full max-w-xs md:max-w-sm h-auto" />}
//         </div>
//       </div>
//   )
// }

// export default MainBanner
