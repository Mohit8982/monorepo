import { useState } from "react";
import { useDebounce } from "../hooks";
import SearchSuggestions from "./SearchSuggestions";

const GlobalSearch = ({
  placeholder = "Search...",
  suggestions = [],
  debounceTime = 500,
  minSearchLength = 3,
  onSearch,
  loading = false,
  error = "",
}) => {
  const [value, setValue] = useState("");

  const debouncedSearch = useDebounce((text) => {
    onSearch?.(text);
  }, debounceTime);

  const handleSearch = (text) => {
    setValue(text);

    if (text.length >= minSearchLength) {
      debouncedSearch(text);
    } else {
      onSearch?.("");
    }
  };

  return (
    <div className="relative  w-[500px] mx-auto my-5">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleSearch(e.target.value)}
        className="
          w-full
          px-4 py-3
          border border-gray-300
          rounded-md
          bg-white
          text-base
          outline-none
        "
      />

      {loading && <div>Loading...</div>}

      {error && <SearchSuggestions suggestions={[{ name: error }]} />}

      {!loading && !error && suggestions.length > 0 && (
        <SearchSuggestions suggestions={suggestions} />
      )}
    </div>
  );
};

export default GlobalSearch;
