import { useState } from "react";
import { Search } from "lucide-react";
import PropTypes from "prop-types";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) onSearch(query);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="flex justify-end w-full pr-15">
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-[280px] md:max-w-[350px] lg:max-w-[450px] shadow-sm">
        <input
          type="text"
          placeholder="Search for your product"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="bg-transparent outline-none w-full text-sm md:text-base text-gray-700 placeholder-gray-500"
        />
        <Search className="h-5 w-5 text-red-600 cursor-pointer" onClick={handleSearch} />
      </div>
    </div>
  );
};
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
