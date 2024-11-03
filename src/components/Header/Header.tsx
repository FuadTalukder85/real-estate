import React from "react";
import TopHeader from "./TopHeader";
import Container from "../Container/Container";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

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

                <li className="ps-5 font-semibold text-sm">
                  <p>Sign in</p>
                </li>
                <li>
                  <p>
                    /
                    <span className="ps-3 font-semibold text-sm">register</span>
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
