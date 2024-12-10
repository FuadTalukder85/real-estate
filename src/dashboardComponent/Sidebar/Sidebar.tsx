"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import logo from "../../assets/images/real-estate-logo.png";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsHouseCheck } from "react-icons/bs";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { GoPeople } from "react-icons/go";
import { PiUsersThree } from "react-icons/pi";
import { useGetUserQuery } from "../../redux/userApi/UserApi";
import { AuthContext } from "../../Provider/AuthProvider";
import "./Sidebar.css";
import { LoginInputs } from "../../types/types";

const Sidebar = () => {
  const { data } = useGetUserQuery("");
  const { user } = useContext(AuthContext);
  const [activeLink, setActiveLink] = useState("");
  const currentUser = data?.find((dt: LoginInputs) => dt.email === user?.email);
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

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    localStorage.setItem("activeLink", link);
  };

  return (
    <div className="sidebar h-screen px-5 py-3">
      {currentUser?.role === "Admin" ? (
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
              activeLink === "/dashboard/AllProperty" ? "bg-[#fffadc]" : ""
            }`}
          >
            <Link
              className="flex items-center gap-3"
              href="/dashboard/AllProperty"
              onClick={() => handleLinkClick("/dashboard/AllProperty")}
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
              activeLink === "/dashboard/Message" ? "bg-[#fffadc]" : ""
            }`}
          >
            <Link
              className="flex items-center gap-3"
              href="/dashboard/Message"
              onClick={() => handleLinkClick("/dashboard/Message")}
            >
              <TiMessages className="text-xl" /> Message
            </Link>
          </li>
          <li
            className={`mt-2 p-2 px-4 rounded-md ${
              activeLink === "/dashboard/AllAgent" ? "bg-[#fffadc]" : ""
            }`}
          >
            <Link
              className="flex items-center gap-3"
              href="/dashboard/AllAgent"
              onClick={() => handleLinkClick("/dashboard/AllAgent")}
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
              <PiUsersThree className="text-xl" /> Users & Role
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
              <BsHouseCheck className="text-xl" /> My Property
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
          </li>{" "}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
