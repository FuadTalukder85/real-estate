"use client";
import React from "react";
import Container from "../../../components/Container/Container";
import { FaBath, FaBed, FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import { BiSolidCarGarage } from "react-icons/bi";
import { RxSize } from "react-icons/rx";
import Image from "next/image";
import { useGetPropertyQuery } from "../../../redux/propertyApi/PropertyApi";
import Link from "next/link";
import { TPropertyTypes } from "../../../types/types";

const FeaturedPage = () => {
  const { data } = useGetPropertyQuery("");
  const featuredProperty = data?.filter(
    (dt: TPropertyTypes) => dt.propertyFor === "Featured"
  );
  return (
    <div>
      <div className="bg-[#F7F7F7] mt-10">
        <Container>
          <ul className="flex gap-2 py-7">
            <li className="flex items-center gap-3 p-3 pr-16 bg-white">
              <FaSearch />
              <input
                className="outline-none text-sm"
                placeholder="What are you looking for?"
              />
            </li>
            <li className="flex items-center gap-3 p-3 pr-16 bg-white">
              <FaLocationDot />
              <input
                className="outline-none text-sm"
                placeholder="All Locations"
              />
            </li>
            <li className="flex items-center gap-3 p-3 pr-16 bg-white">
              <MdCategory />
              <input
                className="outline-none text-sm"
                placeholder="Categories"
              />
            </li>
            <li className="flex items-center gap-3 p-3 pr-16 bg-white">
              <FaBed />
              <input className="outline-none text-sm" placeholder="Bedroom" />
            </li>
            <button className="flex items-center gap-3 p-3 px-7 bg-yellow text-white text-sm uppercase hover:bg-[#ffb958] hover:text-white transition-all duration-700">
              Search
            </button>
          </ul>
        </Container>
      </div>
      <Container>
        <div className="grid grid-cols-2 gap-7 mt-10">
          {featuredProperty?.map((featured: TPropertyTypes) => (
            <div key={featured._id}>
              <div className="flex drop-shadow-md bg-white rounded-lg mt-10">
                <Image
                  src={featured.propertyImage02 || "/image"}
                  alt="feautredImg"
                  width={300}
                  height={300}
                  className="rounded-s-lg"
                ></Image>
                <div className="w-full p-5">
                  <h3 className="mt-1 text-xl font-semibold text-seaBlue">
                    {featured.propertyName}
                  </h3>
                  <p className="mt-2 text-light font-semibold flex gap-3 items-center">
                    <FaLocationDot />
                    {featured.address}, {featured.city}
                  </p>
                  <ul className="w-full grid grid-cols-2 gap-3 text-light mt-3">
                    <li className="flex gap-2 items-center">
                      <FaBed /> <span>Beds</span>
                      <span className="text-seaBlue font-semibold">
                        {featured.bedroom}
                      </span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaBath /> <span>Baths</span>
                      <span className="text-seaBlue font-semibold">
                        {featured.bathroom}
                      </span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <BiSolidCarGarage /> <span>Garage</span>
                      <span className="text-seaBlue font-semibold">1</span>
                    </li>
                    <li className="flex gap-2 items-center">
                      <RxSize /> <span>SqFt</span>
                      <span className="text-seaBlue font-semibold">
                        {featured.squareFoot}
                      </span>
                    </li>
                  </ul>
                  <div className="mt-5 border-t text-yellow">
                    <div className="mt-5 flex gap-5 items-center justify-between">
                      <h5 className="text-xl font-semibold">
                        ${featured.price}.00
                      </h5>
                      <Link href={`/Property/${featured._id}`}>
                        <button className="border border-yellow text-yellow py-1 px-4 font-semibold rounded-lg hover:text-white hover:bg-yellow transition-all duration-700">
                          Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FeaturedPage;
