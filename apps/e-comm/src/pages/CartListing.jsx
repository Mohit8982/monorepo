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
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-5 lg:flex-row">
        {/* Left Section */}
        <div className="flex-[3]">
          <h2 className="mb-4 rounded-lg bg-white p-5 text-2xl font-semibold">
            Shopping Cart ({totalItem} Items)
          </h2>

          {result.map((list) => (
            <div
              key={list.id}
              className="
                mb-4 flex flex-col gap-5 rounded-lg bg-white
                p-5 shadow-sm
                md:flex-row md:items-center
              "
            >
              <img
                src={list.image}
                alt={list.name}
                className="
                  h-[140px] w-full rounded-md
                  bg-gray-50 object-contain
                  md:w-[140px]
                "
              />

              <div className="flex-1">
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {list.name}
                </h3>

                <p className="mb-4 leading-6 text-gray-500">
                  {list.description}
                </p>

                <p className="text-2xl font-bold text-gray-900">
                  ₹{list.price}
                </p>

                {/* Quantity Controls */}

                {/* 
                <div className="mt-5 flex items-center gap-4">
                  <button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-lg font-semibold">
                    -
                  </button>

                  <span className="text-lg font-semibold">1</span>

                  <button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-lg font-semibold">
                    +
                  </button>
                </div>
                */}
              </div>

              <button
                className="
                  rounded-md border border-blue-600
                  px-5 py-2.5 font-semibold text-blue-600
                  transition-all duration-300
                  hover:bg-blue-600 hover:text-white
                "
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div
          className="
            sticky top-5 h-fit flex-1 rounded-lg
            bg-white p-6 shadow-sm
          "
        >
          <h2 className="mb-5 text-lg font-semibold uppercase text-gray-500">
            Price Details
          </h2>

          <div className="my-4 flex justify-between">
            <span>Price ({totalItem} Items)</span>
            <span>₹{totalCartPrice}</span>
          </div>

          <div className="my-4 flex justify-between">
            <span>Discount</span>
            <span>- ₹0</span>
          </div>

          <div className="my-4 flex justify-between">
            <span>Delivery Charges</span>
            <span className="text-green-600">Free</span>
          </div>

          <hr className="my-5 border-gray-200" />

          <div className="flex justify-between text-xl font-bold text-gray-900">
            <span>Total Amount</span>
            <span>₹{totalCartPrice}</span>
          </div>

          <button
            className="
              mt-6 w-full rounded-md bg-orange-500
              py-4 text-base font-bold text-white
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-orange-600
              hover:shadow-lg
            "
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartListing;
