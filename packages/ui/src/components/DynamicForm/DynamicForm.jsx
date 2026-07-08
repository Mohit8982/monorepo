import { useState } from "react";
import fieldComponents from "./fieldComponents";

const DynamicForm = ({ formFiled }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const shouldRenderField = (field) => {
    // If there is no condition, always render
    if (!field.showWhen) {
      return true;
    }

    const { field: dependentField, value: expectedValue } = field.showWhen;
    console.log(formData, "===", formData[dependentField], dependentField);

    return formData[dependentField] === expectedValue;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formFiled.map((field) => {
        const Component = fieldComponents[field.type];

        if (!Component) return null;

        if (!shouldRenderField(field)) return null;

        return (
          <Component
            key={field.controlId || field.name}
            {...field}
            value={formData[field.name] ?? field.defaultValue ?? ""}
            handleInput={(value) => handleChange(field.name, value)}
          />
        );
      })}

      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
