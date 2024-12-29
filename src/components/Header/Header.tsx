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
import { usePathname } from "next/navigation";
import { RiMenuFold2Fill } from "react-icons/ri";

const Header = () => {
  const pathName = usePathname();
  const { user, logOut } = useContext(AuthContext);

  // Dropdown visibility state
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Reference for dropdown container
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const profileBtnRef = useRef<HTMLButtonElement | null>(null);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  // GSAP animations for modals
  useEffect(() => {
    const initAnimation = (
      triggerSelector: string,
      modalSelector: string,
      closeSelector: string
    ) => {
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
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        profileBtnRef.current &&
        !profileBtnRef.current.contains(event.target as Node)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // handle show profile update modal
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const getDynamicLink = (path: string) => {
    if (pathName === path) {
      return "text-seaBlue bg-white px-2 rounded-sm font-bold";
    }
    if (
      pathName.startsWith("/Property") &&
      (path === "/Property" || path === "/Property/[id]")
    ) {
      return "text-seaBlue bg-white px-2 rounded-sm font-bold";
    }
    if (
      pathName.startsWith("/Agent") &&
      (path === "/Agent" || path === "/Agent/[id]")
    ) {
      return "text-seaBlue bg-white px-2 rounded-sm font-bold";
    }
    return "text-white";
  };
  // gsap animation for menu
  useEffect(() => {
    const menuBtn = document.querySelector("#menu");
    const menuStyle = document.querySelector("#menuStyle");
    const closeMenuBtn = document.querySelector("#menuStyle #closeBtn");

    if (menuBtn && menuStyle) {
      const tl = gsap.timeline({ paused: true });
      tl.to("#menuStyle", {
        left: 0,
        duration: 0.5,
        opacity: 1,
        visibility: "visible",
      });
      tl.from("#menuStyle li", {
        x: 100,
        duration: 0.6,
        opacity: 0,
        stagger: 0.2,
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
    <div>
      <TopHeader />
      <div className="bg-seaBlue px-3 md:px-0">
        <Container>
          {/* responsive menu */}
          {/* error */}
          <div className="flex md:hidden justify-between items-center py-2">
            <div
              id="menu"
              className="bg-white text-2xl px-2 py-1 rounded-md hover:bg-green-200 transition-all duration-500"
            >
              <RiMenuFold2Fill />
            </div>
            <ul>
              <li className="text-white">Sign In</li>
            </ul>
            <div
              id="menuStyle"
              className="absolute h-full w-[320px] left-[-320px] p-5 top-0 bg-green-50"
            >
              <div className="flex justify-between items-center">
                logo
                <div
                  id="closeBtn"
                  className="px-2 bg-primary text-white rounded-md hover:bg-black transition-all duration-500"
                >
                  X
                </div>
              </div>
              <ul className="mt-5">
                <li className="font-normal text-black border-y border-gray-200 py-2">
                  <span>Home</span>
                </li>
                <li className="font-normal text-black border-b border-gray-200 py-2">
                  <span>For Business</span>
                </li>
                <li className="font-normal text-black border-b border-gray-200 py-2">
                  <span>For Investors</span>
                </li>
                <li className="font-normal text-black border-b border-gray-200 py-2">
                  <span>Financing Rates</span>
                </li>
                <li className="font-normal text-black border-b border-gray-200 py-2">
                  <select className="w-20 outline-none">
                    <option value="">Others</option>
                    <option value="Sale">Sale</option>
                    <option value="Featured">Featured</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden md:flex justify-between items-center py-1 md:py-3">
            <div>
              <ul className="gap-2 flex uppercase font-semibold text-sm">
                <li className="flex items-center">
                  <Link
                    href="/"
                    className={`px-2 rounded-sm font-bold hover:bg-white hover:text-seaBlue transition-all duration-500 ${getDynamicLink(
                      "/"
                    )}`}
                  >
                    Home
                  </Link>
                  <span className="ps-2 border-r h-3"></span>
                </li>
                <li className="flex items-center">
                  <Link
                    href="/Property"
                    className={`px-2 rounded-sm font-bold hover:bg-white hover:text-seaBlue transition-all duration-500 ${getDynamicLink(
                      "/Property"
                    )}`}
                  >
                    Property
                  </Link>
                  <span className="ps-2 border-r h-3"></span>
                </li>
                <li className="flex items-center">
                  <Link
                    href="/Featured"
                    className={`px-2 rounded-sm font-bold hover:bg-white hover:text-seaBlue transition-all duration-500 ${getDynamicLink(
                      "/Featured"
                    )}`}
                  >
                    Featured
                  </Link>
                  <span className="ps-2 border-r h-3"></span>
                </li>
                <li className="flex items-center">
                  <Link
                    href="/Agent"
                    className={`px-2 rounded-sm font-bold hover:bg-white hover:text-seaBlue transition-all duration-500 ${getDynamicLink(
                      "/Agent"
                    )}`}
                  >
                    Agent
                  </Link>
                  <span className="ps-2 border-r h-3"></span>
                </li>
                <li className="flex items-center">
                  <Link
                    href="/Blog"
                    className={`px-2 rounded-sm font-bold hover:bg-white hover:text-seaBlue transition-all duration-500 ${getDynamicLink(
                      "/Blog"
                    )}`}
                  >
                    Blog
                  </Link>
                  <span className="ps-2 border-r h-3"></span>
                </li>
                <li className="flex items-center">
                  <Link
                    href="/AboutUs"
                    className={`px-2 rounded-sm font-bold hover:bg-white hover:text-seaBlue transition-all duration-500 ${getDynamicLink(
                      "/AboutUs"
                    )}`}
                  >
                    About Us
                  </Link>
                  <span className="ps-2 border-r h-3"></span>
                </li>
                <li className="flex items-center">
                  <Link
                    href="/Contact"
                    className={`px-2 rounded-sm font-bold hover:bg-white hover:text-seaBlue transition-all duration-500 ${getDynamicLink(
                      "/Contact"
                    )}`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex gap-3 items-center text-white">
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
                          className="absolute w-44 right-0 bg-white text-seaBlue font-semibold rounded-md shadow-md mt-2"
                        >
                          <li
                            onClick={() => {
                              handleShowModal();
                              setDropdownVisible(false);
                            }}
                            className="px-4 py-2 border-b border-b-yellow  hover:bg-gray-100 hover:rounded-t-md hover:text-yellow transition-all duration-700 ease-in-out cursor-pointer"
                          >
                            Update Profile
                          </li>
                          <li className="px-4 py-2 border-b border-b-yellow  hover:bg-gray-100 hover:rounded-t-md hover:text-yellow transition-all duration-700 ease-in-out cursor-pointer">
                            <Link href="/dashboard">Dashboard</Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100 hover:rounded-t-md hover:text-yellow transition-all duration-700 ease-in-out cursor-pointer">
                            <button onClick={handleLogout}>Logout</button>
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
                          className="pe-3 uppercase hover:text-yellow transition-all duration-700 ease-in-out"
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
                              <h5 className="text-yellow text-lg font-semibold pb-2">
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
                            className="ps-3 uppercase hover:text-yellow transition-all duration-700 ease-in-out"
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
                                <h5 className="text-yellow text-lg font-semibold pb-2">
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
        {/* update profile modal */}
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
