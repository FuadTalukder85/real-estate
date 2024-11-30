"use client";
import React, { useContext, useEffect, useState, useRef } from "react";
import TopHeader from "./TopHeader";
import Container from "../Container/Container";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { IoLogoYoutube, IoMdClose } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import gsap from "gsap";
import LoginForm from "../Form/LoginForm/LoginForm";
import RegisterForm from "../Form/RegisterForm/RegisterForm";
import { AuthContext } from "../../Provider/AuthProvider";
import UpdateProfileModal from "../Modal/UpdateProfileModal";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  // Dropdown visibility state
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Reference for dropdown container
  const dropdownRef = useRef(null);
  const profileBtnRef = useRef(null);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  // GSAP animations for modals
  useEffect(() => {
    const initAnimation = (triggerSelector, modalSelector, closeSelector) => {
      const trigger = document.querySelector(triggerSelector);
      const modal = document.querySelector(modalSelector);
      const close = document.querySelector(closeSelector);

      if (trigger && modal) {
        const tl = gsap.timeline({ paused: true });

        tl.fromTo(
          modal,
          { opacity: 0, visibility: "hidden", y: -50 },
          { opacity: 1, visibility: "visible", y: 0, duration: 0.5 }
        );
        trigger.addEventListener("click", () => tl.play());
        if (close) {
          close.addEventListener("click", () => tl.reverse());
        }
      }
    };

    // Initialize GSAP animations for login and register modals
    initAnimation("#login", "#loginForm", "#loginForm i");
    initAnimation("#register", "#registerForm", "#registerClose");
  }, []);

  // Toggle Profile dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !profileBtnRef.current.contains(event.target)
      ) {
        setDropdownVisible(false); // Close dropdown
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // handle show profile update modal
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <TopHeader />
      <div className="bg-[#2A4766]">
        <Container>
          <div className="flex justify-between items-center text-white py-3">
            <div>
              <ul className="gap-5 flex uppercase font-semibold text-sm">
                <li className="flex items-center">
                  <Link href="/">Home</Link>
                  <span className="ps-5 border-r h-3"></span>
                </li>
                <li className="flex items-center">
                  <Link href="/Property">Property</Link>
                  <span className="ps-5 border-r h-3"></span>
                </li>
                <li className="flex items-center">
                  <Link href="/Agent">Agent</Link>
                  <span className="ps-5 border-r h-3"></span>
                </li>
                <li className="flex items-center">
                  <Link href="/Blog">Blog</Link>
                  <span className="ps-5 border-r h-3"></span>
                </li>
                <li className="flex items-center">
                  <Link href="/Contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex gap-3 items-center">
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <IoLogoYoutube />
                </li>
                <li>
                  <FaLinkedinIn />
                </li>
                <li className="flex items-center">
                  <FaTwitterSquare />
                  <span className="ps-8 border-r h-3"></span>
                </li>
                {user ? (
                  <>
                    <div className="relative">
                      <button
                        className="uppercase font-semibold"
                        onClick={toggleDropdown}
                        ref={profileBtnRef}
                      >
                        Profile
                      </button>
                      {isDropdownVisible && (
                        <ul
                          ref={dropdownRef}
                          className="absolute w-36 right-0 bg-white text-black px-3 py-2 rounded-md shadow-md mt-2 z-10"
                        >
                          <li
                            onClick={() => {
                              handleShowModal();
                              setDropdownVisible(false);
                            }}
                            className="text-sm font-semibold block hover:text-[#ffac37] cursor-pointer"
                          >
                            Update Profile
                          </li>
                          <li>
                            <button
                              onClick={handleLogout}
                              className="text-sm font-semibold block hover:text-[#ffac37] cursor-pointer"
                            >
                              Logout
                            </button>
                          </li>
                          <li>
                            <Link
                              href="/dashboard"
                              className="text-sm font-semibold block hover:text-[#ffac37] cursor-pointer"
                            >
                              Dashboard
                            </Link>
                          </li>
                        </ul>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex">
                      <li className="ps-5 text-sm font-semibold">
                        <button
                          className="pe-3 uppercase hover:text-[#ffac37] transition-all duration-700 ease-in-out"
                          id="login"
                        >
                          Sign in
                        </button>
                        {/* login modal start */}
                        <div
                          id="loginForm"
                          className="overflow-hidden absolute right-[360px] bg-white drop-shadow-md w-96 text-black px-5 py-5 mt-3"
                          style={{ opacity: 0, visibility: "hidden" }}
                        >
                          <div>
                            <div className="flex justify-between items-center border-b-2 border-[#F7F7F7]">
                              <h5 className="text-[#ffac37] text-lg font-semibold pb-2">
                                Welcome to HD LUXURY
                              </h5>
                              <i className="text-2xl">
                                <IoMdClose className="p-1 rounded-md cursor-pointer hover:bg-[#ABACB0]" />
                              </i>
                            </div>
                            <div>
                              <LoginForm></LoginForm>
                            </div>
                          </div>
                        </div>
                        {/* login modal end */}
                      </li>
                      <li className="text-sm font-semibold">
                        <div>
                          /
                          <button
                            className="ps-3 uppercase hover:text-[#ffac37] transition-all duration-700 ease-in-out"
                            id="register"
                          >
                            Register
                          </button>
                          {/* register modal start */}
                          <div
                            id="registerForm"
                            className="overflow-hidden absolute right-[360px] bg-white drop-shadow-md w-96 text-black px-5 py-5 mt-3"
                            style={{ opacity: 0, visibility: "hidden" }}
                          >
                            <div>
                              <div className="flex justify-between items-center border-b-2 border-[#F7F7F7]">
                                <h5 className="text-[#ffac37] text-lg font-semibold pb-2">
                                  Please Register
                                </h5>
                                <div id="registerClose" className="text-2xl">
                                  <IoMdClose className="p-1 rounded-md cursor-pointer hover:bg-[#ABACB0]" />
                                </div>
                              </div>
                              <div>
                                <RegisterForm></RegisterForm>
                              </div>
                            </div>
                          </div>
                          {/* register modal end */}
                        </div>
                      </li>
                    </div>
                  </>
                )}
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="relative">
        {/* your content */}
        {showModal && (
          <div className="absolute right-96 top-20 z-50">
            <UpdateProfileModal
              onClose={() => {
                setShowModal(false);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
