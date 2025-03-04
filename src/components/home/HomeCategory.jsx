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
  },
  {
    title: "TRANSFORMING SPACES",
    subtitle: "FOR MODERN LIFE",
    description: "Single Chair Sofa starts from",
    price: "Rs. 8,999",
    image: C2,
  },
  {
    title: "DINNING",
    subtitle: "THE ART OF DINNING",
    description: "Dining Table sets start from",
    price: "Rs. 49,999",
    image: C3,
  },
];

const HomeCategory = () => {
  return (
    <div className="bg-white p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative w-full h-[400px] overflow-hidden"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0  bg-opacity-30 flex flex-col justify-center items-center text-white text-center p-4">
              <h3 className="text-lg md:text-xl font-bold">{category.title}</h3>
              <p className="text-sm md:text-base">{category.subtitle}</p>
              <p className="mt-2 text-sm md:text-base">{category.description}</p>
              <span className="text-[#9C0300] font-semibold text-lg md:text-xl">
                {category.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;
