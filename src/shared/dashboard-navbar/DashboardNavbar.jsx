import React from "react";
import logo from "../../assets/image/logo/logo.png";
import { Link } from "react-router-dom";
// import { UserAuth } from "../../component/context/AuthContext";
const DashboardNavbar = () => {
  //   const { signOut } = UserAuth();
  // const navItems = [
  //   <li className="">
  //     <Link to="/" className="text-[17px] font-semibold">
  //       Home
  //     </Link>
  //   </li>,
  // ];

  return (
    <div>
      <div className="flex pt-4">
        <div className="navbar-start">
          <div className="dropdown">
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {/* TODO: when the user click the book then show the book and when the user click booking list then show the booking */}
              <span>book</span>
            </ul>
          </div>
          <div className=" hidden md:flex items-center ">
            <div>
              <img src={logo} alt="" />
            </div>
            <div className=" flex flex-col items-center">
              <a className="btn btn-ghost md:text-2xl font-bold">Jerin's </a>
              <span className="md:text-xl font-semibold">Parlour</span>
            </div>
          </div>
        </div>
        <div className="navbar hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* TODO: when the user click the book then show the book and when the user click booking list then show the booking */}
            <span>book</span>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to={""}
            className="btn bg-[#F63E7B] text-white text-[16px] font-normal"
          >
            User name
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
