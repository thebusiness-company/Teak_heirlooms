import { createContext, useContext, useState, useCallback } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import Toast from "../components/ui/Toast"; // Adjust the path based on your project structure

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const addToast = useCallback((type, message, duration = 3000) => {
    const id = nanoid();
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => removeToast(id), duration);
  }, []);

  const value = {
    showSuccess: (msg, duration) => addToast("success", msg, duration),
    showError: (msg, duration) => addToast("error", msg, duration),
    showInfo: (msg, duration) => addToast("info", msg, duration),
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};
export const useToast = () => useContext(ToastContext);

ToastProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
