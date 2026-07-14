const FilterSidebar = () => {
  return (
    <aside
      className="
        sticky top-20 h-fit
        w-[280px] min-w-[280px]
        border border-gray-200
        bg-white p-5
      "
    >
      <h2 className="mb-5 text-xl font-semibold">Filters</h2>

      {/* Brand */}
      <div className="mb-6 border-t border-gray-200 pt-4">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide">
          Brand
        </h3>

        <label className="mb-2 flex cursor-pointer items-center gap-2.5 text-sm text-gray-700">
          <input type="checkbox" className="h-4 w-4" />
          Apple
        </label>

        <label className="mb-2 flex cursor-pointer items-center gap-2.5 text-sm text-gray-700">
          <input type="checkbox" className="h-4 w-4" />
          Samsung
        </label>

        <label className="mb-2 flex cursor-pointer items-center gap-2.5 text-sm text-gray-700">
          <input type="checkbox" className="h-4 w-4" />
          Vivo
        </label>

        <label className="flex cursor-pointer items-center gap-2.5 text-sm text-gray-700">
          <input type="checkbox" className="h-4 w-4" />
          Oppo
        </label>
      </div>

      {/* RAM */}
      <div className="mb-6 border-t border-gray-200 pt-4">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide">
          RAM
        </h3>

        <label className="mb-2 flex cursor-pointer items-center gap-2.5 text-sm text-gray-700">
          <input type="checkbox" className="h-4 w-4" />4 GB
        </label>

        <label className="mb-2 flex cursor-pointer items-center gap-2.5 text-sm text-gray-700">
          <input type="checkbox" className="h-4 w-4" />6 GB
        </label>

        <label className="flex cursor-pointer items-center gap-2.5 text-sm text-gray-700">
          <input type="checkbox" className="h-4 w-4" />8 GB
        </label>
      </div>

      {/* Price */}
      <div className="border-t border-gray-200 pt-4">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide">
          Price
        </h3>

        <label className="mb-2 flex cursor-pointer items-center gap-2.5 text-sm text-gray-700">
          <input type="checkbox" className="h-4 w-4" />
          Under ₹10,000
        </label>

        <label className="mb-2 flex cursor-pointer items-center gap-2.5 text-sm text-gray-700">
          <input type="checkbox" className="h-4 w-4" />
          ₹10,000 - ₹20,000
        </label>

        <label className="flex cursor-pointer items-center gap-2.5 text-sm text-gray-700">
          <input type="checkbox" className="h-4 w-4" />
          Above ₹20,000
        </label>
      </div>
    </aside>
  );
};

export default FilterSidebar;
