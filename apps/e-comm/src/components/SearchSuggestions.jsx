

const SearchSuggestions = ({ suggestions, handleClick }) => {
  return (
    <div className="suggestionsContainer">
      {suggestions.map((item, index) => (
        <div
          key={index}
          className="suggestionItem"
          onClick={() => handleClick(item)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
  // const dispatch = useDispatch();
  // const { searchResult } = useSelector((state) => state.search);

  // const getProducts = () => {
  //   dispatch(updateProduct(searchResult));
  //   dispatch(updateSearchResults([]));
  // };

  // return (
  //   <div className="suggestionsContainer">
  //     {suggestions.map((item, index) =>
  //       item.id ? (
  //         <div
  //           key={index}
  //           className="suggestionItem"
  //           onClick={() => getProducts(item)}
  //         >
  //           {item.name}
  //         </div>
  //       ) : (
  //         <div key={index} className="suggestionItem">
  //           {item.name}
  //         </div>
  //       ),
  //     )}
  //   </div>
  // );
};

export default SearchSuggestions;
