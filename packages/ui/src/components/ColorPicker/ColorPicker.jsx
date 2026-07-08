const ColorPicker = ({ label, value, handleInput }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>

      <input
        type="color"
        value={value}
        onChange={(e) => handleInput(e.target.value)}
        className="h-10 w-16 cursor-pointer rounded-md border border-gray-300 bg-white p-1 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default ColorPicker;
