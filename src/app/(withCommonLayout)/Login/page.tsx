"use client";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePostUserMutation } from "../../../redux/userApi/UserApi";
import { AuthContext } from "../../../Provider/AuthProvider";
import Image from "next/image";
import loginImg from "../../../assets/images/loginImg.png";
import Container from "../../../components/Container/Container";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const Login = () => {
  const [loggedUser] = usePostUserMutation();
  const { signIn } = useContext(AuthContext); // Get createUser from context
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { email, password } = data;
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
    loggedUser(data);
  };

  return (
    <Container>
      <div className="flex justify-between items-center gap-10 p-10 bg-[#F9F9FC] mt-10">
        <div className="w-full">
          <Image src={loginImg} alt="loginImg"></Image>
        </div>
        <div className="w-full">
          <h5 className="text-4xl font-semibold text-[#2A4766]">
            Please login!
          </h5>
          <form onSubmit={handleSubmit(onSubmit)} className="p-2">
            <div className="mt-10">
              <div className="text-[#ABACB0] w-full">
                <p>Email</p>
                <input
                  className="mt-2 px-3 py-2 w-full border-2 border-[#F7F7F7] outline-none rounded-md"
                  placeholder="Enter your email"
                  type="text"
                  {...register("email", { required: true })}
                ></input>
              </div>
              <div className="text-[#ABACB0] w-full mt-5">
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
            <button className="mt-5 w-full bg-[#ffac37] text-white font-semibold py-3 px-7 rounded-md hover:bg-[#ffb958] hover:text-white transition-all duration-700">
              Sign Up
            </button>
            <div className="text-center mt-5">
              <span>
                Don,t have an account?
                <a href="" className="underline text-[#ffac37] ps-2">
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
