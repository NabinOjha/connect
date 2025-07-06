import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "@/hooks/useAuth";

export default function PrivateRoute({
  allowedRoles,
}: {
  allowedRoles?: string[];
}) {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) return;

  if (!user) {
    return <Navigate to="/auth/signin" state={{ from: location }} replace />;
  }

  if (user.role && allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
