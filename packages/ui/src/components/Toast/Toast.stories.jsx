import { useToast, ToastProvider } from "./Toast";

export default {
  title: "Components/Toast",
  tags: ["autodocs"],
};

const Demo = () => {
  const { showToast } = useToast();

  return (
    <button
      className="rounded-md bg-blue-600 px-4 py-2 text-white"
      onClick={() => showToast("Operation completed successfully!")}
    >
      Show Toast
    </button>
  );
};

export const Default = () => (
  <ToastProvider>
    <Demo />
  </ToastProvider>
);
