import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { router } from "./component/layout/routes/Router";
import { AuthContextProvider } from "./component/context/AuthContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <div className="max-h-screen max-w-[1480px] mx-auto ">
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </div>
    </AuthContextProvider>
  </StrictMode>
);
