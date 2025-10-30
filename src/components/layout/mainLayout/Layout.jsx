import { Outlet } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

const Layout = () => {
  return (
    <div className="bg-[#fff8f5] max-w-6xl mx-auto">
      <div>
        <Navbar />
      </div>
      <div className="h-screen ">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
