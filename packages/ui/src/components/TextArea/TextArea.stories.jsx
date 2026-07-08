import { useState } from "react";
import TextArea from "./TextArea";

export default {
  title: "Components/TextArea",
  component: TextArea,
  tags: ["autodocs"],
};

export const Default = () => {
  const [value, setValue] = useState("");

  return (
    <TextArea
      label="Description"
      placeholder="Write something..."
      value={value}
      handleInput={setValue}
    />
  );
};
