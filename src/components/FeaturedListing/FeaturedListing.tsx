"use client";
import React from "react";
import Container from "../Container/Container";
import Image from "next/image";
import { FaBath, FaBed } from "react-icons/fa";
import { BiSolidCarGarage } from "react-icons/bi";
import { RxSize } from "react-icons/rx";
import { FaLocationDot } from "react-icons/fa6";
import { useGetPropertyQuery } from "../../redux/propertyApi/PropertyApi";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Link from "next/link";
import Slider from "react-slick";
import "./FeaturedListing.css";
import { TArrowProps, TPropertyTypes } from "../../types/types";

// custom button
const NextArrow = ({ onClick }: TArrowProps) => {
  return (
    <div className="flex justify-end absolute -bottom-24 right-0 px-6 md:px-0 ">
      <div
        className="custom-arrow prev-arrow bg-[#ffac37] p-3 rounded-md shadow-md cursor-pointer hover:bg-[#2A4766] transition-all duration-700"
        onClick={onClick}
      >
        <MdChevronRight className="text-2xl text-white" />
      </div>
    </div>
  );
};
const PrevArrow = ({ onClick }: TArrowProps) => {
  return (
    <div className="absolute flex -bottom-24 right-0 mr-10 md:mr-14 px-5 md:px-0 z-10">
      <div
        className="custom-arrow next-arrow bg-white border border-gray-200 p-3 rounded-md shadow-md cursor-pointer hover:bg-[#2A4766] transition-all duration-700 z-10"
        onClick={onClick}
      >
        <MdChevronLeft className="text-2xl text-[#ffac37]" />
      </div>
    </div>
  );
};
const FeaturedListing = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          nextArrow: <NextArrow onClick={() => {}} />,
          prevArrow: <PrevArrow onClick={() => {}} />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.04,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          nextArrow: <NextArrow onClick={() => {}} />,
          prevArrow: <PrevArrow onClick={() => {}} />,
        },
      },
    ],
  };

  const { data } = useGetPropertyQuery("");
  const featuredProperty = data?.filter(
    (dt: TPropertyTypes) => dt.propertyFor === "Featured"
  );
  return (
    <Container>
      <div className="mt-28 flex text-[#2A4766] items-center justify-between">
        <div className="w-[550px]">
          <h2 className="text-4xl font-semibold">Featured properties</h2>
          <p className="mt-2 text-[#ABACB0]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            modi ad, autem quia commodi quisquam deserunt asperiores rerum vero
            fugiat nobis ex voluptatibus.
          </p>
        </div>
        <div>
          <Link href="/Featured">
            <button className="bg-[#ffac37] text-white py-2 px-6 font-semibold uppercase rounded-md hover:bg-[#2A4766] transition-all duration-700">
              View all featured
            </button>
          </Link>
        </div>
      </div>
      {/* featured card */}
      <Slider {...settings}>
        {featuredProperty?.map((featured: TPropertyTypes) => (
          <Link href={`/Property/${featured._id}`} key={featured._id}>
            <div
              key={featured._id}
              className="flex drop-shadow-md bg-white rounded-lg mt-10"
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
                  <h3 className="mt-1 text-xl font-semibold text-[#2A4766]">
                    {featured.propertyName}
                  </h3>
                  <ul className="text-[#ABACB0] mt-3">
                    <li className="flex gap-5 items-center">
                      <FaBed /> <span className="w-20">Bedrooms</span>
                      <span>{featured.bedroom}</span>
                    </li>
                    <li className="flex gap-5 items-center">
                      <FaBath /> <span className="w-20">Bathrooms</span>
                      <span>{featured.bathroom}</span>
                    </li>
                    <li className="flex gap-5 items-center">
                      <BiSolidCarGarage /> <span className="w-20">Garage</span>
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
      </Slider>
    </Container>
  );
};

export default FeaturedListing;
