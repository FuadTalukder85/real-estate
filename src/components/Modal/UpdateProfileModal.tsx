"use client";
import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from "../../redux/userApi/UserApi";
import { AuthContext } from "../../Provider/AuthProvider";
import { SubmitHandler, useForm } from "react-hook-form";

import toast, { Toaster } from "react-hot-toast";
import { LoginInputs, UpdateProfileModalProps } from "../../types/types";

const UpdateProfileModal: React.FC<UpdateProfileModalProps> = ({ onClose }) => {
  const { user } = useContext(AuthContext);
  const { data, refetch } = useGetUserQuery("");
  const [updateUser] = useUpdateUserMutation();
  const currentUser = data?.find((dt: LoginInputs) => dt.email === user?.email);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();
  const onSubmit: SubmitHandler<LoginInputs> = async (formData) => {
    try {
      if (!currentUser?._id) {
        console.log("User ID is missing, cannot update profile");
        return;
      }
      const result = await updateUser({
        id: currentUser._id,
        body: formData,
      }).unwrap();
      console.log("User updated successfully:", result);
      toast.success("Profile updated successfully!");
      refetch();
      onClose();
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  return (
    <>
      <div className="fixed inset-0 backdrop-blur-sm z-50">
        <Toaster />
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg w-96 p-6 z-60">
          <div className="flex justify-between items-center mb-4">
            <button className="text-lg font-bold text-gray-700">
              Update your profile
            </button>
            <button
              onClick={onClose}
              className="text-white bg-red-500 hover:bg-gray-200 hover:text-black transition-all duration-700 rounded px-2 py-1"
            >
              <MdClose />
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                defaultValue={currentUser?.name}
                {...register("name", { required: true })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              {errors.name && <span>This field is required</span>}
              <input
                type="text"
                placeholder="Update your profile picture"
                defaultValue={currentUser?.image}
                {...register("image", { required: true })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              {errors.image && <span>This field is required</span>}
              <input
                type="text"
                placeholder="Update your your Number"
                defaultValue={currentUser?.number}
                {...register("number", { required: true })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              {errors.number && <span>This field is required</span>}
              <input
                type="text"
                placeholder="Update your address"
                defaultValue={currentUser?.address}
                {...register("address", { required: true })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
              {errors.address && <span>This field is required</span>}
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="mt-5 bg-[#ffac37] text-white py-2 px-6 rounded-lg w-full uppercase font-semibold hover:bg-[#ffb958] transition-all duration-700"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfileModal;
