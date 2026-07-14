import Cart from "./Cart";
import GlobalSearch from "./GlobalSearch";
import Logo from "./Logo";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutApp } from "../redux/loginSlice";
import { getSearchResult, updateSearchResults } from "../redux/searchSlice";

const Header = () => {
  const { isLogin } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const { searchResult, error, loading } = useSelector((state) => state.search);

  const handleSearch = (searchText) => {
    if (!searchText) {
      dispatch(updateSearchResults([]));
      return;
    }

    dispatch(getSearchResult(searchText));
  };

  const navigation = useNavigate();

  const handleLogin = () => {
    navigation("/");
  };

  const handleLogout = () => {
    dispatch(logoutApp());
  };

  return (
    <header
      className="
    h-20
    bg-gradient-to-r
    from-[#cdd9f2]
    to-[#b0e391]
    flex
    items-center
    px-10
    gap-10
    sticky
    top-0
    z-50
  "
    >
      <Logo />

      <div className="flex-1 flex justify-center">
        <GlobalSearch
          suggestions={searchResult}
          error={error}
          loading={loading}
          onSearch={handleSearch}
        />
      </div>

      <nav className="flex items-center gap-5">
        {isLogin ? (
          <button
            onClick={handleLogout}
            className="bg-white text-blue-600 px-5 py-2 rounded-lg shadow"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-white text-blue-600 px-5 py-2 rounded-lg shadow"
          >
            Login
          </button>
        )}

        {isLogin && <Cart />}
      </nav>
    </header>
  );
};

export default Header;
