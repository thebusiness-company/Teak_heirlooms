import { Link } from "react-router-dom";
import C1 from "../../assets/images/c1.png";
import C2 from "../../assets/images/c2.png";
import C3 from "../../assets/images/c3.png";

const categories = [
  {
    title: "BEDS",
    subtitle: "THE MODERN LIFE",
    description: "Bed sets start from",
    price: "Rs. 49,999",
    image: C1,
    name:"Beds",
  },
  {
    title: "TRANSFORMING SPACES",
    subtitle: "FOR MODERN LIFE",
    description: "Single Chair Sofa starts from",
    price: "Rs. 8,999",
    image: C2,
    name:"Sofas",
  },
  {
    title: "DINNING",
    subtitle: "THE ART OF DINNING",
    description: "Dining Table sets start from",
    price: "Rs. 49,999",
    image: C3,
    name:"Dinning",
  },
];

const HomeCategory = () => {
  return (
    <div className="bg-white p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-4 lg:gap-8">
        {categories.map((category, index) => (
          <Link 
          key={index}
          to={`/category/${category.name.toLowerCase()}`}
          className="relative w-full h-[400px] overflow-hidden group cursor-pointer">
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
            />
            <div className="absolute inset-0 opacity-100 bg-gradient-to-t from-white/20 via-transparent to-black/50 z-10"></div>
            <div className="absolute inset-0 flex flex-col justify-start items-center text-white text-center p-4 lg:mt-10 z-20">
              <h3 className="text-lg md:text-xl white-text-shadow">{category.title}</h3>
              <p className="text-sm md:text-base white-text-shadow">{category.subtitle}</p>
              <p className="mt-2 text-sm md:text-base white-text-shadow">{category.description}</p>
              <span className="text-[#9C0300] font-semibold text-lg md:text-xl">
                {category.price}
              </span>
              <span className="absolute bottom-6 left-6 lg:left-14">
                {category.name}
              </span>
            </div>
            
          
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;
