// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, removeFromCart } from "../redux/cartSlice";

const AddToCartButton = ({ productId, productPrice }) => {
  console.log(productId, productPrice);

  return (
    <div className="actionButtons">
      <button>Add To Cart</button>
    </div>
  );
  // const dispatch = useDispatch();
  // const { items } = useSelector((state) => state.cart);
  // const isInCart = items.some((item) => item.productId === productId);

  // const handleAddToCart = () => {
  //   dispatch(addToCart({ productId, productPrice }));
  // };

  // const handleRemoveFromCart = () => {
  //   dispatch(removeFromCart(productId));
  // };

  // return (
  //   <>
  //     <div className="actionButtons">
  //       {isInCart ? (
  //         <button onClick={handleRemoveFromCart}>Remove Item</button>
  //       ) : (
  //         <button onClick={handleAddToCart}>Add To Cart</button>
  //       )}
  //     </div>
  //   </>
  // );
};

export default AddToCartButton;
