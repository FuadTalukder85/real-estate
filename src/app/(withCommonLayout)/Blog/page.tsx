import React from "react";
import Image from "next/image";
import blogImg from "../../../assets/images/blogImg/blog01.jpg";
import Container from "../../../components/Container";
import { CgProfile } from "react-icons/cg";
import { VscComment } from "react-icons/vsc";
import { SlCalender } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
const page = () => {
  return (
    <div className="">
      <div
        className="py-10 md:py-36"
        style={{
          backgroundImage: "url('/miniBanner.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h5 className="text-white text-center font-semibold text-2xl md:text-4xl">
          - Blog -
        </h5>
      </div>
      <Container>
        {/* blog card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-5 md:mt-16 p-3 md:p-0">
          <div className="col-span-8 order-2 md:order-1 md:grid grid-cols-2 gap-5">
            {/* card 01 */}
            <div className="drop-shadow-xl bg-white">
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
                <h4 className="text-xl text-seaBlue py-2 font-semibold capitalize">
                  How to be a Great Host
                </h4>
                <div className="flex gap-3 items-center text-light">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod
                  </span>
                </div>
              </div>
              <div className="border-t">
                <div className="py-4 px-5 flex gap-3 items-center justify-between text-light">
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
            <div className="drop-shadow-xl bg-white mt-3 md:mt-0">
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
                <h4 className="text-xl text-seaBlue py-2 font-semibold capitalize">
                  How to be a Great Host
                </h4>
                <div className="flex gap-3 items-center text-light">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod
                  </span>
                </div>
              </div>
              <div className="border-t">
                <div className="py-4 px-5 flex gap-3 items-center justify-between text-light">
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
            <div className="drop-shadow-xl bg-white mt-3 md:mt-0">
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
                <h4 className="text-xl text-seaBlue py-2 font-semibold capitalize">
                  How to be a Great Host
                </h4>
                <div className="flex gap-3 items-center text-light">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod
                  </span>
                </div>
              </div>
              <div className="border-t">
                <div className="py-4 px-5 flex gap-3 items-center justify-between text-light">
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
            <div className="drop-shadow-xl bg-white mt-3 md:mt-0">
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
                <h4 className="text-xl text-seaBlue py-2 font-semibold capitalize">
                  How to be a Great Host
                </h4>
                <div className="flex gap-3 items-center text-light">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod
                  </span>
                </div>
              </div>
              <div className="border-t">
                <div className="py-4 px-5 flex gap-3 items-center justify-between text-light">
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
          </div>
          {/* search */}
          <div className="col-span-4 order-1 md:order-2 md:ps-5">
            <h5 className="text-xl font-bold text-seaBlue">Search</h5>
            <li className="flex items-center bg-white mt-5">
              <input
                className="-mr-10 border-2 w-96 py-3 px-4 outline-none text-sm"
                placeholder="Search"
              />
              <FaSearch className="text-light" />
            </li>
            {/* resent post */}
            <h5 className="text-xl font-bold text-seaBlue mt-10">
              Recent Posts
            </h5>
            <div className="w-72 md:w-96 mt-5 bg-[#F7F7F7] p-5 rounded-md">
              {/* 01 */}
              <div className="md:flex items-center gap-5">
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
                  <p className="font-semibold text-seaBlue">
                    Key Real Estate Trends to Watch in 2024
                  </p>
                </div>
              </div>
              {/* 02 */}
              <div className="md:flex items-center gap-5 mt-5">
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
                  <p className="font-semibold text-seaBlue">
                    Key Real Estate Trends to Watch in 2024
                  </p>
                </div>
              </div>
              {/* 03 */}
              <div className="md:flex items-center gap-5 mt-5">
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
                  <p className="font-semibold text-seaBlue">
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
