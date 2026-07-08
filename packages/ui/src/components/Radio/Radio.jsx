const Radio = ({ label, value, name, options = [], handleInput }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>

      <div className="flex flex-wrap gap-4">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex cursor-pointer items-center gap-2 text-sm text-gray-700"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => handleInput(e.target.value)}
              className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
            />

            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Radio;
