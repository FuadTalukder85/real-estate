import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { usePostUserMutation } from "../../redux/userApi/UserApi";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const LoginForm = () => {
  const [loggedUser] = usePostUserMutation();
  const { signIn } = useContext(AuthContext);
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
    <form onSubmit={handleSubmit(onSubmit)} className="p-2">
      <div className="mt-10">
        <div className="text-light w-full">
          <p>Email</p>
          <input
            className="mt-2 px-3 py-2 w-full border-2 border-[#F7F7F7] outline-none rounded-md"
            placeholder="Enter your email"
            {...register("email", { required: true })}
            defaultValue={"webfuadtk@gmail.com"}
          ></input>
        </div>
        <div className="text-light w-full mt-5">
          <p>Password</p>
          <input
            className="mt-2 px-3 py-2 w-full border-2 border-[#F7F7F7] outline-none rounded-md"
            placeholder="Enter your password"
            {...register("password", { required: true })}
            defaultValue={"fuad85"}
            type="password"
          ></input>
        </div>
      </div>
      {/* submit button  */}
      <button className="mt-5 w-full bg-yellow text-white py-3 px-4 text-sm font-semibold uppercase rounded-lg hover:bg-seaBlue transition-all duration-700">
        Sign Up
      </button>
    </form>
  );
};

export default LoginForm;
