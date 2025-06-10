import { useAuthStore } from "../store/auth";
import { Navigate, useLocation } from "react-router-dom";

export default function PublicRoute({ children }) {
  const user = useAuthStore((s) => s.user);
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  if (user && isAuthPage) {
    // User is logged in and trying to access login/signup
    return <Navigate to="/" replace />;
  }

  return children;
}
