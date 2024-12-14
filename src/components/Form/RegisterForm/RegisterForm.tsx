import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import { usePostUserMutation } from "../../../redux/userApi/UserApi";
import { LoginInputs } from "../../../types/types";

const RegisterForm = () => {
  const [postUser] = usePostUserMutation();
  const { createUser } = useContext(AuthContext);
  const { register, handleSubmit } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    const userData = { ...data, image: "", number: "", address: "" };
    postUser(userData);
    const { email, password } = data;
    createUser(email, password)
      .then((userCredential) => {
        // Handle successful registration
        console.log("User created:", userCredential.user);
      })
      .catch((error) => {
        // Handle registration errors
        console.error("Error creating user:", error.message);
      });
  };

  return (
    <div className="p-2">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
        <div className="text-[#77797a] w-full">
          <p>Name</p>
          <input
            className="mt-2 px-3 py-2 w-full border-2 border-[#F7F7F7] outline-none rounded-md"
            placeholder="Enter your name"
            {...register("name", { required: true })}
          />
        </div>
        <div className="mt-2 text-[#77797a] w-full">
          <p>Email</p>
          <input
            className="mt-2 px-3 py-2 w-full border-2 border-[#F7F7F7] outline-none rounded-md"
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />
        </div>
        <div className="text-[#77797a] w-full mt-5">
          <p>Password</p>
          <input
            className="mt-2 px-3 py-2 w-full border-2 border-[#F7F7F7] outline-none rounded-md"
            placeholder="Enter your password"
            type="password"
            {...register("password", { required: true })}
          />
        </div>
        <div className="mt-3 flex justify-end">
          <a href="#">Forgot your password?</a>
        </div>
        <button
          type="submit"
          className="mt-5 w-full bg-[#F1913D] text-white font-semibold py-3 px-7 rounded-md hover:bg-[#ffb958] hover:text-white transition-all duration-700"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
