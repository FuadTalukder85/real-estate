import React from "react";
import "./Footer.css";
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
    <div className="footer-img">
      <Container>
        <div className="grid grid-cols-12 gap-16 text-white py-24">
          <div className="col-span-4">
            <Image src={logo} alt="logo" width={200}></Image>
            <p className="pr-10 mt-5">
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
          <div className="col-span-3">
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
          <div className="col-span-2">
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
          <div className="col-span-3">
            <h3 className="text-2xl font-semibold">Get In Touch</h3>
            <ul className="mt-8">
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
      <div className="bg-black">
        <Container>
          <div className="flex justify-between text-white py-7">
            <h5>2024 © All rights reserved by Real Estate</h5>
            <div className="flex gap-10">
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
