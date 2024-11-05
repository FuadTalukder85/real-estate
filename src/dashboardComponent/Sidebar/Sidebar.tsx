"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import logo from "../../assets/images/real-estate-logo.png";
import "./Sidebar.css";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsHouseCheck } from "react-icons/bs";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { GoPeople } from "react-icons/go";
import { PiUsersThree } from "react-icons/pi";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { pathname } = window.location;
      if (pathname === "/dashboard") {
        setActiveLink("/dashboard");
      } else {
        setActiveLink(pathname);
      }
    }
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    localStorage.setItem("activeLink", link);
  };

  return (
    <div className="sidebar h-screen px-5 py-3">
      <ul className="text-[#2A4766] font-semibold">
        <li>
          <Link href="/">
            <Image
              className="mx-auto"
              src={logo}
              alt="logo"
              width={150}
            ></Image>
          </Link>
        </li>
        <li
          className={`mt-10 p-2 px-4 rounded-md ${
            activeLink === "/dashboard" ? "bg-[#fffadc]" : ""
          }`}
        >
          <Link
            className="flex items-center gap-3"
            href="/dashboard"
            onClick={() => handleLinkClick("/dashboard")}
          >
            <MdOutlineSpaceDashboard className="text-xl" /> Dashboard
          </Link>
        </li>
        <li
          className={`mt-2 p-2 px-4 rounded-md ${
            activeLink === "/dashboard/Property" ? "bg-[#fffadc]" : ""
          }`}
        >
          <Link
            className="flex items-center gap-3"
            href="/dashboard/Property"
            onClick={() => handleLinkClick("/dashboard/Property")}
          >
            <BsHouseCheck className="text-xl" /> Property
          </Link>
        </li>
        <li
          className={`mt-2 p-2 px-4 rounded-md ${
            activeLink === "/dashboard/AddProperty" ? "bg-[#fffadc]" : ""
          }`}
        >
          <Link
            className="flex items-center gap-3"
            href="/dashboard/AddProperty"
            onClick={() => handleLinkClick("/dashboard/AddProperty")}
          >
            <IoMdAddCircleOutline className="text-xl" /> Add Property
          </Link>
        </li>
        <li
          className={`mt-2 p-2 px-4 rounded-md ${
            activeLink === "/dashboard/Property" ? "bg-[#fffadc]" : ""
          }`}
        >
          <Link
            className="flex items-center gap-3"
            href="/dashboard/Property"
            onClick={() => handleLinkClick("/dashboard/Property")}
          >
            <TiMessages className="text-xl" /> Message
          </Link>
        </li>
        <li
          className={`mt-2 p-2 px-4 rounded-md ${
            activeLink === "/dashboard/Property" ? "bg-[#fffadc]" : ""
          }`}
        >
          <Link
            className="flex items-center gap-3"
            href="/dashboard/Property"
            onClick={() => handleLinkClick("/dashboard/Property")}
          >
            <GoPeople className="text-xl" /> Agents
          </Link>
        </li>
        <li
          className={`mt-2 p-2 px-4 rounded-md ${
            activeLink === "/dashboard/Property" ? "bg-[#fffadc]" : ""
          }`}
        >
          <Link
            className="flex items-center gap-3"
            href="/dashboard/Property"
            onClick={() => handleLinkClick("/dashboard/Property")}
          >
            <PiUsersThree className="text-xl" /> Users
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
