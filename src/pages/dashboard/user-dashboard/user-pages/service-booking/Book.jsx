import React, { useState } from "react";
import { useForm } from "react-hook-form";
import credit from "../../../../../assets/image/payment-logo/credit-card.png";
import paypal from "../../../../../assets/image/payment-logo/paypal.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Book = () => {
  const [startDate, setStartDate] = useState(new Date());
  const {
    register,
    // handleSubmit,

    formState: { errors },
  } = useForm();
  // const onSubmit = (data) => console.log(data);
  return (
    <div className=" bg-[#e9f0fc]">
      {/* <h1>this is booking page</h1> */}
      <fieldset className="fieldset flex flex-col gap-8 w-1/2 p-12">
        <input
          {...register("first_name", { required: true })}
          className=" bg-white py-3 placeholder-black placeholder:text-[16px] placeholder:font-medium text-xl "
          type="text"
          name="first_name"
          // placeholder="First Name"
        />

        {errors?.first_name && (
          <span className="text-red-600">Name field is required</span>
        )}

        <input
          {...register("email", { required: true })}
          className="bg-white py-3 placeholder-black placeholder:text-[16px] placeholder:font-medium text-xl"
          type="text"
          name="email"
          // placeholder="User Name or Email"
        />
        {errors?.email && (
          <span className="text-red-600">
            User Name or Email field is required
          </span>
        )}

        <input
          {...register("last_name", { required: true })}
          className="bg-white py-3 placeholder-black placeholder:text-[16px] placeholder:font-medium text-xl"
          type="text"
          name="last_name"
          // placeholder="Last Name"
        />
        {errors?.last_name && (
          <span className="text-red-600">Last Name field is required</span>
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
        <span className="text-[16px]">Pay with</span>
        <div className="flex items-center gap-4 ">
          <input type="checkbox" name="" id="" className="checkbox bg-white" />
          <img src={credit} alt="" />
          <p>Credit Card</p>

          <input type="checkbox" name="" id="" className="checkbox bg-white" />
          <img src={paypal} alt="" />
          <p>Paypal</p>
        </div>
        <input
          {...register("password", { required: true })}
          className="bg-white py-3 placeholder-black placeholder:text-[16px] placeholder:font-medium text-xl placeholder:px-4"
          type="password"
          name="password"
          placeholder="Card Number"
        />
        {errors?.password && (
          <span className="text-red-600">Password field is required</span>
        )}
        <div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="input"
          />
        </div>
      </fieldset>
    </div>
  );
};

export default Book;
