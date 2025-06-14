import LoadingSpinner from "@/components/LoadingSpinner";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const subdomain = window.location.hostname.split(".")[0];
  const isMainApp = window.location.hostname === "multi-shop-ecru.vercel.app";


  if (loading) return <LoadingSpinner />;
  return user ? children : <Navigate to="/auth/sign-in" />;
}
