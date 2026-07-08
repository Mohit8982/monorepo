import { useState } from "react";
import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
};

export const Default = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      label="Name"
      inputType="text"
      placeholder="Enter your name"
      value={value}
      handleInput={setValue}
    />
  );
};

export const Password = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      label="Password"
      inputType="password"
      value={value}
      handleInput={setValue}
    />
  );
};
