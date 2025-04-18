"use client";
import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Image from "next/image";
import profileImg from "../assets/images/profileImg01.jpg";
// import idaf from "../"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TArrowProps } from "../types/types";
// custom button
const NextArrow = ({ onClick }: TArrowProps) => {
  return (
    <div className="absolute flex bottom-0 -left-80 px-6 md:px-0 ">
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
    <div className="absolute flex bottom-0 -left-96 px-5 md:px-0 z-10">
      <div
        className="custom-arrow next-arrow bg-white border border-gray-200 p-3 rounded-md shadow-md cursor-pointer hover:bg-seaBlue transition-all duration-700 z-10"
        onClick={onClick}
      >
        <MdChevronLeft className="text-2xl text-yellow" />
      </div>
    </div>
  );
};
const Testimonials = () => {
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

  return (
    <div className="bg-[#F7F7F7] py-5 md:py-28 mt-10 md:mt-28 p-3 md:p-0">
      <div className="md:grid grid-cols-8 gap-10 items-center md:ml-[360px]">
        <div className="col-span-2">
          <b className="uppercase text-yellow">Top Properties</b>
          <h2 className="text-2xl md:text-4xl font-semibold text-seaBlue">
            What’s people say’s
          </h2>
          <p className="mt-5 text-light">
            Our seasoned team excels in real estate with years of successful
            market navigation, offering informed decisions and optimal results.
          </p>
        </div>
        <div className="col-span-6">
          <Slider {...settings}>
            {/* card 01 */}
            <div className="bg-white shadow-md my-2 px-3 md:px-10 py-5 md:py-16 mt-5 md:mt-0 rounded-2xl">
              <p>
                My experience with property management services has exceeded
                expectations. They efficiently manage properties with a
                professional and attentive approach in every situation. I feel
                reassured that any issue will be resolved promptly and
                effectively.
              </p>
              <div className="flex items-center mt-5">
                <Image
                  src={profileImg}
                  alt="profileImg"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <p className="font-bold">Rihana</p>
                  <span className="text-sm text-gray-500">CEO Agency</span>
                </div>
              </div>
            </div>
            {/* card 02 */}
            <div className="bg-white shadow-md my-2 px-3 md:px-10 py-5 md:py-16 mt-5 md:mt-0 rounded-2xl">
              <p>
                My experience with property management services has exceeded
                expectations. They efficiently manage properties with a
                professional and attentive approach in every situation. I feel
                reassured that any issue will be resolved promptly and
                effectively.
              </p>
              <div className="flex items-center mt-5">
                <Image
                  src={profileImg}
                  alt="profileImg"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <p className="font-bold">Rihana</p>
                  <span className="text-sm text-gray-500">CEO Agency</span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
