import React from "react";
import { Link } from "react-router-dom";
import lineBar from "../../assets/image/register/Line -bar.png";
import facebook from "../../assets/image/register/facebook.png";
import { FcGoogle } from "react-icons/fc";
const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[white]  h-auto min-h-screen px-4 ">
      <form className="border w-full max-w-[570px] p-6 sm:p-8 md:p-10 lg:p-12 rounded-md">
        <h1 className="text-[22px] sm:text-[24px] font-bold mb-10">
          Create an account
        </h1>

        <fieldset className="fieldset flex flex-col gap-8">
          <input
            className="border-b-2 border-[#C5C5C5] py-3 placeholder-black placeholder:text-[16px] placeholder:font-medium"
            type="text"
            placeholder="First Name"
          />

          <input
            className="border-b-2 border-[#C5C5C5] py-3 placeholder-black placeholder:text-[16px] placeholder:font-medium"
            type="text"
            placeholder="Last Name"
          />

          <input
            className="border-b-2 border-[#C5C5C5] py-3 placeholder-black placeholder:text-[16px] placeholder:font-medium"
            type="text"
            placeholder="User Name or Email"
          />

          <input
            className="border-b-2 border-[#C5C5C5] py-3 placeholder-black placeholder:text-[16px] placeholder:font-medium"
            type="password"
            placeholder="Password"
          />

          <input
            className="border-b-2 border-[#C5C5C5] py-3 placeholder-black placeholder:text-[16px] placeholder:font-medium"
            type="password"
            placeholder="Confirm Password"
          />
        </fieldset>

        <div className="w-full mt-8">
          <button className="bg-[#F63E7B] text-white text-[16px] font-medium py-4 w-full rounded-lg cursor-pointer">
            Create an account
          </button>
        </div>

        <p className="mt-6 text-center">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-[#F63E7B] font-medium cursor-pointer"
          >
            Login
          </Link>
        </p>
      </form>
      <div className="flex items-center mt-5 gap-2">
        <img className="h-[2px] w-[220px]" src={lineBar} alt="" />
        <p>Or</p>
        <img className="h-[2px] w-[220px]" src={lineBar} alt="" />
      </div>
      <div className="">
        <button className="flex items-center w-[370px] border rounded-full gap-12 px-2 py-2 mt-4 cursor-pointer  font-medium text-[16px]">
          <img src={facebook} alt="" />
          <span>Continue with Facebook</span>
        </button>
      </div>
      <div className="mt-4">
        <button className="flex items-center border  rounded-full w-[370px] py-2 px-2 gap-12 font-medium text-[16px]">
          <FcGoogle className="text-4xl" />
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Register;
