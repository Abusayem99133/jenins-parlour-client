import React from "react";
import { useForm } from "react-hook-form";

const Review = () => {
  const {
    register,
    // handleSubmit,

    formState: { errors },
  } = useForm();
  return (
    <div className="bg-[#e9f0fc]">
      <fieldset className="fieldset flex flex-col gap-8 w-1/2  p-8 md:p-12">
        <input
          {...register("first_name", { required: true })}
          className=" bg-white border-indigo-400 py-3 px-3 placeholder-[#0000004D] placeholder:text-[16px] placeholder:font-medium text-xl "
          type="text"
          name="first_name"
          placeholder="Your name"
        />

        {errors?.first_name && (
          <span className="text-red-600">Name field is required</span>
        )}

        <input
          {...register("company_name", { required: true })}
          className="bg-white py-3 px-3 placeholder-[#0000004D] placeholder:text-[16px] placeholder:font-medium text-xl"
          type="text"
          name="company_name"
          placeholder="Company's name, Designation"
        />
        {errors?.company_name && (
          <span className="text-red-600">Company Name field is required</span>
        )}

        <textarea
          {...register("desc", { required: true })}
          className="bg-white textarea w-full placeholder-[#0000004D] placeholder:text-[16px] placeholder:font-medium text-xl"
          type="text"
          name="desc"
          placeholder="Description"
        />
        {errors?.desc && (
          <span className="text-red-600">Ordered field is required</span>
        )}
        <button className="btn bg-[#F63E7B] text-white w-1/2 text-[16px]">
          <input type="submit" value="Submit" />
        </button>
      </fieldset>
    </div>
  );
};

export default Review;
