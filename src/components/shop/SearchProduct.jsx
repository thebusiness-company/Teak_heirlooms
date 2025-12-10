import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// Import your central BASEURL if available, otherwise keep the hardcoded one for testing
import { BASEURL } from "../../api"; 

const API_URL =  `${BASEURL}/api/products/`

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
        
        // FIX: Handle both paginated and non-paginated responses
        const data = res.data.results ? res.data.results : res.data;
        
        setSuggestions(data.slice(0, 20)); 
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
            // FIX: Increase blur delay slightly to ensure click registers
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            className="bg-transparent outline-none w-full text-sm md:text-base text-gray-700 placeholder-gray-500"
          />
          <Search className="h-5 w-5 text-red-600" />
        </div>

        {isFocused && suggestions.length > 0 && (
          <div className="absolute z-50 bg-white border rounded-lg shadow-md mt-2 w-full max-h-60 overflow-y-auto">
            {suggestions.map((item) => (
              <div
                key={item.slug}
                // Use onMouseDown instead of onClick to prevent Blur from firing first
                onMouseDown={() => handleSelect(item.slug)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm text-black"
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