"use client";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import { useGetUserQuery } from "../../../../redux/userApi/UserApi";
import Link from "next/link";

const AllAgent = () => {
  const { data } = useGetUserQuery("");
  const agent = data?.filter((dt: any) => dt?.role === "Agent");

  return (
    <div className="px-10 p-5 text-[#2A4766]">
      <div className="mt-10">
        <h5 className="bg-white p-5 border capitalize font-semibold text-[#2A4766]">
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
              <th className="w-2/12 py-2 text-left font-medium">
                Total Property
              </th>
              <th className="w-2/12 py-2 text-left font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {agent?.map((users: any, index: number) => (
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
                <td className="w-2/12">10</td>
                <td className="w-2/12">
                  <div className="flex gap-5">
                    <Link href={`/dashboard/AllAgent/${users?._id}`}>
                      <button className="bg-[#ececec] p-2 rounded-md hover:bg-[#2A4766] hover:text-white transition-all duration-700">
                        <FiEye />
                      </button>
                    </Link>
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

export default AllAgent;
