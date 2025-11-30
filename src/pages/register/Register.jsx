import React from "react";
import { Link } from "react-router-dom";
import lineBar from "../../assets/image/register/Line -bar.png";
import facebook from "../../assets/image/register/facebook.png";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { UserAuth } from "../../component/context/AuthContext";
const Register = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const { session, signUpNewUser } = UserAuth();
  console.log(session);
  return (
    <div className="flex flex-col justify-center items-center bg-[white]  h-auto min-h-screen px-4 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border w-full max-w-[570px] p-4 sm:p-6 md:p-8 lg:p-10 rounded-md"
      >
        <h1 className="text-[22px] sm:text-[24px] font-bold mb-10">
          Create an account
        </h1>

        <fieldset className="fieldset flex flex-col gap-8">
          <input
            {...register("first_name", { required: true })}
            className="border-b-4 border-[#C5C5C5] py-3 placeholder-black placeholder:text-[16px] placeholder:font-medium text-xl"
            type="text"
            name="first_name"
            placeholder="First Name"
          />

          {errors?.first_name && (
            <span className="text-red-600">Name field is required</span>
          )}
          <input
            {...register("last_name", { required: true })}
            className="border-b-2 border-[#C5C5C5] py-3 placeholder-black placeholder:text-[16px] placeholder:font-medium text-xl"
            type="text"
            name="last_name"
            placeholder="Last Name"
          />
          {errors?.last_name && (
            <span className="text-red-600">Last Name field is required</span>
          )}

          <input
            {...register("email", { required: true })}
            className="border-b-2 border-[#C5C5C5] py-3 placeholder-black placeholder:text-[16px] placeholder:font-medium text-xl"
            type="text"
            name="email"
            placeholder="User Name or Email"
          />
          {errors?.email && (
            <span className="text-red-600">
              User Name or Email field is required
            </span>
          )}

          <input
            {...register("password", { required: true })}
            className="border-b-2 border-[#C5C5C5] py-3 placeholder-black placeholder:text-[16px] placeholder:font-medium text-xl"
            type="password"
            name="password"
            placeholder="Password"
          />
          {errors?.password && (
            <span className="text-red-600">Password field is required</span>
          )}

          <input
            {...register("confirm_password", { required: true })}
            className="border-b-2 border-[#C5C5C5] py-3 placeholder-black placeholder:text-[16px] placeholder:font-medium text-xl"
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
          />
          {errors?.confirm_password && (
            <span className="text-red-600">
              Confirm Password field is required
            </span>
          )}
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
        <button className="flex items-center w-[470px] border rounded-full gap-12 px-2 py-2 mt-4 cursor-pointer  font-medium text-[16px]">
          <img src={facebook} alt="" />
          <span>Continue with Facebook</span>
        </button>
      </div>
      <div className="mt-4">
        <button className="flex items-center border  rounded-full w-[470px] py-2 px-2 gap-12 font-medium text-[16px]">
          <FcGoogle className="text-4xl" />
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Register;
