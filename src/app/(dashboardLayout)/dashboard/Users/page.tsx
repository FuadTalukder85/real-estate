"use client";
import { useState } from "react";
import Image from "next/image";
import proImg from "../../../../assets/images/profileImg01.jpg";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import {
  useDeleteUserMutation,
  useGetUserQuery,
} from "../../../../redux/userApi/UserApi";
import toast, { Toaster } from "react-hot-toast";
import { LoginInputs } from "../../../../types/types";
import { IoMdClose } from "react-icons/io";

const Users = () => {
  const { data, refetch } = useGetUserQuery("");
  const [deleteUser] = useDeleteUserMutation();
  // handle user role
  const handleRoleChange = async ({
    e,
    users,
  }: {
    e: React.ChangeEvent<HTMLSelectElement>;
    users: LoginInputs;
  }) => {
    const selectedRole = e.target.value;
    if (!selectedRole) return;
    try {
      const res = await fetch(`http://localhost:4900/user/role/${users._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role: selectedRole }),
      });
      if (!res.ok) {
        throw new Error("Failed to update tole");
      }
      const data = await res.json();
      console.log("Role updated successfully", data);
      toast.success("Successfully updated user role", {
        position: "top-right",
      });
    } catch (error) {
      console.error("Error updating role", error);
    }
  };

  // delete modal
  const [isOpen, setIsOpen] = useState(false);
  const handleDelete = (id: string) => {
    deleteUser(id);
    refetch();
    toast.success("User deleted successed", { position: "top-right" });
    setIsOpen(false);
  };
  //   handle show modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="px-10 p-5 text-seaBlue">
      <Toaster />
      <div className="mt-10">
        <h5 className="bg-white p-5 border capitalize font-semibold text-seaBlue">
          All user list
        </h5>
        {/* users table*/}
        <table className="w-full border-collapse">
          <thead className="bg-[#f2f2f3]">
            <tr className="flex justify-between font-medium p-2 px-5 border-s border-r">
              <th className="py-2 text-left font-medium">*</th>
              <th className="w-1/6 py-2 text-left font-medium">
                User Photo and Name
              </th>
              <th className="w-1/6 py-2 text-left font-medium">Email</th>
              <th className="w-1/6 py-2 text-left font-medium">Join Date</th>
              <th className="w-1/6 py-2 text-left font-medium">Role</th>
              <th className="w-1/6 py-2 text-left font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((users: LoginInputs, index: number) => (
              <tr
                key={index}
                className="flex justify-between items-center p-2 border-s border-r border-b bg-white px-5"
              >
                <td className="">{index + 1}</td>
                <td className="w-1/6 flex items-center space-x-3">
                  <Image
                    className="rounded-full"
                    src={proImg}
                    alt="proImg"
                    width={40}
                  ></Image>
                  <span className=" font-medium">{users.name}</span>
                </td>
                <td className="w-1/6">{users.email}</td>
                <td className="w-1/6">{users.date}</td>
                <td className="w-1/6">
                  <select
                    className="bg-[#ececec] rounded-md"
                    onChange={(e) => handleRoleChange({ e, users })}
                  >
                    <option value="">
                      {users.role ? `${users.role}` : "User"}
                    </option>
                    <option value="Agent">Make Agent</option>
                    <option value="Admin">Make Admin</option>
                    <option value="User">Make User</option>
                  </select>
                </td>
                <td className="w-1/6">
                  <div className="flex gap-5">
                    <button className="bg-[#ececec] p-2 rounded-md hover:bg-seaBlue hover:text-white transition-all duration-700">
                      <FiEye />
                    </button>
                    <button className="bg-[#ececec] p-2 rounded-md hover:bg-seaBlue hover:text-white transition-all duration-700">
                      <CiEdit />
                    </button>
                    <button
                      onClick={toggleModal}
                      className="bg-yellow text-white p-2 rounded-md hover:bg-seaBlue hover:text-white transition-all duration-700"
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                  {/* Delete modal */}
                  <div className="flex justify-center items-center">
                    {isOpen && (
                      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-5 z-50">
                        <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-sm relative">
                          {/* Close button */}
                          <button
                            onClick={toggleModal}
                            className="text-2xl absolute top-2 right-2 text-white"
                          >
                            <IoMdClose className="p-1 rounded-md cursor-pointer bg-yellow hover:bg-seaBlue hover:text-white transition-all duration-700" />
                          </button>
                          <div className="flex justify-center mb-4 text-yellow text-4xl">
                            <AiOutlineDelete />
                          </div>
                          <p className="text-center text-seaBlue font-medium mb-6">
                            Are you sure you want to delete this agent?
                          </p>
                          <div className="flex justify-center space-x-4">
                            <button
                              onClick={toggleModal}
                              className="bg-gray-100 text-seaBlue px-4 py-2 rounded-md hover:bg-seaBlue hover:text-white transition-all duration-700"
                            >
                              No, cancel
                            </button>
                            <button
                              onClick={() => handleDelete(users._id)}
                              className="bg-yellow text-white px-4 py-2 rounded-md hover:bg-seaBlue hover:text-white transition-all duration-700"
                            >
                              Yes, I,m sure
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
