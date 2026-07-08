import { useState } from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};

export const Default = () => {
  const [value, setValue] = useState([]);

  return (
    <Checkbox
      label="Skills"
      value={value}
      handleInput={setValue}
      options={[
        { label: "React", value: "react" },
        { label: "Vue", value: "vue" },
        { label: "Angular", value: "angular" },
      ]}
    />
  );
};
