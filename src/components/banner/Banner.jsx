import React from "react";
import banner from "../../assets/image/banner/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png";
const Banner = () => {
  return (
    <div>
      <div className="flex justify-between items-center pt-20 px-28 gap-4">
        <div>
          <h1 className="text-[48px] font-bold">
            Beauty Salon <br /> For Every Women
          </h1>
          <p className="text-[16px] text-[##666666]">
            A beauty salon or beauty parlor (beauty parlour) (or sometimes
            beauty shop) is an establishment dealing with cosmetic treatments
            for men and women.
          </p>
          <button className="btn bg-[#F63E7B] text-white text-[16px] mt-5">
            Get an Appointment
          </button>
        </div>
        <div>
          <img src={banner} t="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
