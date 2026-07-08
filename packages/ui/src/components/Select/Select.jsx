const Select = ({ label, name, value, options = [], handleInput, style }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-medium text-gray-700">{label}</label>

    <select
      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      name={name}
      value={value}
      onChange={(e) => handleInput(e.target.value)}
      style={style}
    >
      <option value="">Select</option>
      {options.map((option) => (
        <option key={option.key} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
