import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex justify-end w-full pr-15"> 
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-[280px] md:max-w-[350px] lg:max-w-[450px] shadow-sm">
        <input
          type="text"
          placeholder="Search for your product"
          className="bg-transparent outline-none w-full text-sm md:text-base text-gray-700 placeholder-gray-500"
        />
        <Search className="h-5 w-5 text-red-600" />
      </div>
    </div>
  );
};

export default SearchBar;
