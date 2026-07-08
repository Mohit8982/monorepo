import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <div className="productLogo">
        <Link to={`/products`}>ShopSphere</Link>
      </div>
    </>
  );
};

export default Logo;
