import React from "react";
import Container from "../Container/Container";
import Image from "next/image";
import logo from "../../assets/images/real-estate-logo.png";
import { FaFacebook, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: "url('/footerBg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <div className="md:grid grid-cols-12 gap-16 text-white py-10 md:py-24 px-3 md:px-0">
          <div className="col-span-4">
            <Image src={logo} alt="logo" width={200}></Image>
            <p className="md:pr-10 mt-5">
              There are many variations of pass Ipsum available, but the
              majority alteration in some form, by inject randomized words.
            </p>
            <ul className="flex gap-3 mt-7 text-xl">
              <li>
                <FaFacebook />
              </li>
              <li>
                <IoLogoYoutube />
              </li>
              <li>
                <FaLinkedinIn />
              </li>
              <li>
                <FaTwitterSquare />
              </li>
            </ul>
          </div>
          <div className="hidden md:block col-span-3">
            <h3 className="text-2xl font-semibold">Quick Links</h3>
            <ul className="mt-8">
              <li className="hover:text-yellow transition-all duration-700">
                Home Page
              </li>
              <li className="mt-3 hover:text-yellow transition-all duration-700">
                All Listing
              </li>
              <li className="mt-3 hover:text-yellow transition-all duration-700">
                All location
              </li>
              <li className="mt-3 hover:text-yellow transition-all duration-700">
                Package
              </li>
              <li className="mt-3 hover:text-yellow transition-all duration-700">
                Contact
              </li>
            </ul>
          </div>
          <div className="hidden md:block col-span-2">
            <h3 className="text-2xl font-semibold">Services</h3>
            <ul className="mt-8">
              <li className="hover:text-yellow transition-all duration-700">
                Duplex House
              </li>
              <li className="mt-3 hover:text-yellow transition-all duration-700">
                Guest House
              </li>
              <li className="mt-3 hover:text-yellow transition-all duration-700">
                Apartment
              </li>
              <li className="mt-3 hover:text-yellow transition-all duration-700">
                Hotels
              </li>
              <li className="mt-3 hover:text-yellow transition-all duration-700">
                Plaza
              </li>
            </ul>
          </div>
          {/* responsive */}
          <div className="md:hidden flex justify-between mt-10">
            <div className="col-span-3">
              <h3 className="text-2xl font-semibold">Quick Links</h3>
              <ul className="mt-5">
                <li className="hover:text-yellow transition-all duration-700">
                  Home Page
                </li>
                <li className="mt-3 hover:text-yellow transition-all duration-700">
                  All Listing
                </li>
                <li className="mt-3 hover:text-yellow transition-all duration-700">
                  All location
                </li>
                <li className="mt-3 hover:text-yellow transition-all duration-700">
                  Package
                </li>
                <li className="mt-3 hover:text-yellow transition-all duration-700">
                  Contact
                </li>
              </ul>
            </div>
            <div className="col-span-2">
              <h3 className="text-2xl font-semibold">Services</h3>
              <ul className="mt-5">
                <li className="hover:text-yellow transition-all duration-700">
                  Duplex House
                </li>
                <li className="mt-3 hover:text-yellow transition-all duration-700">
                  Guest House
                </li>
                <li className="mt-3 hover:text-yellow transition-all duration-700">
                  Apartment
                </li>
                <li className="mt-3 hover:text-yellow transition-all duration-700">
                  Hotels
                </li>
                <li className="mt-3 hover:text-yellow transition-all duration-700">
                  Plaza
                </li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className="col-span-3">
            <h3 className="text-2xl font-semibold mt-10 md:mt-0">
              Get In Touch
            </h3>
            <ul className="mt-5 md:mt-8">
              <li className="flex gap-3 items-center hover:text-yellow transition-all duration-700">
                <FiPhoneCall className="text-yellow text-lg" /> 01756-867585
              </li>
              <li className="flex gap-3 items-center mt-4 hover:text-yellow transition-all duration-700">
                <MdOutlineAttachEmail className="text-yellow text-lg" />{" "}
                webfuadtk@gmail.com
              </li>
              <li className="flex gap-3 items-center mt-4 hover:text-yellow transition-all duration-700">
                <CiGlobe className="text-yellow text-lg" />{" "}
                <Link href="https://fuad-talukder.vercel.app/">
                  fuad-talukder.vercel.app
                </Link>
              </li>
              <li className="flex gap-3 items-center mt-4 hover:text-yellow transition-all duration-700">
                <IoLocationOutline className="text-yellow text-lg" /> Uttor
                Kashipur, Narayanganj
              </li>
            </ul>
          </div>
        </div>
      </Container>
      {/* bottom footer */}
      <div className="bg-black p-3 md:p-0">
        <Container>
          <div className="md:flex justify-between text-white py-3 md:py-7 text-center">
            <h5>2024 © All rights reserved by webfuadk@gamil.com</h5>
            <div className="flex gap-10 mt-5 md:mt-0">
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
