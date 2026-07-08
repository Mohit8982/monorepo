import { useState } from "react";
import ColorPicker from "./Colorpicker";

export default {
  title: "Components/ColorPicker",
  component: ColorPicker,
  tags: ["autodocs"],
};

export const Default = () => {
  const [color, setColor] = useState("#2563eb");

  return (
    <ColorPicker label="Theme Color" value={color} handleInput={setColor} />
  );
};
