import SE from "../../assets/images/design/SE.png"; 
import { useNavigate } from "react-router-dom";
const SESection = () => {
  const navigate = useNavigate();
  const handleContactClick =()=>{
    navigate("/contact");
  }
  return (
    <section className=" relative flex flex-col md:flex-row items-center justify-center w-full max-w-7xl my-24 md:my-48"> 
      {/* Image Section */}
      <div className=" w-1/2 md:w-1/2 absolute inset-x-0 z-6 ">
        <img
          src={SE}
          alt="Interior Design"
          className=" w-10/12 md:w-96 max-h-full md:h-96 object-cover md:ml-8"
        />
      </div>

      {/* Text Section */}
      
      <div className="absolute inset-x-0 bg-[#2D3A2D] p-16 md:p-32 text-white flex flex-col justify-end items-end ">
        
        <h2 className="absolute right-2 md:right-10 sm:right-1 text-sm sm:text-xs md:text-xl px-2  font-serif text-left font-semibold my-2 sm:mx-2">
          Begin The Journey To <br /> Your Dream <br /> Home Interiors
        </h2>
        <div className="flex justify-center md:justify-center mt-4">
          <button onClick={handleContactClick}
          className="absolute right-2 sm:right-1 md:right-24 lg:right-16 bg-[#9C0300] text-white hover:bg-red-700 transition p-2 md:p-2 lg:px-6 lg:py-3 rounded-full text-sm sm:text-xs md:text-base my-2">
            SPEAK TO OUR EXPERT
          </button>
        </div>
      </div>
    </section>
  );
};

export default SESection;
