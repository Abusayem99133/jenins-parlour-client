import React from "react";
import Banner from "./banner/Banner";
import OurServices from "./ourServices/OurServices";
import FacialWash from "./ourServices/facialWash";

const Home = () => {
  return (
    <div>
      <Banner />
      <OurServices />
      <FacialWash />
    </div>
  );
};

export default Home;
