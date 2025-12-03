import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import { CiCircleList, CiSettings } from "react-icons/ci";
import { IoIosList } from "react-icons/io";
import { RiMessage2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const UserSidebar = () => {
  const navItems = [
    <li>
      <NavLink
        to={"book"}
        data-tip="Book"
        className={({ isActive }) =>
          `is-drawer-close:tooltip is-drawer-close:tooltip-right text-[16px] ${
            isActive ? "bg-amber-200 font-semibold" : "bg-slate-100"
          }`
        }
      >
        {/* book icon */}
        <CgShoppingCart />
        <span className="is-drawer-close:hidden">Book</span>
      </NavLink>
    </li>,
    <li>
      <NavLink
        to={"booking-list"}
        className={({ isActive }) =>
          `is-drawer-close:tooltip is-drawer-close:tooltip-right text-[16px] ${
            isActive ? "bg-amber-200 font-semibold" : "bg-slate-100"
          }`
        }
        data-tip="Booking List"
      >
        {/* list icon */}
        <IoIosList />
        <span className="is-drawer-close:hidden ">Booking List</span>
      </NavLink>
    </li>,
    <li>
      <NavLink
        to={"review"}
        className={({ isActive }) =>
          `is-drawer-close:tooltip is-drawer-close:tooltip-right text-[16px] ${
            isActive ? "bg-amber-200 font-semibold" : "bg-slate-100"
          }`
        }
        data-tip="Review"
      >
        {/* review icon */}
        <RiMessage2Line />
        <span className="is-drawer-close:hidden">Review</span>
      </NavLink>
    </li>,

    <li>
      <NavLink
        to={"settings"}
        className={({ isActive }) =>
          `is-drawer-close:tooltip is-drawer-close:tooltip-right text-[16px] ${
            isActive ? "bg-amber-200 font-semibold" : "bg-slate-100"
          }`
        }
        data-tip="Settings"
      >
        {/* Settings icon */}
        <CiSettings />
        <span className="is-drawer-close:hidden text-[16px]">Settings</span>
      </NavLink>
    </li>,
  ];
  return (
    <div>
      {/* Sidebar content here */}
      <ul className="menu w-full grow">
        {/* List item */}
        {navItems}
      </ul>
    </div>
  );
};

export default UserSidebar;
