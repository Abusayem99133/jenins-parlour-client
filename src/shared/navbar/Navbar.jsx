import React from "react";
import logo from "../../assets/image/logo/logo.png";
import { Link } from "react-router-dom";
import { UserAuth } from "../../component/context/AuthContext";
const Navbar = () => {
  const { signOut } = UserAuth();
  const navItems = [
    <li className="">
      <Link to="/" className="text-[17px] font-semibold">
        Home
      </Link>
    </li>,
    <li>
      <Link className="text-[16px] font-semibold">Our Portfolio</Link>
    </li>,
    <li>
      <Link to={"/user-dashboard"} className="text-[16px] font-semibold">
        User Dashboard
      </Link>
    </li>,
    <li>
      <Link className="text-[16px] font-semibold">Admin Dashboard</Link>
    </li>,
    <li>
      <Link className="text-[16px] font-semibold">Our Team</Link>
    </li>,
    <li>
      <Link className="text-[16px] font-semibold">Contact Us</Link>
    </li>,
  ];

  return (
    <div>
      <div className="flex pt-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <div className="flex items-center gap-1">
            <div>
              <img src={logo} alt="" />
            </div>
            <div className=" flex flex-col items-center">
              <a className="btn btn-ghost text-3xl font-bold">Jerin's </a>
              <span className="text-2xl font-semibold">Parlour</span>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <Link
            to={"/login"}
            className="btn bg-[#F63E7B] text-white text-[16px] font-normal"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
