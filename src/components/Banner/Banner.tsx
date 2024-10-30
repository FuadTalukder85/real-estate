import React from "react";
import Container from "../Container/Container";
import { FaLocationDot } from "react-icons/fa6";
import "./Banner.css";
import { IoMdCheckmark } from "react-icons/io";
import { MdCategory, MdOutlineEventNote } from "react-icons/md";
import { FaBed, FaSearch } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="banner-img">
      <Container>
        <div className="py-32 font-semibold">
          <h5 className="text-white text-5xl drop-shadow-sm">
            Find your dream house!
          </h5>
          <p className="text-white text-2xl">
            We are offering the best Real Estate Deals
          </p>
          <ul className="text-white text-lg mt-10">
            <li className="flex gap-3 items-center">
              <span className="border-2 border-[#EFA335] p-1 text-sm rounded-full">
                <FaLocationDot />
              </span>{" "}
              We sell a property every 45 minutes
            </li>
            <li className="flex gap-3 items-center mt-3">
              <span className="border-2 border-[#EFA335] p-1 text-sm rounded-full">
                <IoMdCheckmark />{" "}
              </span>
              We abide by the strictest codes of practice
            </li>
            <li className="flex gap-3 items-center mt-3">
              <span className="border-2 border-[#EFA335] p-1 text-sm rounded-full">
                <MdOutlineEventNote />
              </span>{" "}
              12,300 buyers registered each month
            </li>
          </ul>
          {/* search */}
          <div className="mt-14">
            <h5 className="p-5 text-white text-2xl font-semibold capitalize bg-[#2A4766] w-[350px]">
              Search best home
            </h5>
            <ul className="flex gap-2 p-5 bg-[#2A4766]">
              <li className="flex items-center gap-3 p-3 pr-12 bg-white">
                {" "}
                <FaSearch />
                <input
                  className="outline-none text-sm"
                  placeholder="What are you looking for?"
                />
              </li>
              <li className="flex items-center gap-3 p-3 pr-12 bg-white">
                {" "}
                <FaLocationDot />
                <input
                  className="outline-none text-sm"
                  placeholder="All Locations"
                />
              </li>
              <li className="flex items-center gap-3 p-3 pr-12 bg-white">
                {" "}
                <MdCategory />
                <input
                  className="outline-none text-sm"
                  placeholder="Categories"
                />
              </li>
              <li className="flex items-center gap-3 p-3 pr-12 bg-white">
                {" "}
                <FaBed />
                <input className="outline-none text-sm" placeholder="Bedroom" />
              </li>
              <button className="flex items-center gap-3 p-3 px-6 bg-white text-[#2A4766] text-sm uppercase hover:bg-[#EFA335] hover:text-white transition-all duration-700">
                {" "}
                Search
              </button>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
