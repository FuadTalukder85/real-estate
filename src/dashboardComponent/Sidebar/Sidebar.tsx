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
import { useGetUserQuery } from "../../redux/userApi/UserApi";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("");
  const { data } = useGetUserQuery("");
  // const role = data?.filter((dt) => dt.role === "Admin" || dt.role === "Agent");
  // console.log("role pai nai", role);
  console.log(data);
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
      {data?.role === "Admin" ? (
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
              <MdOutlineSpaceDashboard className="text-xl" />
              Admin Dashboard
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
              activeLink === "/dashboard/Users" ? "bg-[#fffadc]" : ""
            }`}
          >
            <Link
              className="flex items-center gap-3"
              href="/dashboard/Users"
              onClick={() => handleLinkClick("/dashboard/Users")}
            >
              <PiUsersThree className="text-xl" /> Users
            </Link>
          </li>
        </ul>
      ) : (
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
              <MdOutlineSpaceDashboard className="text-xl" />
              Agent Dashboard
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
              activeLink === "/dashboard/Users" ? "bg-[#fffadc]" : ""
            }`}
          >
            <Link
              className="flex items-center gap-3"
              href="/dashboard/Users"
              onClick={() => handleLinkClick("/dashboard/Users")}
            >
              <PiUsersThree className="text-xl" /> Users
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
