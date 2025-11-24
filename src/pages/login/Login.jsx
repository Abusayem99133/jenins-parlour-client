import React from "react";
import logo from "../../assets/image/logo/logo.png";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto  bg-white border h-screen">
      <Helmet>
        <title>Jerins-parlour | Login Page</title>
      </Helmet>
      <div className="flex items-center gap-1 ">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className=" flex flex-col items-center">
          <a className="btn btn-ghost text-3xl font-bold">Jerin's </a>
          <span className="text-2xl font-semibold">Parlour</span>
        </div>
      </div>
      <div className="mt-20 text-center">
        <h1 className="text-[36px] font-semibold   mb-5">Login With</h1>
        <span className="w-[350px] border-2 border-slate-300 input rounded-full py-6 ">
          <button className="flex items-center justify-between gap-18 text-[16px] font-semibold  cursor-pointer">
            <FcGoogle className="text-4xl" />
            Continue with Google
          </button>
        </span>
        <p className="my-4">
          Don't have an account?{" "}
          <span className="text-[#F63E7B]">
            <Link to={"/signup"}>Create an account</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
