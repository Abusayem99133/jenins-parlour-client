import React, { useState } from "react";
import logo from "../../assets/image/logo/logo.png";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserAuth } from "../../component/context/AuthContext";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Login = () => {
  const { signIn } = UserAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // ---------------- LOGIN SUBMIT ----------------
  const onSubmit = async (data) => {
    setLoading(true);
    const { email, password } = data;
    try {
      const res = await signIn({ email, password });
      if (!res.error) {
        toast.error(res.error.message);
        return;
      }
      toast.success("Login Successful !");
      navigate("/");
    } catch (error) {
      toast.error("something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto bg-white border h-screen">
      <Helmet>
        <title>Jerin's-parlour | Login Page</title>
      </Helmet>

      {/* Logo */}
      <div className="flex items-center gap-1">
        <img src={logo} alt="" />
        <div className="flex flex-col items-center">
          <a className="btn btn-ghost text-3xl font-bold">Jerin's</a>
          <span className="text-2xl font-semibold">Parlour</span>
        </div>
      </div>

      {/* Login Section */}
      <div className="mt-12 text-center">
        <h1 className="text-[36px] font-semibold mb-5">Login With</h1>

        {/* ---------------- FORM START ---------------- */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-[350px] mx-auto gap-3"
        >
          {/* Email */}
          <input
            {...register("email", { required: true })}
            className="border-b-2 border-[#C5C5C5] py-3 placeholder:text-[16px] placeholder:font-medium text-xl outline-none"
            type="email"
            placeholder="Type your email address"
          />
          {errors.email && (
            <span className="text-red-600 text-sm text-left">
              Email field is required
            </span>
          )}

          {/* Password */}
          <input
            {...register("password", { required: true })}
            className="border-b-2 border-[#C5C5C5] py-3 placeholder:text-[16px] placeholder:font-medium text-xl outline-none"
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <span className="text-red-600 text-sm text-left">
              Password field is required
            </span>
          )}

          {/* Submit button */}
          <button className="btn bg-[#F63E7B] border-none text-white text-lg mt-3">
            Login
          </button>
        </form>
        {/* ---------------- FORM END ---------------- */}

        {/* Google Login */}
        <span className="w-[350px] border-2 border-slate-300 input rounded-full py-6 mt-4">
          <button className="flex items-center justify-between text-[16px] font-semibold w-full px-6">
            <FcGoogle className="text-4xl" />
            Continue with Google
          </button>
        </span>

        {/* Sign Up Link */}
        <p className="my-4">
          Don't have an account?{" "}
          <span className="text-[#F63E7B] font-medium">
            <Link to={"/signup"}>Create an account</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
