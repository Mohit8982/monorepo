import { useSelector } from "react-redux";

const CartListing = () => {
  const { products } = useSelector((state) => state.products);
  const { items } = useSelector((state) => state.cart);
  const ids = new Set(items.map((item) => item.productId));
  const result = products.filter((item) => ids.has(item.id));
  const totalCartPrice = result.reduce(
    (total, item) => total + Number(item.price),
    0,
  );
  const totalItem = result.length;

  return (
    <div className="cartPage">
      <div className="cartContainer">
        {/* Left Section */}
        <div className="cartItemsSection">
          <h2 className="cartTitle">Shopping Cart ({totalItem} Items)</h2>

          {result.map((list) => (
            <div className="cartItem">
              <img src={list.image} alt="product" className="cartItemImage" />
              <div className="cartItemDetails">
                <h3 className="cartItemName">{list.name}</h3>
                <p className="cartItemDescription">{list.description}</p>
                <p className="cartItemPrice">₹{list.price}</p>
                {/* <div className="cartQuantityControls">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div> */}
              </div>

              <button className="removeBtn">Remove</button>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="priceSummary">
          <h2>Price Details</h2>

          <div className="summaryRow">
            <span>Price ({totalItem} Items)</span>
            <span>{totalCartPrice}</span>
          </div>

          <div className="summaryRow">
            <span>Discount</span>
            <span>- ₹0</span>
          </div>

          <div className="summaryRow">
            <span>Delivery Charges</span>
            <span>Free</span>
          </div>

          <hr />

          <div className="summaryRow totalAmount">
            <span>Total Amount</span>
            <span>₹{totalCartPrice}</span>
          </div>

          <button className="checkoutBtn">Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartListing;
