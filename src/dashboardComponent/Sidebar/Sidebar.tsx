"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import logo from "../../assets/images/real-estate-logo.png";
import "./Sidebar.css";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsHouseCheck } from "react-icons/bs";

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
            activeLink === "/dashboard" ? "bg-[#ffecd2]" : ""
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
            activeLink === "/dashboard/Property" ? "bg-[#ffecd2]" : ""
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
      </ul>
    </div>
  );
};

export default Sidebar;
