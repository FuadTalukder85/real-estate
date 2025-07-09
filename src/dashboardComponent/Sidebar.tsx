"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import logo from "../assets/images/real-estate-logo.png";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsHouseCheck } from "react-icons/bs";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { GoPeople } from "react-icons/go";
import { PiUsersThree } from "react-icons/pi";
import { useGetUserQuery } from "../redux/userApi/UserApi";
import { AuthContext } from "../Provider/AuthProvider";
import { LoginInputs } from "../types/types";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const { data } = useGetUserQuery("");
  const { user } = useContext(AuthContext);
  const currentUser = data?.find((dt: LoginInputs) => dt.email === user?.email);

  const isActive = (path: string) => {
    if (pathname === path) return "bg-[#FFFFFF] text-yellow";
    if (
      pathname.startsWith("/dashboard/AllProperty") &&
      ["/dashboard/AllProperty", "/dashboard/AllProperty/[id]"].includes(path)
    )
      return "bg-[#FFFFFF] text-yellow";
    if (
      pathname.startsWith("/dashboard/AllAgent") &&
      ["/dashboard/AllAgent", "/dashboard/AllAgent/[id]"].includes(path)
    )
      return "bg-[#FFFFFF] text-yellow";
    return "";
  };

  const adminMenu = [
    {
      href: "/dashboard",
      label: "Admin Dashboard",
      icon: <MdOutlineSpaceDashboard />,
    },
    {
      href: "/dashboard/AllProperty",
      label: "All Property",
      icon: <BsHouseCheck />,
    },
    {
      href: "/dashboard/AddProperty",
      label: "Add Property",
      icon: <IoMdAddCircleOutline />,
    },
    { href: "/dashboard/Message", label: "Message", icon: <TiMessages /> },
    { href: "/dashboard/AllAgent", label: "Agents", icon: <GoPeople /> },
    { href: "/dashboard/Users", label: "Users & Role", icon: <PiUsersThree /> },
  ];

  const agentMenu = [
    {
      href: "/dashboard",
      label: "Agent Dashboard",
      icon: <MdOutlineSpaceDashboard />,
    },
    {
      href: "/dashboard/MyProperty",
      label: "My Property",
      icon: <BsHouseCheck />,
    },
    {
      href: "/dashboard/AddProperty",
      label: "Add Property",
      icon: <IoMdAddCircleOutline />,
    },
    { href: "/dashboard/Property", label: "Message", icon: <TiMessages /> },
  ];

  const menu = currentUser?.role === "Admin" ? adminMenu : agentMenu;
  const textColor =
    currentUser?.role === "Admin" ? "text-[#687F8A]" : "text-seaBlue";

  return (
    <div className="h-screen fixed w-[250px] md:w-[15%] px-5 py-3 md:bg-[#1C252E] md:border-r-2 border-[#d8dadf]">
      <ul className={`font-semibold ${textColor}`}>
        <li className="hidden md:block">
          <Link href="/">
            <Image className="mx-auto" src={logo} alt="logo" width={150} />
          </Link>
        </li>
        {menu.map((item, index) => (
          <li
            className={index === 0 ? "md:mt-10 mt-10" : "mt-3"}
            key={item.href}
          >
            <Link
              href={item.href}
              className={`flex items-center gap-3 py-1 md:px-3 rounded-[4px] ${isActive(
                item.href
              )}`}
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
