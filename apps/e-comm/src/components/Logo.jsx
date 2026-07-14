import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <div className="text-3xl font-bold text-white whitespace-nowrap">
        <Link to={`/products`}>ShopSphere</Link>
      </div>
    </>
  );
};

export default Logo;
