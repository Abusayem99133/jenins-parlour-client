import React from "react";
import banner from "../../../assets/image/banner/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png";
import { Button } from "../../../hooks/CustomButton";
const Banner = () => {
  return (
    <div>
      <div
        className="flex flex-col-reverse md:flex-row justify-between items-center 
                pt-6 md:pt-20 px-5 sm:px-10 md:px-20 lg:px-28 gap-8 w-full"
      >
        {/* Left Side - Text Section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-[26px] sm:text-[32px] md:text-[48px] font-bold mb-3 leading-tight">
            Beauty Salon For Every Women
          </h1>

          <p className="text-[14px] sm:text-[16px] text-[#666666] mb-4">
            A beauty salon or beauty parlor (beauty parlour) (or sometimes
            beauty shop) is an establishment dealing with cosmetic treatments
            for men and women.
          </p>

          <Button text={"Get an Appointments"} />
        </div>

        {/* Right Side - Image Section */}
        <div className="w-full md:w-1/2 md:ml-10 lg:ml-16 flex justify-center">
          <img
            className="w-full max-w-[420px] md:max-w-full"
            src={banner}
            alt=""
          />
        </div>
        h1 
      </div>
    </div>
  );
};

export default Banner;
