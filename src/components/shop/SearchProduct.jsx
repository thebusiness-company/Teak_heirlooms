import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:8000/api/products/";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.trim() === "") {
        setSuggestions([]);
        return;
      }
      try {
        const res = await axios.get(`${API_URL}?search=${query}`);
        setSuggestions(res.data.slice(0, 5)); // show top 5
      } catch (error) {
        console.error("Search failed:", error);
      }
    };

    const delayDebounce = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleSelect = (slug) => {
    setQuery("");
    setSuggestions([]);
    navigate(`/product/${slug}`);
  };

  return (
    <div className="w-full flex justify-end px-4">
  <div className="relative w-full max-w-[280px] md:max-w-[350px] lg:max-w-[450px] mt-4">
    <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-sm">
      <input
        type="text"
        placeholder="Search for your product"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 150)}
        className="bg-transparent outline-none w-full text-sm md:text-base text-gray-700 placeholder-gray-500"
      />
      <Search className="h-5 w-5 text-red-600" />
    </div>

    {isFocused && suggestions.length > 0 && (
      <div className="absolute z-10 bg-white border rounded-lg shadow-md mt-2 w-full max-h-60 overflow-y-auto">
        {suggestions.map((item) => (
          <div
            key={item.slug}
            onClick={() => handleSelect(item.slug)}
            className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
          >
            {item.name}
          </div>
        ))}
      </div>
    )}
  </div>
</div>

  );
};

export default SearchBar;
