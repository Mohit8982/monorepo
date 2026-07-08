const TextArea = ({ value, handleInput, name, placeholder, label }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>

      <textarea
        className="min-h-32 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={(e) => handleInput(e.target.value)}
      />
    </div>
  );
};

export default TextArea;
