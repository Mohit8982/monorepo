import { useState } from "react";
import Range from "./Range";

export default {
  title: "Components/Range",
  component: Range,
  tags: ["autodocs"],
};

export const Default = () => {
  const [value, setValue] = useState(50);

  return (
    <Range
      label="Volume"
      value={value}
      min={0}
      max={100}
      handleInput={setValue}
    />
  );
};
