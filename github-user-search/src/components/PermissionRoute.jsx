import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../services/authStore";

const PrivateRoute = ({ allowedRoles }) => {
  const user = useAuthStore((state) => state.user);
  const permissions = useAuthStore((state) => state.permissions); // optional

  // 1. Not logged in → redirect to login
  if (!user) return <Navigate to="/login" replace />;

  // 2. Logged in but not allowed → redirect to unauthorized page
  const hasAccess = allowedRoles.some((role) => permissions?.includes(role));
  if (!hasAccess) return <Navigate to="/unauthorized" replace />;

  // 3. Logged in and allowed → render nested routes
  return <Outlet />;
};

export default PrivateRoute;
