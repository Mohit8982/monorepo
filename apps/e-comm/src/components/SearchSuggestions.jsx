const SearchSuggestions = ({ suggestions, handleClick }) => {
  return (
    <div className="absolute top-[calc(100%+4px)] left-0 z-[1000] max-h-[300px] w-full overflow-y-auto rounded-md border border-gray-200 bg-white shadow-lg">
      {suggestions.map((item, index) => (
        <div
          key={index}
          className="cursor-pointer px-4 py-3 text-gray-800 hover:bg-gray-100"
          onClick={() => handleClick(item)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default SearchSuggestions;
