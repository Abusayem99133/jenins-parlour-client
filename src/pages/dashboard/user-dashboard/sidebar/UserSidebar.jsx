import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import { CiCircleList } from "react-icons/ci";
import { IoIosList } from "react-icons/io";
import { RiMessage2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const UserSidebar = () => {
  const navItems = [
    <li>
      <Link
        to={"book"}
        className="is-drawer-close:tooltip is-drawer-close:tooltip-right text-[16px]"
        data-tip="Book"
      >
        {/* book icon */}
        <CgShoppingCart />
        <span className="is-drawer-close:hidden">Book</span>
      </Link>
    </li>,
    <li>
      <Link
        to={"booking-list"}
        className="is-drawer-close:tooltip is-drawer-close:tooltip-right text-[16px]"
        data-tip="Booking List"
      >
        {/* list icon */}
        <IoIosList />
        <span className="is-drawer-close:hidden">Booking List</span>
      </Link>
    </li>,
    <li>
      <Link
        to={"review"}
        className="is-drawer-close:tooltip is-drawer-close:tooltip-right text-[16px]"
        data-tip="Review"
      >
        {/* review icon */}
        <RiMessage2Line />
        <span className="is-drawer-close:hidden">Review</span>
      </Link>
    </li>,

    <li>
      <button
        className="is-drawer-close:tooltip is-drawer-close:tooltip-right text-[16px]"
        data-tip="Settings"
      >
        {/* Settings icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          fill="none"
          stroke="currentColor"
          className="my-1.5 inline-block size-4"
        >
          <path d="M20 7h-9"></path>
          <path d="M14 17H5"></path>
          <circle cx="17" cy="17" r="3"></circle>
          <circle cx="7" cy="7" r="3"></circle>
        </svg>
        <span className="is-drawer-close:hidden text-[16px]">Settings</span>
      </button>
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
