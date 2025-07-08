"use client";
import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Container from "./Container";
import { FaSearch, FaBed } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { MdCategory, MdOutlineEventNote } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const images = ["/banner01.jpg", "/banner02.jpg"];
const Banner = () => {
  const [generalQuery, setGeneralQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [categoryQuery, setCategoryQuery] = useState("");
  const [bedroomQuery, setBedroomQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 1400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    const queryParams = new URLSearchParams({
      general: generalQuery,
      location: locationQuery,
      category: categoryQuery,
      bedroom: bedroomQuery,
    }).toString();

    window.location.href = `/Search?${queryParams}`;
  };

  return (
    <div className="keen-slider relative h-[80vh]">
      {/* Slide 1 */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ${
          fade ? "opacity-100" : "opacity-50"
        }`}
        style={{
          backgroundImage: `url(${images[index]})`,
        }}
      ></div>

      {/* Content Overlay */}
      <div className="absolute z-50 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
        <Container>
          <div className="py-5 md:py-32 font-semibold p-3 md:p-0">
            <div className="md:w-[600px] bg-[#2a476604] backdrop-blur-md md:p-5 rounded-md">
              <h5 className="text-white text-2xl md:text-5xl drop-shadow-[1px_1px_2px_rgba(0,0,0,0.7)]">
                Find your dream house!
              </h5>
              <p className="text-white text-2xl drop-shadow-[1px_1px_2px_rgba(0,0,0,0.7)]">
                We are offering the best Real Estate Deals
              </p>
              <ul className="text-white text-lg mt-5 md:mt-10">
                <li className="flex gap-3 items-center">
                  <span className="border-2 border-yellow p-1 text-sm rounded-full">
                    <FaLocationDot />
                  </span>
                  <span className="drop-shadow-[1px_1px_2px_rgba(0,0,0,0.7)]">
                    We sell a property every 45 minutes
                  </span>
                </li>
                <li className="flex gap-3 items-center mt-3">
                  <span className="border-2 border-yellow p-1 text-sm rounded-full">
                    <IoMdCheckmark />
                  </span>{" "}
                  <span className="drop-shadow-[1px_1px_2px_rgba(0,0,0,0.7)]">
                    We abide by the strictest codes of practice
                  </span>
                </li>
                <li className="flex gap-3 items-center mt-3">
                  <span className="border-2 border-yellow p-1 text-sm rounded-full">
                    <MdOutlineEventNote />
                  </span>{" "}
                  <span className="drop-shadow-[1px_1px_2px_rgba(0,0,0,0.7)]">
                    12,300 buyers registered each month
                  </span>
                </li>
              </ul>
            </div>

            {/* Search */}
            <div className="mt-14 mb-10">
              <h5 className="p-5 text-white text-2xl font-semibold capitalize bg-seaBlue md:w-[350px]">
                Search best home
              </h5>
              <ul className="md:flex gap-2 p-3 bg-seaBlue">
                <li className="flex items-center gap-3 p-3 bg-white">
                  <FaSearch />
                  <input
                    className="w-52 outline-none text-sm"
                    placeholder="What are you looking for?"
                    value={generalQuery}
                    onChange={(e) => setGeneralQuery(e.target.value)}
                  />
                </li>
                <li className="flex items-center gap-3 p-3 bg-white mt-2 md:mt-0">
                  <FaLocationDot />
                  <input
                    className="w-52 outline-none text-sm"
                    placeholder="All Locations"
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                  />
                </li>
                <li className="flex items-center gap-3 p-3 bg-white mt-2 md:mt-0">
                  <MdCategory />
                  <input
                    className="w-52 outline-none text-sm"
                    placeholder="Categories"
                    value={categoryQuery}
                    onChange={(e) => setCategoryQuery(e.target.value)}
                  />
                </li>
                <li className="flex items-center gap-3 p-3 bg-white mt-2 md:mt-0">
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
                  className="gap-3 p-3 w-full bg-yellow text-white text-sm uppercase hover:bg-[#ffb958] hover:text-white transition-all duration-700 mt-2 md:mt-0"
                >
                  Search
                </button>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
