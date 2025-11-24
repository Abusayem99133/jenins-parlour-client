import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../shared/navbar/Navbar";
import Footer from "../../shared/footer/Footer";

const Layout = () => {
  const location = useLocation();
  const hideLayout = ["/login"];
  const isHidden = hideLayout?.includes(location?.pathname);
  return (
    <div className="bg-[#fff8f5] ">
      <div className="max-w-7xl mx-auto">{!isHidden && <Navbar />}</div>
      <div>
        <Outlet />
      </div>
      <div>{!isHidden && <Footer />} </div>
    </div>
  );
};

export default Layout;
