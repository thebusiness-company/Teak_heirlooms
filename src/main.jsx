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
    <GoogleOAuthProvider clientId="789880228117-pb73ieo7dqf95k6fsph5vuofq4rk88p8.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
    </ToastProvider>
  </QueryClientProvider>
);
