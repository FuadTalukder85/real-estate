"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import {
  IoIosArrowDown,
  IoIosSearch,
  IoMdAddCircleOutline,
} from "react-icons/io";
import Link from "next/link";
import UpdateProfileModal from "../../components/Modal/UpdateProfileModal";
import useCurrentUser from "../../hooks/CurrentUser";
import { AuthContext } from "../../Provider/AuthProvider";

const DashboardHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { logOut } = useContext(AuthContext);
  const currentUser = useCurrentUser();

  if (!currentUser) {
    <p>Loading...</p>;
  }
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Handle showing the modal
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  // handle log out
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-white shadow-[rgba(0,0,0,0.2)_3px_3px_3px_0px] flex justify-between items-center px-10 py-3">
      <div className="w-[500px] flex items-center justify-between gap-3 px-4 font-semibold bg-gray-50 rounded-md">
        <input
          className="py-3 bg-gray-50 outline-none text-sm"
          placeholder="Type to Search..."
        />
        <IoIosSearch />
      </div>
      <div className="flex gap-5 items-center">
        <button className="flex gap-3 items-center bg-yellow py-3 px-4 rounded-md font-semibold text-white hover:bg-seaBlue hover:text-white transition-all duration-700">
          <Link href="/dashboard/AddProperty">Add Property</Link>
          <IoMdAddCircleOutline className="text-xl" />
        </button>
        <div className="flex items-center gap-2 relative dropdown-container">
          <Image
            className="rounded-lg"
            src={currentUser?.image}
            alt="proImg"
            width={40}
            height={40}
          />
          <div>
            <h5 className="text-seaBlue font-semibold">{currentUser?.name}</h5>
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
                    className="bg-yellow px-4 py-2 hover:bg-gray-100 hover:text-seaBlue transition-all duration-700 ease-in-out cursor-pointer"
                  >
                    Update Profile
                  </li>
                  <li
                    onClick={handleLogout}
                    className="bg-seaBlue px-4 py-2 hover:bg-gray-100 hover:text-seaBlue transition-all duration-700 ease-in-out cursor-pointer"
                  >
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
