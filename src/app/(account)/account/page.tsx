import React from "react";
import Container from "../../../components/Container";
import Link from "next/link";
import { RiHome4Line } from "react-icons/ri";
import { CiLocationOn, CiShoppingCart } from "react-icons/ci";
import { LiaUserEditSolid } from "react-icons/lia";
import proImg from "../../../assets/images/proImg.jpg";
import Image from "next/image";
import { IoCallOutline } from "react-icons/io5";
import { RxEnvelopeClosed } from "react-icons/rx";
import { IoIosLogOut } from "react-icons/io";

const account = () => {
  return (
    <div>
      <Container>
        <div className="py-10 md:flex gap-16">
          <div>
            <ul className="md:w-96 text-white font-semibold border">
              <li className="bg-seaBlue border-b py-3">
                <Link
                  className={`flex items-center justify-between gap-3 py-1 px-3 rounded-md 
              )}`}
                  href="/dashboard"
                >
                  My Profile
                  <RiHome4Line className="text-xl" />
                </Link>
              </li>
              <li className="text-seaBlue border-b py-3 hover:bg-seaBlue hover:text-white transition-all duration-500">
                <Link
                  className={`flex items-center justify-between gap-3 py-1 px-3 rounded-md `}
                  href="/dashboard/MyProperty"
                >
                  My Orders
                  <CiShoppingCart className="text-xl" />
                </Link>
              </li>
              <li className="text-seaBlue border-b py-3 hover:bg-seaBlue hover:text-white transition-all duration-500">
                <Link
                  className={`flex items-center justify-between gap-3 py-1 px-3 rounded-md `}
                  href="/dashboard/MyProperty"
                >
                  Update Profile
                  <LiaUserEditSolid className="text-xl" />
                </Link>
              </li>
              <li className="text-seaBlue border-b py-3 hover:bg-seaBlue hover:text-white transition-all duration-500">
                <Link
                  className={`flex items-center justify-between gap-3 py-1 px-3 rounded-md `}
                  href="/dashboard/MyProperty"
                >
                  Logout
                  <IoIosLogOut className="text-xl" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:flex gap-5 border p-3 md:p-10 md:w-[752px]">
            <div>
              <Image src={proImg} alt="proImg" width={150} height={100}></Image>
            </div>
            <div className="text-light">
              <h5 className="text-seaBlue font-bold text-3xl">
                Rosalina D. William
              </h5>
              <p className="flex gap-3 items-center font-semibold mt-2">
                <span className="text-xl">
                  <CiLocationOn />
                </span>
                Brooklyn, New York, United States
              </p>
              <p className="flex gap-3 items-center font-semibold mt-2">
                <span className="text-xl">
                  <IoCallOutline />
                </span>
                +0123-456789
              </p>
              <p className="flex gap-3 items-center font-semibold mt-2">
                <span className="text-xl">
                  <RxEnvelopeClosed />
                </span>
                example@example.com
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default account;
