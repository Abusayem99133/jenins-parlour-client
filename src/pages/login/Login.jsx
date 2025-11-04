import React from "react";
import logo from "../../assets/image/logo/logo.png";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto mt-36">
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
      <div className="mt-28">
        <h1 className="text-[36px] font-semibold ">Login With</h1>
        <span className="border-2 border-slate-300 input rounded-full py-6 ">
          <button className=" ">
            <FcGoogle className="text-4xl md:max-w-96" />
          </button>
          work on going
        </span>
      </div>
    </div>
  );
};

export default Login;
