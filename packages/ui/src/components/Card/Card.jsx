export default function Card({
  image,
  title,
  description,
  price,
  stock,
  badge,
  secondaryBadge,
  onClick,
  actions,
  children,
}) {
  return (
    <div className="flex overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* Image */}
      <div
        className="flex h-64 w-64 cursor-pointer items-center justify-center bg-gray-50 p-4"
        onClick={onClick}
      >
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Content */}
      <div
        className="flex flex-1 cursor-pointer flex-col gap-4 p-6"
        onClick={onClick}
      >
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>

          <p className="mt-2 text-sm text-gray-600">{description}</p>
        </div>

        <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600">
          <li>Free Delivery</li>
          <li>Cash on Delivery Available</li>
          <li>7 Days Return Policy</li>
        </ul>

        {children}
      </div>

      {/* Right Section */}
      <div className="flex min-w-64 flex-col justify-between border-l border-gray-100 p-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">₹{price}</h3>

          {badge && (
            <span className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              {badge}
            </span>
          )}

          {secondaryBadge && (
            <p className="mt-2 text-sm text-green-600">{secondaryBadge}</p>
          )}

          {stock && (
            <p className="mt-4 text-sm font-medium text-red-600">
              Only {stock} left
            </p>
          )}
        </div>

        {actions}
      </div>
    </div>
  );
}
