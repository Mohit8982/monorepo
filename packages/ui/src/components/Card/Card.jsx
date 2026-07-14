const Card = ({ cardData, onClick, onAddToCart }) => {
  const {
    name,
    brand,
    price,
    image,
    stock,
    rating,
    reviews,
    description,
    specifications,
  } = cardData;

  return (
    <div className="flex rounded-lg border border-gray-200 bg-white p-4 transition-all hover:shadow-lg">
      {/* Product Image */}
      <div className="flex h-48 w-48 shrink-0 items-center justify-center rounded-lg bg-gray-50 p-3">
        <img
          src={image}
          alt={name}
          className="h-40 w-40 object-contain transition duration-300 hover:scale-105"
        />
      </div>
      {/* Product Details */}
      <div
        className="flex min-w-0 flex-1 flex-col gap-2 px-5"
        onClick={onClick}
      >
        <div>
          <h2 className="text-xl font-medium text-gray-900">{name}</h2>

          <p className="mt-1 text-sm text-gray-500">Brand: {brand}</p>

          <div className="flex items-center gap-3">
            <span className="rounded bg-green-600 px-2 py-1 text-xs font-semibold text-white">
              {rating} ★
            </span>

            <span className="text-sm text-gray-500">
              {reviews.toLocaleString()} Ratings
            </span>
          </div>

          <p className="mt-4 line-clamp-2 text-sm text-gray-600">
            {description}
          </p>
        </div>

        <div className="mt-2 space-y-1 text-sm text-gray-600">
          <p>• Color: {specifications?.color}</p>
          <p>• Model: {specifications?.model}</p>
          <p>• Warranty: {specifications?.warranty}</p>
        </div>
      </div>

      {/* Price Section */}
      <div className="flex w-64 shrink-0 flex-col justify-between pl-6">
        <div>
          <h3 className="text-3xl font-semibold text-gray-900">
            ₹{price.toLocaleString("en-IN")}
          </h3>

          <div className="mt-3 space-y-1 text-sm">
            <p className="text-green-600">✔ Free Delivery</p>
            <p className="text-green-600">✔ Cash on Delivery</p>

            <p className="pt-2 font-medium text-red-600">Only {stock} left</p>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart?.(cardData);
          }}
          className="
    mt-5
    w-full
    rounded-md
    bg-orange-500
    px-4
    py-3
    font-medium
    text-white
    shadow-sm
    transition-all
    hover:bg-orange-600
    hover:shadow-md
  "
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
