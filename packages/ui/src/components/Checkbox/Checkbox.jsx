import PropTypes from "prop-types";

export default function Checkbox({
  label,
  options = [],
  value = [],
  onChange,
}) {
  const handleCheckboxChange = (checked, optionValue) => {
    if (checked) {
      onChange([...value, optionValue]);
    } else {
      onChange(value.filter((item) => item !== optionValue));
    }
  };

  return (
    <div className="space-y-3">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex cursor-pointer items-center gap-2"
          >
            <input
              type="checkbox"
              checked={value.includes(option.value)}
              onChange={(e) =>
                handleCheckboxChange(e.target.checked, option.value)
              }
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />

            <span className="text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string,

  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      disabled: PropTypes.bool,
    }),
  ),

  value: PropTypes.array,

  onChange: PropTypes.func.isRequired,
};
