import { useLocation, useParams } from "react-router-dom";

const ProductsDescription = () => {
  const { id } = useParams();
  const location = useLocation();
  const stateData = location.state;

  // now `id` is the route param from /products/:id
  console.log(id, stateData);

  if (!stateData) {
    return (
      <div className="mx-auto max-w-[1400px] p-5">
        <div className="rounded-lg bg-white p-8 text-center shadow-sm">
          <h1 className="mb-3 text-2xl font-semibold text-gray-900">
            Product not found
          </h1>
          <p className="text-gray-600">
            No product data was provided. Please go back and select a product
            again.
          </p>
        </div>
      </div>
    );
  }

  const {
    name = "Unnamed Product",
    image = "",
    price = "0",
    description = "No description available.",
    highlights,
    specifications,
  } = stateData;

  const highlightItems = highlights ?? [
    "128 GB Storage",
    "8 GB RAM",
    "A18 Bionic Processor",
    "48 MP + 12 MP Camera",
    "6.1 Inch OLED Display",
    "3561 mAh Battery",
  ];

  const specificationItems =
    Array.isArray(specifications) && specifications.length
      ? specifications
      : Object.entries(
          specifications ?? {
            Brand: "Apple",
            Display: "6.1 inch OLED",
            Processor: "A18 Bionic",
            RAM: "8 GB",
            Storage: "128 GB",
            Battery: "3561 mAh",
            Camera: "48 MP + 12 MP",
          },
        );

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
          src={image}
          alt={name}
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
        <h1 className="mb-3 text-3xl font-semibold text-gray-900">{name}</h1>

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

        <p className="mb-6 leading-7 text-gray-600">{description}</p>

        <h3 className="mb-3 text-lg font-semibold">Highlights</h3>

        <ul className="mb-8 list-disc space-y-2 pl-5 text-gray-600">
          {highlightItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3 className="mb-4 text-lg font-semibold">Specifications</h3>

        <table className="w-full border-collapse">
          <tbody>
            {specificationItems.map(([label, value], index) => (
              <tr
                key={`${label}-${index}`}
                className="border-b border-gray-200"
              >
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
          <span className="text-4xl font-semibold text-gray-900">₹{price}</span>

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
