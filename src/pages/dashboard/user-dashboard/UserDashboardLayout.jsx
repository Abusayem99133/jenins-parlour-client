import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../../../shared/dashboard-navbar/DashboardNavbar";
import UserSidebar from "./sidebar/UserSidebar";

const UserDashboardLayout = () => {
  return (
    <div>
      <DashboardNavbar />
      <div className="flex min-h-screen ">
        <div className="w-[250px] bg-slate-400 shadow-md p-5">
          <UserSidebar />
        </div>
        <div className="flex-1 p-8 bg-amber-100">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardLayout;
