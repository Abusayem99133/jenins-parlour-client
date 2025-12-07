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
      <fieldset className="fieldset flex flex-col gap-4 md:gap-8 md:w-1/2 p-12">
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
          {...register("order", { required: true })}
          className="bg-white py-3 placeholder-black placeholder:text-[16px] placeholder:font-medium text-xl"
          type="text"
          name="order"
          // placeholder="Last Name"
        />
        {errors?.order && (
          <span className="text-red-600">Ordered field is required</span>
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
          {...register("card_number", { required: true })}
          className="bg-white py-3 placeholder-black placeholder:text-[14px] md:placeholder:text-[16px] placeholder:font-medium text-xl placeholder:px-4"
          type="password"
          name="card_number"
          placeholder="Card Number"
        />
        {errors?.card_number && (
          <span className="text-red-600">Card field is required</span>
        )}
        <div className="flex gap-4">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="input"
          />

          <input
            {...register("cvc", { required: true })}
            className="bg-white input  placeholder:text-[16px] placeholder:font-medium text-xl"
            type="password"
            name="cvc"
            placeholder="CVC"
          />
          {errors?.cvc && (
            <span className="text-red-600">CVC field is required</span>
          )}
        </div>
        <div className="flex flex-col md:flex-row  justify-between items-center gap-3 text-[14px] sm:text-[15px] md:text-[16px]">
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Your Service charged will be{" "}
            <span className="text-[14px] sm:text-[15px] md:text-[16px] font-medium ">
              $1000
            </span>
          </p>
          <button className="btn w-full sm:w-1/2  md:w-1/3  bg-[#F63E7B] text-white text-[18px] md:text-[16px]">
            Pay
          </button>
        </div>
      </fieldset>
    </div>
  );
};

export default Book;
