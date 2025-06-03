import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import SingUpAndSignIn from "../layout/SingUpAndSignIn";
import DashboardLayout from "@/layout/DashboardLayout";
import Dashboard from "@/pages/Dashboard";
import ShopDashboard from "@/pages/ShopDashboard";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "@/pages/NotFound";

const subdomain = window.location.hostname.split(".")[0];
const isMainApp = window.location.hostname === import.meta.env.VITE_BASE_URL;
console.log({
  isMainApp,
  subdomain,
  hostname: window.location.hostname,
  baseUrl: import.meta.env.VITE_BASE_URL,
});

export const router = createBrowserRouter(
  isMainApp
    ? [
        {
          path: "auth",
          element: <SingUpAndSignIn />,
          children: [
            {
              path: "sign-up",
              element: <Signup />,
            },
            {
              path: "sign-in",
              element: <Signin />,
            },
          ],
        },
        {
          path: "/",
          element: (
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          ),
          children: [
            {
              path: "",
              element: <Dashboard />,
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ]
    : [
        {
          path: "/",
          element: (
            <ProtectedRoute>
              <ShopDashboard shop={subdomain} />
            </ProtectedRoute>
          ),
        },

        {
          path: "*",
          element: <NotFound />,
        },
      ]
);
