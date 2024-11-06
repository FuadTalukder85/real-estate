"use client";
import React, { useEffect } from "react";
import TopHeader from "./TopHeader";
import Container from "../Container/Container";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { IoLogoYoutube, IoMdClose } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import gsap from "gsap";
import LoginForm from "../Form/LoginForm/LoginForm";

const Header = () => {
  useEffect(() => {
    const loginBtn = document.querySelector("#login");
    const signupForm = document.querySelector("#loginForm");
    const closeLoginForm = document.querySelector("#loginForm i");
    if (loginBtn && signupForm) {
      const tl = gsap.timeline({ paused: true });
      tl.to("#loginForm", {
        opacity: 1,
        duration: 0.5,
      });
      loginBtn.addEventListener("click", function () {
        tl.play();
      });
      if (closeLoginForm) {
        closeLoginForm.addEventListener("click", function () {
          tl.reverse();
        });
      }
    }
  }, []);

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

                <li className="ps-5 font-semibold text-sm">
                  <button
                    className="uppercase hover:text-[#ffac37] transition-all duration-700 ease-in-out"
                    id="login"
                  >
                    Sign in
                  </button>
                  {/* login modal start */}
                  <div
                    id="loginForm"
                    className="overflow-hidden absolute right-[360px] opacity-0 bg-white drop-shadow-md w-96 text-black px-5 py-5 mt-3"
                  >
                    <div>
                      <div className="flex justify-between items-center border-b-2 border-[#F7F7F7]">
                        <h5 className="text-[#2A4766] text-lg font-semibold pb-2">
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
                <li>
                  <p>
                    /
                    <span className="ps-3 font-semibold text-sm uppercase">
                      register
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
