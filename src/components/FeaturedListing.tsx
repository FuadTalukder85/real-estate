"use client";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import { FaBath, FaBed } from "react-icons/fa";
import { BiSolidCarGarage } from "react-icons/bi";
import { RxSize } from "react-icons/rx";
import { FaLocationDot } from "react-icons/fa6";
import { useGetPropertyQuery } from "../redux/propertyApi/PropertyApi";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Link from "next/link";
import Slider from "react-slick";
import { TArrowProps, TPropertyTypes } from "../types/types";
import ReusableBtn from "./ui/reusableBtn";

// custom button
const NextArrow = ({ onClick }: TArrowProps) => {
  return (
    <div className="flex justify-end absolute -bottom-24 right-0 px-6 md:px-0 ">
      <div
        className="custom-arrow prev-arrow bg-yellow p-3 rounded-md shadow-md cursor-pointer hover:bg-seaBlue transition-all duration-700"
        onClick={onClick}
      >
        <MdChevronRight className="text-2xl text-white" />
      </div>
    </div>
  );
};
const PrevArrow = ({ onClick }: TArrowProps) => {
  return (
    <div className="absolute flex -bottom-24 right-6 md:right-1 mr-10 md:mr-14 px-5 md:px-0 z-10">
      <div
        className="custom-arrow next-arrow bg-white border border-gray-200 p-3 rounded-md shadow-md cursor-pointer hover:bg-seaBlue transition-all duration-700 z-10"
        onClick={onClick}
      >
        <MdChevronLeft className="text-2xl text-yellow" />
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
          slidesToShow: 1,
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
      <div className="mt-10 md:mt-28 md:flex p-3 md:p-5 text-seaBlue items-center justify-between">
        <div className="md:w-[550px]">
          <h2 className="text-2xl md:text-4xl font-semibold">
            Featured properties
          </h2>
          <p className="mt-2 text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            modi ad, autem quia commodi quisquam deserunt asperiores rerum vero
            fugiat nobis ex voluptatibus.
          </p>
        </div>
        <div className="mt-5 md:mt-0">
          <Link href="/Featured">
            <ReusableBtn>View all featured</ReusableBtn>
          </Link>
        </div>
      </div>
      {/* featured card */}
      <Slider {...settings}>
        {featuredProperty?.map((featured: TPropertyTypes) => (
          <div key={featured._id}>
            <div className="grid grid-cols-1 md:grid-cols-2 drop-shadow-md my-3 md:my-0 bg-white rounded-lg mt-10">
              <div className="md:rounded-s-lg overflow-hidden">
                <Image
                  src={featured.propertyImage02 || "/image"}
                  alt="feautredImg"
                  width={300}
                  height={300}
                  className="h-full w-full md:rounded-s-lg hover:scale-125 transition-all duration-700 ease-in-out"
                ></Image>
              </div>
              <div className="p-3">
                <h3 className="mt-1 text-xl font-semibold text-seaBlue">
                  {featured.propertyName}
                </h3>
                <p className="mt-2 text-light font-semibold flex gap-3 items-center">
                  <FaLocationDot />
                  {featured.address}, {featured.city}
                </p>
                <ul className="grid grid-cols-2 gap-3 text-light mt-3">
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
      </Slider>
    </Container>
  );
};

export default FeaturedListing;
