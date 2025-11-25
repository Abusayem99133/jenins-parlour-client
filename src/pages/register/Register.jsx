import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center items-center bg-white h-auto min-h-screen px-4 py-10">
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
          <button className="bg-[#F63E7B] text-white text-[16px] font-medium py-4 w-full rounded-lg">
            Create an account
          </button>
        </div>

        <p className="mt-6 text-center">
          Already have an account?{" "}
          <Link to={"/login"} className="text-[#F63E7B] font-medium">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
