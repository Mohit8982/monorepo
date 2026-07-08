const Range = ({ label, value, min = 0, max = 100, handleInput }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        {label}: <span className="font-semibold text-gray-900">{value}</span>
      </label>

      <input
        type="range"
        value={value}
        min={min}
        max={max}
        onChange={(e) => handleInput(e.target.value)}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-blue-600"
      />
    </div>
  );
};

export default Range;
