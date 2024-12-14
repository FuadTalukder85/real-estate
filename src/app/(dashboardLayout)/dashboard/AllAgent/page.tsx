"use client";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import {
  useDeleteUserMutation,
  useGetUserQuery,
} from "../../../../redux/userApi/UserApi";
import Link from "next/link";
import { LoginInputs } from "../../../../types/types";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
// import { useGetPropertyQuery } from "../../../../redux/propertyApi/PropertyApi";

const AllAgent = () => {
  // const { data: property } = useGetPropertyQuery("");
  const { data, refetch } = useGetUserQuery("");
  const agent = data?.filter((dt: LoginInputs) => dt?.role === "Agent");

  // Count properties for each unique user email
  // if (property && data) {
  //   const userEmails = data.map((user: LoginInputs) => user.email);
  //   const emailCounts = userEmails.reduce(
  //     (acc: Record<string, number>, email) => {
  //       const count = property.filter((prop) => prop.email === email).length;
  //       acc[email] = count;
  //       return acc;
  //     },
  //     {}
  //   );
  //   console.log("Email counts:", emailCounts);
  // }
  const [deleteUser] = useDeleteUserMutation();
  // delete modal
  const [isOpen, setIsOpen] = useState(false);
  const handleDelete = (id: string) => {
    deleteUser(id);
    refetch();
    toast.success("Agent deleted successed", { position: "top-right" });
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
          All agent list
        </h5>
        {/* users table*/}
        <table className="w-full border-collapse">
          <thead className="bg-[#f2f2f3]">
            <tr className="flex gap-3 justify-between font-medium p-2 px-5 pr-16 border-s border-r">
              <th className="py-2 text-left font-medium">*</th>
              <th className="w-3/12 py-2 text-left font-medium">
                User Photo and Name
              </th>
              <th className="w-2/12 py-2 text-left font-medium">Email</th>
              <th className="w-2/12 py-2 text-left font-medium">Contact</th>
              <th className="w-2/12 py-2 text-left font-medium">Address</th>
              <th className="w-3/12 py-2 text-left font-medium">Join Date</th>
              {/* <th className="w-2/12 py-2 text-left font-medium">
                Total Property
              </th> */}
              <th className="w-2/12 py-2 text-left font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {agent?.map((users: LoginInputs, index: number) => (
              <tr
                key={index}
                className="flex gap-3 justify-between items-center p-2 border-s border-r border-b bg-white px-5 pr-16"
              >
                <td className="">{index + 1}.</td>
                <td className="w-3/12 flex items-center space-x-3">
                  <Image
                    className="rounded-lg"
                    src={users?.image}
                    alt="proImg"
                    width={40}
                    height={40}
                  ></Image>
                  <span className=" font-medium">{users?.name}</span>
                </td>
                <td className="w-2/12">{users?.email}</td>
                <td className="w-2/12">{users?.number}</td>
                <td className="w-2/12">{users?.address}</td>
                <td className="w-3/12">{users?.date}</td>
                {/* <td className="w-2/12">10</td> */}
                <td className="w-2/12">
                  <div className="flex gap-5">
                    <Link href={`/dashboard/AllAgent/${users?._id}`}>
                      <button className="bg-[#ececec] p-2 rounded-md hover:bg-seaBlue hover:text-white transition-all duration-700">
                        <FiEye />
                      </button>
                    </Link>
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

export default AllAgent;
