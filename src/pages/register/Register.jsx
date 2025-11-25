import React from "react";

const Register = () => {
  return (
    <div className="flex justify-center items-center mx-auto h-screen">
      <form className="border w-[570px] h-[591px] p-12">
        <h1 className="text-[24px] font-bold">Create an account</h1>
        <fieldset className="fieldset">
          {/* <label className="label">First Name</label> */}
          <input
            className="border-b-2 py-3"
            type="text"
            name="name"
            placeholder="First Name"
          />
          {/* <label className="label">Last Name</label>
          <input type="text" className="border-b-2 " />

          <label className="label">Username or Email</label>
          <input type="email" className="border-b-2 " />
          <label className="label">Password</label>
          <input type="password" className="border-b-2 " />
          <label className="label">Confirm Password</label>
          <input type="password" className="border-b-2" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div> */}
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
