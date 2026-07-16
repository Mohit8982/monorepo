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
    <header className="sticky top-0 z-50 bg-[#2874f0] h-14 shadow-md">
      <div className="max-w-[1248px] mx-auto h-full flex items-center gap-8 px-4">
        {/* Logo */}
        <Logo />

        {/* Search */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-[560px]">
            <GlobalSearch
              suggestions={searchResult}
              error={error}
              loading={loading}
              onSearch={handleSearch}
            />
          </div>
        </div>

        {/* Right Navigation */}
        <nav className="flex items-center gap-10 text-white text-[16px] font-medium">
          {isLogin ? (
            <button
              onClick={handleLogout}
              className="
            bg-white
            text-[#2874f0]
            px-10
            py-[5px]
            font-semibold
            shadow-sm
            rounded-sm
          "
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="
            bg-white
            text-[#2874f0]
            px-10
            py-[5px]
            font-semibold
            shadow-sm
            rounded-sm
          "
            >
              Login
            </button>
          )}

          <button className="whitespace-nowrap hover:text-gray-200 transition">
            Become a Seller
          </button>

          <button className="flex items-center gap-1 hover:text-gray-200 transition">
            More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isLogin && (
            <div className="flex items-center gap-2 cursor-pointer hover:text-gray-200">
              <Cart />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
