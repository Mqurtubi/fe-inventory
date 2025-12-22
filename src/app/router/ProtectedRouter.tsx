import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import type { ProtectedType } from "./type";
export function ProtectedRoute({ children, roles }: ProtectedType) {
  const { user, loading } = useAppSelector((s) => s.auth);

  if (loading) return null;

  if (!user) return <Navigate to="/login" replace />;

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/403" replace />;
  }
  return children;
}
