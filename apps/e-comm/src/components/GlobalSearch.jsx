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
    <div className="searchContainer">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleSearch(e.target.value)}
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
