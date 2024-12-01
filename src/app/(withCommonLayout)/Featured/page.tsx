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

const FeaturedPage = () => {
  const { data } = useGetPropertyQuery("");
  const featuredProperty = data?.filter((dt) => dt.propertyFor === "Featured");
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
            <button className="flex items-center gap-3 p-3 px-7 bg-[#ffac37] text-white text-sm uppercase hover:bg-[#ffb958] hover:text-white transition-all duration-700">
              Search
            </button>
          </ul>
        </Container>
      </div>
      <Container>
        <div className="grid grid-cols-2 gap-7 mt-10">
          {featuredProperty?.map((featured) => (
            <Link href={`/Property/${featured._id}`} key={featured._id}>
              <div
                key={featured._id}
                className="flex drop-shadow-md bg-white rounded-lg"
              >
                <Image
                  src={featured.propertyImage02 || "/image"}
                  alt="feautredImg"
                  width={300}
                  height={300}
                  className="rounded-s-lg"
                ></Image>
                <div>
                  <div className="p-5 pr-5">
                    <div className="flex gap-5 items-center text-[#ffac37]">
                      <h5 className="text-xl font-semibold">
                        ${featured.price}.00
                      </h5>
                      <span className="">Asking pice</span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#2A4766]">
                      {featured.title}
                    </h3>
                    <ul className="text-[#ABACB0] mt-5">
                      <li className="flex gap-5 items-center">
                        <FaBed /> <span className="w-20">Bedrooms</span>
                        <span>{featured.bedroom}</span>
                      </li>
                      <li className="flex gap-5 items-center">
                        <FaBath /> <span className="w-20">Bathrooms</span>
                        <span>{featured.bathroom}</span>
                      </li>
                      <li className="flex gap-5 items-center">
                        <BiSolidCarGarage />{" "}
                        <span className="w-20">Garage</span>
                        <span>1</span>
                      </li>
                      <li className="flex gap-5 items-center">
                        <RxSize /> <span className="w-20">SqFt</span>
                        <span>{featured.squareFoot}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-7 border-t text-[#2A4766] font-semibold">
                    <p className="flex gap-3 items-center px-5 py-3">
                      <FaLocationDot />
                      {featured.address}, {featured.city}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FeaturedPage;
