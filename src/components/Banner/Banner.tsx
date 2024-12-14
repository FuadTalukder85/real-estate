"use client";
import React, { useState } from "react";
import Container from "../Container/Container";
import { FaSearch, FaBed } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { MdCategory, MdOutlineEventNote } from "react-icons/md";
import "./Banner.css";
import { FaLocationDot } from "react-icons/fa6";

const Banner = () => {
  const [generalQuery, setGeneralQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [categoryQuery, setCategoryQuery] = useState("");
  const [bedroomQuery, setBedroomQuery] = useState("");

  const handleSearch = () => {
    const queryParams = new URLSearchParams({
      general: generalQuery,
      location: locationQuery,
      category: categoryQuery,
      bedroom: bedroomQuery,
    }).toString();

    // Navigate to the search page
    window.location.href = `/Search?${queryParams}`;
  };

  return (
    <div className="banner-img">
      <Container>
        <div className="py-32 font-semibold">
          <h5 className="text-white text-5xl w-[600px]">
            Find your dream house!
          </h5>
          <p className="text-white text-2xl">
            We are offering the best Real Estate Deals
          </p>
          <ul className="text-white text-lg mt-10">
            <li className="flex gap-3 items-center">
              <span className="border-2 border-yellow p-1 text-sm rounded-full">
                <FaLocationDot />
              </span>
              We sell a property every 45 minutes
            </li>
            <li className="flex gap-3 items-center mt-3">
              <span className="border-2 border-yellow p-1 text-sm rounded-full">
                <IoMdCheckmark />
              </span>
              We abide by the strictest codes of practice
            </li>
            <li className="flex gap-3 items-center mt-3">
              <span className="border-2 border-yellow p-1 text-sm rounded-full">
                <MdOutlineEventNote />
              </span>
              12,300 buyers registered each month
            </li>
          </ul>
          {/* Search */}
          <div className="mt-14 mb-10">
            <h5 className="p-5 text-white text-2xl font-semibold capitalize bg-seaBlue w-[350px]">
              Search best home
            </h5>
            <ul className="flex gap-2 p-5 bg-seaBlue">
              <li className="flex items-center gap-3 p-3 bg-white">
                <FaSearch />
                <input
                  className="w-52 outline-none text-sm"
                  placeholder="What are you looking for?"
                  value={generalQuery}
                  onChange={(e) => setGeneralQuery(e.target.value)}
                />
              </li>
              <li className="flex items-center gap-3 p-3 bg-white">
                <FaLocationDot />
                <input
                  className="w-52 outline-none text-sm"
                  placeholder="All Locations"
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                />
              </li>
              <li className="flex items-center gap-3 p-3 bg-white">
                <MdCategory />
                <input
                  className="w-52 outline-none text-sm"
                  placeholder="Categories"
                  value={categoryQuery}
                  onChange={(e) => setCategoryQuery(e.target.value)}
                />
              </li>
              <li className="flex items-center gap-3 p-3 bg-white">
                <FaBed />
                <input
                  className="w-52 outline-none text-sm"
                  placeholder="Bedroom"
                  value={bedroomQuery}
                  onChange={(e) => setBedroomQuery(e.target.value)}
                />
              </li>
              <button
                onClick={handleSearch}
                className="flex items-center gap-3 p-3 px-6 bg-yellow text-white text-sm uppercase hover:bg-[#ffb958] hover:text-white transition-all duration-700"
              >
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
