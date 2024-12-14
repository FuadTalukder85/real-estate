"use client";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePostUserMutation } from "../../../redux/userApi/UserApi";
import { AuthContext } from "../../../Provider/AuthProvider";
import Image from "next/image";
import loginImg from "../../../assets/images/loginImg.png";
import Container from "../../../components/Container/Container";
import { LoginInputs } from "../../../types/types";

const Login = () => {
  const [loggedUser] = usePostUserMutation();
  const { signIn } = useContext(AuthContext);
  const { register, handleSubmit } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    const { email, password } = data;
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
    loggedUser(data);
  };

  return (
    <Container>
      <div className="flex justify-between items-center gap-10 p-10 bg-gray-50 mt-10">
        <div className="w-full">
          <Image src={loginImg} alt="loginImg"></Image>
        </div>
        <div className="w-full">
          <h5 className="text-4xl font-semibold text-seaBlue">Please login!</h5>
          <form onSubmit={handleSubmit(onSubmit)} className="p-2">
            <div className="mt-10">
              <div className="text-light w-full">
                <p>Email</p>
                <input
                  className="mt-2 px-3 py-2 w-full border-2 border-[#F7F7F7] outline-none rounded-md"
                  placeholder="Enter your email"
                  type="text"
                  {...register("email", { required: true })}
                ></input>
              </div>
              <div className="text-light w-full mt-5">
                <p>Password</p>
                <input
                  className="mt-2 px-3 py-2 w-full border-2 border-[#F7F7F7] outline-none rounded-md"
                  placeholder="Enter your password"
                  type="password"
                  {...register("password", { required: true })}
                ></input>
              </div>
            </div>
            {/* submit button  */}
            <div className="mt-3 flex justify-end">
              <a href="" className="underline">
                Forgot your password?
              </a>
            </div>
            <button className="mt-5 w-full bg-yellow text-white py-3 px-4 text-sm font-semibold uppercase rounded-lg hover:bg-seaBlue transition-all duration-700">
              Sign Up
            </button>
            <div className="text-center mt-5">
              <span>
                Don,t have an account?
                <a href="" className="underline text-yellow ps-2">
                  please register
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Login;
