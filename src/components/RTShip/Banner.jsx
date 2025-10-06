import image from "../../assets/images/RTShip/rtship-banner.jpg";
export default function Banner() {
    return (
      <div
        className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }} // Update the path to your image
      >
        <div className="absolute inset-0 bg-opacity-30"></div>{" "}
        {/* Optional dark overlay for readability */}
        <h1 className="absolute top-[35%] left-1/2 -translate-x-1/2 text-center md:left-auto md:translate-x-0 md:top-[35%] md:right-[5%] text-lg sm:text-xl md:text-3xl lg:text-4xl font-serif text-[#3B493F] px-4 leading-relaxed md:leading-normal">
          CREATED WITH ELEGANCE <br /> IN MIND
        </h1>
      </div>
    );
  }
  