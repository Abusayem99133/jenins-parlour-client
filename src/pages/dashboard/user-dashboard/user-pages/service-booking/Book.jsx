import React from "react";
import { useForm } from "react-hook-form";

const Book = () => {
  const {
    register,
    // handleSubmit,

    formState: { errors },
  } = useForm();
  // const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h1>this is booking page</h1>
      <fieldset className="fieldset flex flex-col gap-8">
        <input
          {...register("first_name", { required: true })}
          className="border-b-2 border-[#C5C5C5] py-3 placeholder-black placeholder:text-[16px] placeholder:font-medium text-xl"
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
    </div>
  );
};

export default Book;
