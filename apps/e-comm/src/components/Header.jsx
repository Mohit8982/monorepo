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
    <header className="header">
      <div className="mobileMenu">{/* <HamburgerMenu /> */}</div>
      <Logo />
      <GlobalSearch
        suggestions={searchResult}
        error={error}
        loading={loading}
        onSearch={handleSearch}
      />
      <nav className="navLinks">
        <div className="loginBtn">
          {isLogin ? (
            <h3 onClick={handleLogout}>Logout</h3>
          ) : (
            <h3 onClick={handleLogin}>Login</h3>
          )}
        </div>

        {isLogin && <Cart />}
      </nav>
    </header>
  );
};

export default Header;
