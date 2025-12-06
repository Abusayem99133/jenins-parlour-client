import { CgShoppingCart } from "react-icons/cg";
import { CiCircleList, CiSettings } from "react-icons/ci";
import { IoIosList } from "react-icons/io";
import { RiMessage2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { UserAuth } from "../../../../component/context/AuthContext";

const UserSidebar = () => {
  const { user, signOut } = UserAuth();
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
    // <ul
    //   tabIndex="-1"
    //   className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
    // >
    //   <li>
    //     <a>Logout</a>
    //   </li>
    // </ul>,
  ];
  return (
    <div>
      {/* Sidebar content here */}
      <ul className="menu w-full grow">
        {/* List item */}
        {navItems}
      </ul>
      {/* ---------- BOTTOM (User Info + Logout) ---------- */}
      <div className="p-4 border-t w-32">
        {/* User profile */}
        <div className="flex items-center gap-3 mb-3">
          <img
            src={user?.photoURL || "https://via.placeholder.com/40"}
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="is-drawer-close:hidden">
            {/* <p className="font-semibold">{user?.displayName || "User"}</p> */}
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
        </div>

        {/* Logout button (Visible only when drawer is open) */}
        <button
          onClick={signOut}
          className="w-full text-white py-2 rounded-md  is-drawer-close:hidden"
        >
          Logout
        </button>

        {/* Logout Icon (visible only when drawer is closed) */}
        <div
          data-tip="Logout"
          className="is-drawer-close:flex hidden justify-center mt-3 tooltip tooltip-right"
        >
          <button
            onClick={signOut}
            className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
          >
            {/* Log out icon */}
            <CiCircleList size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;
