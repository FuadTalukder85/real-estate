import React from "react";
import "./blog.css";
import Image from "next/image";
import blogImg from "../../../assets/images/blogImg/blog01.jpg";
import Container from "../../../components/Container/Container";
import { CgProfile } from "react-icons/cg";
import { VscComment } from "react-icons/vsc";
import { SlCalender } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
const page = () => {
  return (
    <div className="">
      <div className="blog-banner py-28">
        <h5 className="text-white text-center font-semibold text-4xl">
          - Blog -
        </h5>
      </div>
      <Container>
        {/* blog card */}
        <div className="flex grid-cols-12 gap-5 mt-16">
          <div className="col-span-4 drop-shadow-xl bg-white">
            <div className="relative flex justify-center">
              <Image
                className=" rounded-t-md"
                src={blogImg}
                alt="property01"
              ></Image>
              <h5 className="absolute bottom-5 flex items-center gap-3 ps-5 py-3 font-semibold bg-[#ffffff9c] backdrop-blur-sm w-full">
                <SlCalender /> Nov 15, 2024
              </h5>
            </div>
            <div className="p-5">
              <h4 className="text-xl text-[#2A4766] py-2 font-semibold capitalize">
                How to be a Great Host
              </h4>
              <div className="flex gap-3 items-center text-[#ABACB0]">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod
                </span>
              </div>
            </div>
            <div className="border-t">
              <div className="py-4 px-5 flex gap-3 items-center justify-between text-[#ABACB0]">
                <span className="flex gap-3 items-center">
                  <CgProfile />
                  Admin
                </span>
                <h4 className="flex gap-3 items-center font-semibold">
                  <VscComment /> 03
                </h4>
              </div>
            </div>
          </div>
          {/* card 02 */}
          <div className="col-span-4 drop-shadow-xl bg-white">
            <div className="relative flex justify-center">
              <Image
                className=" rounded-t-md"
                src={blogImg}
                alt="property01"
              ></Image>
              <h5 className="absolute bottom-5 flex items-center gap-3 ps-5 py-3 font-semibold bg-[#ffffff9c] backdrop-blur-sm w-full">
                <SlCalender /> Nov 15, 2024
              </h5>
            </div>
            <div className="p-5">
              <h4 className="text-xl text-[#2A4766] py-2 font-semibold capitalize">
                How to be a Great Host
              </h4>
              <div className="flex gap-3 items-center text-[#ABACB0]">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod
                </span>
              </div>
            </div>
            <div className="border-t">
              <div className="py-4 px-5 flex gap-3 items-center justify-between text-[#ABACB0]">
                <span className="flex gap-3 items-center">
                  <CgProfile />
                  Admin
                </span>
                <h4 className="flex gap-3 items-center font-semibold">
                  <VscComment /> 03
                </h4>
              </div>
            </div>
          </div>
          {/* search */}
          <div className="col-span-4 ps-5">
            <h5 className="text-xl font-bold text-[#2A4766]">Search</h5>
            <li className="flex items-center bg-white mt-5">
              <input
                className="-mr-10 border-2 w-96 py-3 px-4 outline-none text-sm"
                placeholder="Search"
              />
              <FaSearch className="text-[#ABACB0]" />
            </li>
            {/* resent post */}
            <h5 className="text-xl font-bold text-[#2A4766] mt-10">
              Recent Posts
            </h5>
            <div className="w-96 mt-5 bg-[#F7F7F7] p-5 rounded-md">
              {/* 01 */}
              <div className="flex items-center gap-5">
                <Image
                  className="rounded-md"
                  src={blogImg}
                  alt="blogImg"
                  width={130}
                ></Image>
                <div>
                  <h5 className="flex gap-3 items-center">
                    <SlCalender /> Nov 15, 2024
                  </h5>
                  <p className="font-semibold text-[#2A4766]">
                    Key Real Estate Trends to Watch in 2024
                  </p>
                </div>
              </div>
              {/* 02 */}
              <div className="flex items-center gap-5 mt-5">
                <Image
                  className="rounded-md"
                  src={blogImg}
                  alt="blogImg"
                  width={130}
                ></Image>
                <div>
                  <h5 className="flex gap-3 items-center">
                    <SlCalender /> Nov 15, 2024
                  </h5>
                  <p className="font-semibold text-[#2A4766]">
                    Key Real Estate Trends to Watch in 2024
                  </p>
                </div>
              </div>
              {/* 03 */}
              <div className="flex items-center gap-5 mt-5">
                <Image
                  className="rounded-md"
                  src={blogImg}
                  alt="blogImg"
                  width={130}
                ></Image>
                <div>
                  <h5 className="flex gap-3 items-center">
                    <SlCalender /> Nov 15, 2024
                  </h5>
                  <p className="font-semibold text-[#2A4766]">
                    Key Real Estate Trends to Watch in 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
