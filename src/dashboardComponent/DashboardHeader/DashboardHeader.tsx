import Image from "next/image";
import React from "react";
import proImg from "../../assets/images/profileImg01.jpg";
import { IoIosSearch, IoMdAddCircleOutline } from "react-icons/io";
const DashboardHeader = () => {
  return (
    <div className="bg-white shadow-[rgba(0,0,0,0.2)_3px_3px_3px_0px] flex justify-between items-center px-10 py-3">
      <div className="flex items-center gap-3 px-4 pr-12 font-semibold bg-[#fffadc] rounded-md">
        <IoIosSearch />
        <input
          className="py-2 bg-[#fffadc] outline-none text-sm"
          placeholder="Search"
        />
      </div>
      <div className="flex gap-5 items-center">
        <button className="flex gap-3 items-center bg-[#ffac37] py-2 px-3 rounded-md font-semibold text-white">
          <IoMdAddCircleOutline className="text-xl" /> Add Property
        </button>
        <Image
          className="rounded-full"
          src={proImg}
          alt="proImg"
          width={45}
        ></Image>
      </div>
    </div>
  );
};

export default DashboardHeader;
