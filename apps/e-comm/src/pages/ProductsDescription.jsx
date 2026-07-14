import { useLocation } from "react-router-dom";

const ProductsDescription = () => {
  const location = useLocation();
  const stateData = location.state;

  return (
    <div
      className="
        mx-auto grid max-w-[1400px] gap-5 p-5
        lg:grid-cols-[minmax(250px,350px)_1fr_minmax(220px,280px)]
      "
    >
      {/* Product Image Section */}
      <div
        className="
          sticky top-[90px] h-fit rounded-lg bg-white
          p-5 shadow-sm
        "
      >
        <img
          src={stateData.image}
          alt={stateData.name}
          className="h-[350px] w-full object-contain"
        />

        <div className="mt-5 flex gap-3">
          <button
            className="
              flex-1 rounded-md bg-gradient-to-r
              from-[#a4b3d2] to-[#71d3ac]
              px-4 py-3 font-semibold text-white
              transition hover:opacity-90
            "
          >
            Add To Cart
          </button>

          <button
            className="
              flex-1 rounded-md bg-gradient-to-r
              from-[#a4b3d2] to-[#71d3ac]
              px-4 py-3 font-semibold text-white
              transition hover:opacity-90
            "
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="rounded-lg bg-white p-5 shadow-sm">
        <h1 className="mb-3 text-3xl font-semibold text-gray-900">
          {stateData.name}
        </h1>

        <div className="mb-5 flex items-center gap-3">
          <span
            className="
              rounded bg-green-600
              px-3 py-1 text-sm font-semibold text-white
            "
          >
            4.8 ★
          </span>

          <span className="text-gray-500">1250 Ratings & Reviews</span>
        </div>

        <p className="mb-6 leading-7 text-gray-600">{stateData.description}</p>

        <h3 className="mb-3 text-lg font-semibold">Highlights</h3>

        <ul className="mb-8 list-disc space-y-2 pl-5 text-gray-600">
          <li>128 GB Storage</li>
          <li>8 GB RAM</li>
          <li>A18 Bionic Processor</li>
          <li>48 MP + 12 MP Camera</li>
          <li>6.1 Inch OLED Display</li>
          <li>3561 mAh Battery</li>
        </ul>

        <h3 className="mb-4 text-lg font-semibold">Specifications</h3>

        <table className="w-full border-collapse">
          <tbody>
            {[
              ["Brand", "Apple"],
              ["Display", "6.1 inch OLED"],
              ["Processor", "A18 Bionic"],
              ["RAM", "8 GB"],
              ["Storage", "128 GB"],
              ["Battery", "3561 mAh"],
              ["Camera", "48 MP + 12 MP"],
            ].map(([label, value]) => (
              <tr key={label} className="border-b border-gray-200">
                <td className="w-[180px] py-3 text-gray-500">{label}</td>

                <td className="py-3 text-gray-800">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Price Section */}
      <div
        className="
          h-fit rounded-lg bg-white
          p-5 shadow-sm
          lg:max-w-[300px]
        "
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-4xl font-semibold text-gray-900">
            ₹{stateData.price}
          </span>

          <span className="font-semibold text-green-600">15% Off</span>
        </div>

        <div className="mt-2 text-gray-500">
          MRP <s>₹94,999</s>
        </div>

        <p className="mt-4 font-medium text-green-700">Free Delivery</p>

        <p className="mt-3">
          Stock Available: <strong>10</strong>
        </p>

        <button
          className="
            mt-5 w-full rounded-md
            bg-orange-500 py-3
            font-semibold text-white
            transition hover:bg-orange-600
          "
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductsDescription;
