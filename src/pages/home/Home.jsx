import React from "react";
import Banner from "./banner/Banner";
import OurServices from "./ourServices/OurServices";
import FacialWash from "./ourServices/facialWash";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <OurServices />
      <FacialWash />
      <Testimonial />
    </div>
  );
};

export default Home;
