"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import proImg from "../../assets/images/profileImg01.jpg";
import {
  IoIosArrowDown,
  IoIosSearch,
  IoMdAddCircleOutline,
} from "react-icons/io";
import Link from "next/link";
import { useGetUserQuery } from "../../redux/userApi/UserApi";
import { AuthContext } from "../../Provider/AuthProvider";
import UpdateProfileModal from "../../components/Modal/UpdateProfileModal";

const DashboardHeader = () => {
  const { data } = useGetUserQuery("");
  const { user } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const currentUser = data?.find((dt) => dt.email === user?.email);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Handle showing the modal
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="bg-white shadow-[rgba(0,0,0,0.2)_3px_3px_3px_0px] flex justify-between items-center px-10 py-3">
      <div className="w-[500px] flex items-center justify-between gap-3 px-4 font-semibold bg-[#f0f0f5] rounded-md">
        <input
          className="py-2 bg-[#f0f0f5] outline-none text-sm"
          placeholder="Type to Search..."
        />
        <IoIosSearch />
      </div>
      <div className="flex gap-5 items-center">
        <button className="flex gap-3 items-center bg-[#ffac37] py-2 px-3 rounded-md font-semibold text-white hover:bg-[#ffb958] hover:text-white transition-all duration-700">
          <IoMdAddCircleOutline className="text-xl" />
          <Link href="/dashboard/AddProperty">Add Property</Link>
        </button>
        <div className="flex items-center gap-2 relative dropdown-container">
          <Image
            className="rounded-full"
            src={proImg}
            alt="proImg"
            width={40}
          />
          <div>
            <h5 className="text-[#2A4766] font-semibold">
              {currentUser?.name}
            </h5>
            <h5
              className="flex items-center gap-1 text-sm text-[#9e9fa3] -mt-1 cursor-pointer"
              onClick={toggleDropdown}
            >
              {currentUser?.role}
              <IoIosArrowDown />
            </h5>
            {isDropdownOpen && (
              <div className="absolute top-full mt-3 right-0 bg-white border border-gray-200 rounded-md shadow-lg w-36">
                <ul className="text-white font-semibold">
                  <li
                    onClick={() => {
                      handleShowModal();
                      setIsDropdownOpen(false);
                    }}
                    className="bg-[#ffac37] px-4 py-2 hover:bg-gray-100 hover:text-[#2A4766] transition-all duration-700 ease-in-out cursor-pointer"
                  >
                    Update Profile
                  </li>
                  <li className="bg-[#2A4766] px-4 py-2 hover:bg-gray-100 hover:text-[#2A4766] transition-all duration-700 ease-in-out cursor-pointer">
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {showModal && (
        <UpdateProfileModal
          onClose={() => {
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
};

export default DashboardHeader;
