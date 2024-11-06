import React from "react";

const RegisterForm = () => {
  return (
    <div>
      <div className="p-2">
        <div className="mt-10">
          <div className="text-[#ABACB0] w-full">
            <p>Name</p>
            <input
              className="mt-2 px-3 py-2 w-full border-2 border-[#F7F7F7] outline-none rounded-md"
              placeholder="Enter your name"
            ></input>
          </div>
          <div className="mt-2 text-[#ABACB0] w-full">
            <p>Email</p>
            <input
              className="mt-2 px-3 py-2 w-full border-2 border-[#F7F7F7] outline-none rounded-md"
              placeholder="Enter your email"
            ></input>
          </div>
          <div className="text-[#ABACB0] w-full mt-5">
            <p>Password</p>
            <input
              className="mt-2 px-3 py-2 w-full border-2 border-[#F7F7F7] outline-none rounded-md"
              placeholder="Enter your password"
            ></input>
          </div>
        </div>
        {/* submit button  */}
        <div className="mt-3 flex justify-end">
          <a href="">Forgot your password?</a>
        </div>
        <button className="mt-5 w-full bg-[#ffac37] text-white font-semibold py-3 px-7 rounded-md hover:bg-[#ffb958] hover:text-white transition-all duration-700">
          Resigter
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
