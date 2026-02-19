import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Outlet } from "react-router-dom";
function ProtectedRoute() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
export default ProtectedRoute;
