import { useState } from "react";
import Radio from "./Radio";

export default {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
};

export const Default = () => {
  const [value, setValue] = useState("male");

  return (
    <Radio
      label="Gender"
      name="gender"
      value={value}
      handleInput={setValue}
      options={[
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Other", value: "other" },
      ]}
    />
  );
};
