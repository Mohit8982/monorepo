import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <div className="cartContainer">
        <Link to={"/cart"}>
          🛒 Cart
          <span className="cartCount">{cartItems.length}</span>
        </Link>
      </div>
    </>
  );
};

export default Cart;
