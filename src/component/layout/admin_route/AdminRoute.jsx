import React from "react";
import { UserAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const AdminRoute = () => {
  const { user, role, loading } = UserAuth();
  if (loading) return <p>Loading...</p>;
  if (!user || role !== "admin") {
    return <Navigate to={"/"} replace />;
  }
  return <div></div>;
};

export default AdminRoute;
