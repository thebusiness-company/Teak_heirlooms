import SE from "../../assets/images/design/SE.png"; 
import { useNavigate } from "react-router-dom";
const SESection = () => {
  const navigate = useNavigate();
  const handleContactClick =()=>{
    navigate("/contact");
  }
  return (
    <section className=" relative flex flex-col md:flex-row items-center justify-center w-full  my-24 md:my-48"> 
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
        {/* <div className="w-1/2 flex flex-row justify-start items-center"> */}
        <h2 className="absolute top-2 md:top-6 right-4 md:right-10 sm:right-1 lg:right-52 text-base sm:text-xs md:text-3xl lg:text-4xl px-2 font-infant text-left font-semibold my-2 sm:mx-2 ">
          Begin The Journey To <br /> Your Dream <br /> Home Interiors
        </h2>
        <div className="flex justify-center mt-4">
          <button onClick={handleContactClick}
          className="absolute lg:top-28 right-6 sm:right-4 md:right-24 lg:right-72 mt-4 lg:mt-16 bg-[#9C0300] text-white hover:bg-red-700 transition p-1 md:px-4 md:py-1 lg:px-6 lg:py-1 rounded-full text-xs sm:text-xs md:text-base my-2 cursor-pointer">
            SPEAK TO OUR EXPERT
          </button>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default SESection;
