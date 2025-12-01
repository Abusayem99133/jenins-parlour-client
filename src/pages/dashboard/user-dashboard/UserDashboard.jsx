import React from "react";
import { Outlet } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div>
      <span>navbar</span>
      <Outlet></Outlet>
    </div>
  );
};

export default UserDashboard;
