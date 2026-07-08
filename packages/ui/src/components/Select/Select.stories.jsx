import { useState } from "react";
import Select from "./Select";

export default {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
};

export const Default = () => {
  const [value, setValue] = useState("");

  return (
    <Select
      label="Country"
      value={value}
      handleInput={setValue}
      options={[
        { key: 1, value: "India" },
        { key: 2, value: "USA" },
        { key: 3, value: "Canada" },
      ]}
    />
  );
};
