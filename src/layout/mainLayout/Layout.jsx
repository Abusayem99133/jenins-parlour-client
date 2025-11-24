import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../shared/navbar/Navbar";
import Footer from "../../shared/footer/Footer";

const Layout = () => {
  const location = useLocation();
  const path = location?.pathname;
  const hideBoth = ["/login"];
  const hideFooterOnly = ["/signup"];
  const hideNavbar = hideBoth?.includes(path);
  const hideFooter = hideBoth?.includes(path) || hideFooterOnly?.includes(path);
  return (
    <div className="bg-[#fff8f5] ">
      <div className="max-w-7xl mx-auto">{!hideNavbar && <Navbar />}</div>
      <div>
        <Outlet />
      </div>
      <div>{!hideFooter && <Footer />} </div>
    </div>
  );
};

export default Layout;
