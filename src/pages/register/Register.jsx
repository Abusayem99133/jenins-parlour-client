import React from "react";
import { Link, useNavigate } from "react-router-dom";
import lineBar from "../../assets/image/register/Line -bar.png";
import facebook from "../../assets/image/register/facebook.png";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { UserAuth } from "../../component/context/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { session, signUpNewUser } = UserAuth();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const { first_name, last_name, email, password } = data;
    const res = await signUpNewUser({
      first_name,
      last_name,
      email,
      password,
    });
    if (res.success) {
      toast.success("Signup successful!");
      navigate("/");
    } else {
      toast.error(res.message || "Signup failed..!");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-white min-h-screen px-4 py-8">
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border w-full max-w-[520px] p-6 sm:p-8 md:p-10 rounded-md shadow-sm"
      >
        <h1 className="text-[22px] sm:text-[24px] font-bold mb-8 text-center sm:text-left">
          Create an account
        </h1>

        <fieldset className="flex flex-col gap-6">
          {/* First Name */}
          <input
            {...register("first_name", { required: true })}
            className="border-b-2 border-[#C5C5C5] py-3 placeholder:text-[16px] placeholder:font-medium text-lg focus:outline-none"
            type="text"
            placeholder="First Name"
          />
          {errors?.first_name && (
            <span className="text-red-600 text-sm">Name field is required</span>
          )}

          {/* Last Name */}
          <input
            {...register("last_name", { required: true })}
            className="border-b-2 border-[#C5C5C5] py-3 placeholder:text-[16px] placeholder:font-medium text-lg focus:outline-none"
            type="text"
            placeholder="Last Name"
          />
          {errors?.last_name && (
            <span className="text-red-600 text-sm">
              Last Name field is required
            </span>
          )}

          {/* Email */}
          <input
            {...register("email", { required: true })}
            className="border-b-2 border-[#C5C5C5] py-3 placeholder:text-[16px] placeholder:font-medium text-lg focus:outline-none"
            type="email"
            placeholder="User Name or Email"
          />
          {errors?.email && (
            <span className="text-red-600 text-sm">
              User Name or Email field is required
            </span>
          )}

          {/* Password */}
          <input
            {...register("password", { required: true })}
            className="border-b-2 border-[#C5C5C5] py-3 placeholder:text-[16px] placeholder:font-medium text-lg focus:outline-none"
            type="password"
            placeholder="Password"
          />
          {errors?.password && (
            <span className="text-red-600 text-sm">
              Password field is required
            </span>
          )}

          {/* Confirm Password */}
          <input
            {...register("confirm_password", { required: true })}
            className="border-b-2 border-[#C5C5C5] py-3 placeholder:text-[16px] placeholder:font-medium text-lg focus:outline-none"
            type="password"
            placeholder="Confirm Password"
          />
          {errors?.confirm_password && (
            <span className="text-red-600 text-sm">
              Confirm Password field is required
            </span>
          )}
        </fieldset>

        {/* Submit */}
        <div className="mt-8">
          <button className="bg-[#F63E7B] text-white text-[16px] font-medium py-3 w-full rounded-lg cursor-pointer">
            Create an account
          </button>
        </div>

        <p className="mt-6 text-center text-sm sm:text-[16px]">
          Already have an account?{" "}
          <Link to={"/login"} className="text-[#F63E7B] font-medium">
            Login
          </Link>
        </p>
      </form>

      {/* Divider */}
      <div className="flex items-center justify-center w-full max-w-[230px] mt-6 gap-3 mx-auto">
        <img className="h-[2px] w-full" src={lineBar} alt="" />
        <p className="whitespace-nowrap text-center text-xl md:text-2xl">Or</p>
        <img className="h-[2px] w-full" src={lineBar} alt="" />
      </div>

      {/* Social Buttons */}
      <div className="w-full max-w-[520px] mt-5">
        <button className="flex items-center justify-center sm:justify-start w-full border rounded-full py-3 gap-4 sm:gap-8 px-4 font-medium text-[16px] cursor-pointer">
          <img className="w-6 h-6" src={facebook} alt="" />
          <span>Continue with Facebook</span>
        </button>

        <button className="flex items-center justify-center sm:justify-start w-full border rounded-full py-3 gap-4 sm:gap-8 px-4 font-medium text-[16px] mt-4 cursor-pointer">
          <FcGoogle className="text-3xl " />
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Register;
