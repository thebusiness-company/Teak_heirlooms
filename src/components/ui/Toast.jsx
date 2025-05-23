import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Info, X } from "lucide-react";

const icons = {
  success: { Icon: CheckCircle, bg: "bg-green-100", text: "text-green-700" },
  error: { Icon: XCircle, bg: "bg-red-100", text: "text-red-700" },
  info: { Icon: Info, bg: "bg-blue-100", text: "text-blue-700" },
};

const Toast = ({ type, message, onClose }) => {
  const { Icon, bg, text } = icons[type] || icons.info;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      className={`w-80 rounded-xl shadow-md p-4 flex gap-3 items-start ${bg} ${text}`}
    >
      <Icon className="w-6 h-6 mt-1" />
      <div className="flex-1">{message}</div>
      <button onClick={onClose}>
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
};
Toast.propTypes = {
  type: PropTypes.oneOf(["success", "error", "info"]).isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Toast;
