"use client";
import Image from "next/image";
import proImg from "../../../../assets/images/profileImg01.jpg";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import { useGetUserQuery } from "../../../../redux/userApi/UserApi";

const Users = () => {
  const { data } = useGetUserQuery("");
  console.log(data);
  return (
    <div className="px-10 p-5 text-[#2A4766]">
      <div className="mt-10">
        <h5 className="bg-white p-5 border capitalize font-semibold text-[#2A4766]">
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
            {data?.map((users, index) => (
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
                <td className="w-1/6">User</td>
                <td className="w-1/6">
                  <div className="flex gap-5">
                    <button className="bg-[#ececec] p-2 rounded-md hover:bg-[#2A4766] hover:text-white transition-all duration-700">
                      <FiEye />
                    </button>
                    <button className="bg-[#ececec] p-2 rounded-md hover:bg-[#2A4766] hover:text-white transition-all duration-700">
                      <CiEdit />
                    </button>
                    <button className="bg-red-400 text-white p-2 rounded-md hover:bg-[#2A4766] hover:text-white transition-all duration-700">
                      <AiOutlineDelete />
                    </button>
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
