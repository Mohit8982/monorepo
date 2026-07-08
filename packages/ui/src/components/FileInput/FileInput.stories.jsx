import FileInput from "./FileInput";

export default {
  title: "Components/FileInput",
  component: FileInput,
  tags: ["autodocs"],
};

export const Default = () => (
  <FileInput label="Upload File" handleInput={(file) => console.log(file)} />
);
