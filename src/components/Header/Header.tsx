import React from "react";
import TopHeader from "./TopHeader";
import Container from "../Container/Container";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <TopHeader></TopHeader>
      <div className="bg-[#2A4766]">
        <Container>
          <div className="flex justify-between items-center text-white py-3">
            <div>
              <ul className="gap-5 flex uppercase font-semibold text-sm">
                <li className="flex items-center">
                  Home
                  <span className="ps-5 border-r h-3"></span>
                </li>
                <li className="flex items-center">
                  Property
                  <span className="ps-5 border-r h-3"></span>
                </li>
                <li className="flex items-center">
                  Members
                  <span className="ps-5 border-r h-3"></span>
                </li>
                <li className="flex items-center">
                  Blog
                  <span className="ps-5 border-r h-3"></span>
                </li>
                <li className="flex items-center">Contact</li>
              </ul>
            </div>
            <div>
              <ul className="flex gap-3 uppercase items-center">
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

                <li className="ps-5">
                  <p>Sign in</p>
                </li>
                <li>
                  <p>
                    /<span className="ps-3">register</span>
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
