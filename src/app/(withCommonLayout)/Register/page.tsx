"use client";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePostUserMutation } from "../../../redux/userApi/UserApi";
import { AuthContext } from "../../../Provider/AuthProvider";
import Image from "next/image";
import loginImg from "../../../assets/images/loginImg.png";
import Container from "../../../components/Container/Container";
import { LoginInputs } from "../../../types/types";
import Link from "next/link";

const Register = () => {
  const [postUser] = usePostUserMutation();
  const { createUser } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    const userData = { ...data, image: "", number: "", address: "" };
    postUser(userData);
    const { email, password } = data;
    createUser(email, password)
      .then((userCredential) => {
        // Handle successful registration
        console.log("User created:", userCredential.user);
        reset();
      })
      .catch((error) => {
        // Handle registration errors
        console.error("Error creating user:", error.message);
      });
  };

  return (
    <Container>
      <div className="md:flex justify-between items-center gap-10 p-3 md:p-10 bg-gray-50 md:mt-10">
        <div className="w-full">
          <Image src={loginImg} alt="loginImg"></Image>
        </div>
        <div className="w-full">
          <h5 className="text-2xl md:text-4xl font-semibold text-seaBlue mt-5 md:mt-0">
            Please register!
          </h5>
          <div className="p-2">
            <form onSubmit={handleSubmit(onSubmit)} className="md:mt-10">
              <div className="text-light w-full">
                <p>Name</p>
                <input
                  className="mt-2 px-3 py-2 w-full border-2 border-[#F7F7F7] outline-none rounded-md"
                  placeholder="Enter your name"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="mt-2 text-light w-full">
                <p>Email</p>
                <input
                  className="mt-2 px-3 py-2 w-full border-2 border-[#F7F7F7] outline-none rounded-md"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="text-light w-full mt-5">
                <p>Password</p>
                <input
                  className="mt-2 px-3 py-2 w-full border-2 border-[#F7F7F7] outline-none rounded-md"
                  placeholder="Enter your password"
                  type="password"
                  {...register("password", { required: true })}
                />
              </div>
              <button
                type="submit"
                className="mt-5 w-full bg-yellow text-white py-3 px-4 text-sm font-semibold uppercase rounded-lg hover:bg-seaBlue transition-all duration-700"
              >
                Register
              </button>
              <div className="text-center mt-5">
                <span>
                  Already have an account?
                  <Link href="/Login" className="underline text-yellow ps-2">
                    please login
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
