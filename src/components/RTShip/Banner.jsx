import image from "../../assets/images/RTShip/banner.jpg";
export default function Banner() {
    return (
      <div
        className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }} // Update the path to your image
      >
        <div className="absolute inset-0 bg-opacity-30"></div> {/* Optional dark overlay for readability */}
        <h1 className="absolute text-center text-lg sm:text-xl md:text-3xl lg:text-4xl font-serif text-[#3B493F] px-4"
            style={{ top: '20%', left: '25%' }}>
          CREATED WITH ELEGANCE <br className="hidden sm:block" /> IN MIND
        </h1>
      </div>
    );
  }
  