import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import "./index.css";
import { ToastProvider } from "./context/ToastContext";
const queryClient = new QueryClient();
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ToastProvider>
    <GoogleOAuthProvider clientId="496767715933-e1408l6j5a7dfn2qvtlvqs538d48emdb.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
    </ToastProvider>
  </QueryClientProvider>
);
