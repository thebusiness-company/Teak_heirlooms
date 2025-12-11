import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import "./index.css";
import { ToastProvider } from "./context/ToastContext";
const queryClient = new QueryClient();
import { GoogleOAuthProvider } from '@react-oauth/google';
// import './styles/fonts.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ToastProvider>
    <GoogleOAuthProvider clientId="760079219750-4qfne3m532ocnulu0651s1aqgmm1boug.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
    </ToastProvider>
  </QueryClientProvider>
);
