import { Outlet } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

const Layout = () => {
  return (
    <div className="bg-[#fff8f5] ">
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
