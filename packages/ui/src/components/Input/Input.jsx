const Input = ({
  inputType,
  value,
  handleInput,
  name,
  placeholder,
  style,
  label,
}) => {
  const handleInputValue = (value) => {
    handleInput(value);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>

      <input
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type={inputType}
        placeholder={placeholder}
        onChange={(e) => handleInputValue(e.target.value)}
        value={value}
        name={name}
        style={style}
      />
    </div>
  );
};

export default Input;
