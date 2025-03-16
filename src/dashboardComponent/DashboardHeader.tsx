"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import {
  IoIosArrowDown,
  IoIosSearch,
  IoMdAddCircleOutline,
} from "react-icons/io";
import Link from "next/link";
import UpdateProfileModal from "../components/Modal/UpdateProfileModal";
import useCurrentUser from "../hooks/CurrentUser";
import { AuthContext } from "../Provider/AuthProvider";
import { RiMenuFold2Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import gsap from "gsap";
import logo from "../assets/images/real-estate-logo.png";
import Sidebar from "./Sidebar/Sidebar";

const DashboardHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { logOut } = useContext(AuthContext);
  const currentUser = useCurrentUser();

  if (!currentUser) {
    <div className="flex items-center mt-36 justify-center">
      <p>Loading...</p>
    </div>;
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
  // gsap animation for sidebar
  useEffect(() => {
    const menuBtn = document.querySelector("#menu");
    const menuStyle = document.querySelector("#menuStyle");
    const closeMenuBtn = document.querySelector("#menuStyle #closeBtn");

    if (menuBtn && menuStyle) {
      const tl = gsap.timeline({ paused: true });
      tl.to("#menuStyle", {
        left: 0,
        duration: 0.3,
        opacity: 1,
        visibility: "visible",
      });
      tl.from("#menuStyle", {
        // x: 100,
        duration: 0.3,
        opacity: 1,
        stagger: 0.1,
      });
      // open menu
      menuBtn.addEventListener("click", () => {
        tl.play();
      });
      // close menu
      if (closeMenuBtn) {
        closeMenuBtn.addEventListener("click", () => {
          tl.reverse();
        });
      }
    }
  }, []);
  return (
    <div className="relative">
      {/* responsive sidebar start */}
      <div>
        <div className="bg-white flex md:hidden justify-between items-center py-2 px-3 md:px-0">
          <Link href="/">
            <Image src={logo} alt="logo" width={100}></Image>
          </Link>
          <div
            id="menu"
            className="bg-seaBlue text-white text-2xl px-2 py-1 rounded-md hover:bg-yellow transition-all duration-500"
          >
            <RiMenuFold2Fill />
          </div>
          <div
            id="menuStyle"
            className="absolute h-screen w-[280px] left-[-320px] top-0 overflow-hidden bg-[#F7F7F7] z-50 p-3"
          >
            <div className="flex justify-between items-center">
              <Link href="/">
                <Image src={logo} alt="logo" width={100}></Image>
              </Link>
              <div
                id="closeBtn"
                className="bg-seaBlue text-white text-xl px-2 py-1 rounded-md hover:bg-yellow transition-all duration-500"
              >
                <IoCloseSharp />
              </div>
            </div>
            <div className="mt-5">
              <Sidebar></Sidebar>
            </div>
          </div>
        </div>
      </div>
      {/* responsive sidebar end */}
      <div className="bg-white shadow-[rgba(0,0,0,0.2)_3px_3px_3px_0px] md:flex justify-between items-center px-3 md:px-10 py-3">
        <div className="flex justify-between items-center">
          <div className="w-full md:w-[500px] flex items-center justify-between gap-3 px-4 font-semibold bg-gray-50 rounded-md">
            <input
              className="py-2 md:py-3 bg-gray-50 outline-none text-sm"
              placeholder="Type to Search..."
            />
            <IoIosSearch />
          </div>
        </div>
        <div className="flex gap-5 items-center mt-4 md:mt-0">
          <button className="flex gap-1 md:gap-3 items-center bg-yellow py-2 md:py-2 px-2 md:px-4 rounded-md text-sm md:text-base md:font-semibold text-white hover:bg-seaBlue hover:text-white transition-all duration-700">
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
              <h5 className="text-seaBlue font-semibold">
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
    </div>
  );
};

export default DashboardHeader;
