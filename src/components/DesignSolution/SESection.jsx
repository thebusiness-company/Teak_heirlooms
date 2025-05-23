import SE from "../../assets/images/design/SE.png"; 
const SESection = () => {
  return (
    <section className=" relative flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto my-40"> 
      {/* Image Section */}
      <div className="absolute w-full ml-20 ">
        <img
          src={SE}
          alt="Interior Design"
          className="w-100 h-140 object-cover"
        />
      </div>

      {/* Text Section */}
      
      <div className="w-full   bg-[#2D3A2D] p-6 md:p-12 text-white flex flex-col justify-end">
        <h2 className="text-xl md:text-2xl font-serif text-center md:text-center font-semibold">
          Begin The Journey To <br /> Your Dream <br /> Home Interiors
        </h2>
        <div className="flex justify-center md:justify-center mt-4">
          <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm md:text-base">
            SPEAK TO OUR EXPERT
          </button>
        </div>
      </div>
    </section>
  );
};

export default SESection;
