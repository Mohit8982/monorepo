import { createContext, useContext, useState, useCallback } from "react";

const ToastContext = createContext();

const toastVariants = {
  success: "bg-green-500 text-white",
  error: "bg-red-500 text-white",
  warning: "bg-yellow-500 text-slate-700",
  info: "bg-blue-500 text-white",
};

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = "success") => {
    const id = Date.now();

    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <div className="fixed top-4 right-4 z-50 flex w-full max-w-sm flex-col gap-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`rounded-md px-4 py-3 shadow-lg transition-all duration-300 ${
              toastVariants[toast.type] || toastVariants.info
            }`}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useToast = () => useContext(ToastContext);
