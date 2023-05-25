import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <HelmetProvider>
      <div className="max-w-6xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </AuthProvider>
);
