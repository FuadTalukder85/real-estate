"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import logo from "../../assets/images/real-estate-logo.png";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsHouseCheck } from "react-icons/bs";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { GoPeople } from "react-icons/go";
import { PiUsersThree } from "react-icons/pi";
import { useGetUserQuery } from "../../redux/userApi/UserApi";
import { AuthContext } from "../../Provider/AuthProvider";
import { LoginInputs } from "../../types/types";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const { data } = useGetUserQuery("");
  const { user } = useContext(AuthContext);
  const currentUser = data?.find((dt: LoginInputs) => dt.email === user?.email);
  const getDynamicLink = (path: string) => {
    if (pathname === path) {
      return "bg-[#ffe8d4]";
    }
    if (
      pathname.startsWith("/dashboard/AllProperty") &&
      (path === "/dashboard/AllProperty" ||
        path === "/dashboard/AllProperty/[id]")
    ) {
      return "bg-[#ffe8d4]";
    }
    if (
      pathname.startsWith("/dashboard/AllAgent") &&
      (path === "/dashboard/AllAgent" || path === "/dashboard/AllAgent/[id]")
    ) {
      return "bg-[#ffe8d4]";
    }
  };

  return (
    <div className="h-screen px-5 py-3">
      {currentUser?.role === "Admin" ? (
        // For admin
        <ul className="text-seaBlue font-semibold">
          <li className="hidden md:block">
            <Link href="/">
              <Image
                className="mx-auto"
                src={logo}
                alt="logo"
                width={150}
              ></Image>
            </Link>
          </li>
          <li className="md:mt-10">
            <Link
              className={`flex items-center gap-3 py-1 px-3 rounded-md ${getDynamicLink(
                "/dashboard"
              )}`}
              href="/dashboard"
            >
              <MdOutlineSpaceDashboard className="text-xl" />
              Admin Dashboard
            </Link>
          </li>
          <li className="mt-3  rounded-md">
            <Link
              className={`flex items-center gap-3 py-1 px-3 rounded-md ${getDynamicLink(
                "/dashboard/AllProperty"
              )}`}
              href="/dashboard/AllProperty"
            >
              <BsHouseCheck className="text-xl" /> All Property
            </Link>
          </li>
          <li className="mt-3">
            <Link
              className={`flex items-center gap-3 py-1 px-3 rounded-md ${getDynamicLink(
                "/dashboard/AddProperty"
              )}`}
              href="/dashboard/AddProperty"
            >
              <IoMdAddCircleOutline className="text-xl" /> Add Property
            </Link>
          </li>
          <li className="mt-3">
            <Link
              className={`flex items-center gap-3 py-1 px-3 rounded-md ${getDynamicLink(
                "/dashboard/Message"
              )}`}
              href="/dashboard/Message"
            >
              <TiMessages className="text-xl" /> Message
            </Link>
          </li>
          <li className="mt-3">
            <Link
              className={`flex items-center gap-3 py-1 px-3 rounded-md ${getDynamicLink(
                "/dashboard/AllAgent"
              )}`}
              href="/dashboard/AllAgent"
            >
              <GoPeople className="text-xl" /> Agents
            </Link>
          </li>
          <li className="mt-3">
            <Link
              className={`flex items-center gap-3 py-1 px-3 rounded-md ${getDynamicLink(
                "/dashboard/Users"
              )}`}
              href="/dashboard/Users"
            >
              <PiUsersThree className="text-xl" /> Users & Role
            </Link>
          </li>
        </ul>
      ) : (
        // For agent
        <ul className="text-seaBlue font-semibold">
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
          <li className="mt-10">
            <Link
              className={`flex items-center gap-3 py-1 px-3 rounded-md ${getDynamicLink(
                "/dashboard"
              )}`}
              href="/dashboard"
            >
              <MdOutlineSpaceDashboard className="text-xl" />
              Agent Dashboard
            </Link>
          </li>
          <li className="mt-3">
            <Link
              className={`flex items-center gap-3 py-1 px-3 rounded-md ${getDynamicLink(
                "/dashboard/Property"
              )}`}
              href="/dashboard/MyProperty"
            >
              <BsHouseCheck className="text-xl" /> My Property
            </Link>
          </li>
          <li className="mt-3">
            <Link
              className={`flex items-center gap-3 py-1 px-3 rounded-md ${getDynamicLink(
                "/dashboard/AddProperty"
              )}`}
              href="/dashboard/AddProperty"
            >
              <IoMdAddCircleOutline className="text-xl" /> Add Property
            </Link>
          </li>
          <li className="mt-3">
            <Link
              className={`flex items-center gap-3 py-1 px-3 rounded-md ${getDynamicLink(
                "/dashboard/Property"
              )}`}
              href="/dashboard/Property"
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
