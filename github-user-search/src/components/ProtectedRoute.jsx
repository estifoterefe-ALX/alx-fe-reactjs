// components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../services/authStore";

const  ProtectedRoute = ({ children }) => {
  const user = useAuthStore((state) => state.user);
  const permissions = useAuthStore((state) => state.permissions);
  const isAdmin = permissions.includes("admin");
  if (!user) {
    // User not logged in → redirect to /login
    return <Navigate to="/login" replace />;
  }
  if (isAdmin) {
    return <Navigate to="/admin" replace />;
  }

  // User is logged in → render the protected component
  return children;
};

export default ProtectedRoute;
