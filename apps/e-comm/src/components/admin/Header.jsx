import "./Header.css";

const Header = () => {
  return (
    <header className="dashboard-header">
      <div className="header-actions">
        <button className="header-btn">Logout</button>
        <div className="header-user">
          <img
            className="header-avatar"
            src="/profile-placeholder.png"
            alt="User Profile"
          />
          <span>Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
