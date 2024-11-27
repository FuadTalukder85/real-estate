"use client";
import Image from "next/image";
import React, { useContext } from "react";
import proImg from "../../assets/images/profileImg01.jpg";
import { IoIosSearch, IoMdAddCircleOutline } from "react-icons/io";
import Link from "next/link";
import { useGetUserQuery } from "../../redux/userApi/UserApi";
import { AuthContext } from "../../Provider/AuthProvider";
const DashboardHeader = () => {
  const { data } = useGetUserQuery("");
  const { user } = useContext(AuthContext);
  const currentUser = data?.find((dt) => dt.email === user?.email);
  return (
    <div className="bg-white shadow-[rgba(0,0,0,0.2)_3px_3px_3px_0px] flex justify-between items-center px-10 py-3">
      <div className="w-[500px] flex items-center justify-between gap-3 px-4 font-semibold bg-[#f0f0f5] rounded-md">
        <input
          className="py-3 bg-[#f0f0f5] outline-none text-sm"
          placeholder="Type to Search..."
        />
        <IoIosSearch />
      </div>
      <div className="flex gap-5 items-center">
        <button className="flex gap-3 items-center bg-[#ffac37] py-2 px-3 rounded-md font-semibold text-white hover:bg-[#ffb958] hover:text-white transition-all duration-700">
          <IoMdAddCircleOutline className="text-xl" />
          <Link href="/dashboard/AddProperty">Add Property</Link>
        </button>
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full"
            src={proImg}
            alt="proImg"
            width={40}
          ></Image>
          <div>
            <h5 className="text-[#2A4766] font-semibold">
              {currentUser?.name}
            </h5>
            <h5 className="text-sm text-[#9e9fa3]">Admin</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
