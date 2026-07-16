import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <Link
    to={`/products/${product.id}`}
    state={product}
    className="block rounded-lg border p-4 hover:shadow-md"
  >
    {/* Product Image */}
    <div className="overflow-hidden rounded-lg">
      <div className="h-72 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-300
            hover:scale-105
          "
        />
      </div>
    </div>

    {/* Content */}
    <div className="mt-4 flex flex-col flex-1">
      <h3
        className="
          text-lg
          font-medium
          text-slate-800
          line-clamp-2
          min-h-[56px]
        "
      >
        {product.title}
      </h3>

      <p className="mt-1 text-sm text-slate-500">Brand: {product.brand}</p>

      {/* Ratings */}
      <div className="flex items-center gap-2 mt-3">
        <span
          className="
            bg-green-600
            text-white
            text-xs
            px-2
            py-1
            rounded
            font-medium
          "
        >
          {product.rating} ★
        </span>

        <span className="text-sm text-slate-500">
          ({product.ratingCount || 500})
        </span>
      </div>

      {/* Price */}
      <div className="flex items-center gap-2 mt-4 flex-wrap">
        <span className="text-3xl font-semibold text-slate-900">
          ₹{product.price?.toLocaleString()}
        </span>

        <span className="text-sm line-through text-slate-400">
          ₹{(product.price * 1.25).toLocaleString()}
        </span>

        <span className="text-sm text-green-600 font-medium">20% off</span>
      </div>

      <p className="mt-3 text-green-600 text-sm font-medium">Free Delivery</p>
    </div>
  </Link>
);

export default ProductCard;
