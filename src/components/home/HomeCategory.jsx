import { useQuery } from "@tanstack/react-query";
import { fetchHomeCategories } from "../../Hooks/homeCategoryApi";
import HomeCategorySkeleton from "../ui/HomeCategorySkeleton";
import { API_URL } from "../../api";

const HomeCategory = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["homeCategories"],
    queryFn: fetchHomeCategories,
  });

  const categories = Array.isArray(data) ? data : [];

  if (isLoading) return <HomeCategorySkeleton />;

  if (isError) {
    return (
      <div className="w-full text-center py-20 text-red-500">
        Failed to load categories
      </div>
    );
  }

  if (categories.length === 0) {
    return (
      <div className="w-full text-center py-20 text-gray-500">
        No categories available
      </div>
    );
  }

  return (
    <div className="bg-white p-6 w-full max-w-[94%] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-4 lg:gap-8">
        {categories.map((category) => (
          <a
            key={category.id}
            href={category.url}       
            target="_self"             
            rel="noopener noreferrer"
            className="relative w-full h-[400px] lg:h-[500px] overflow-hidden group cursor-pointer"
          >
            <img
              src={`${API_URL}${category.image}` || "/placeholder.jpg"}
              alt={category.title || "Category"}
              loading="lazy"
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
              decoding='async'
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
          </a>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;
