import React from "react";
import { UserAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = UserAuth();
  if (loading) return <p>Loading....</p>;
  if (!user) return <Navigate to={"/login"} replace />;
  return children;
};
