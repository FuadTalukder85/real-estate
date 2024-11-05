import Image from "next/image";
import React from "react";
import proImg from "../../assets/images/profileImg01.jpg";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const RecentReview = () => {
  return (
    <div className="mt-10 p-5 text-[#2A4766] bg-white">
      <h5 className="font-semibold">Recent Reviews</h5>
      <div>
        <div className="flex gap-3 items-center mt-5">
          <Image
            className="rounded-full"
            src={proImg}
            alt="proImg"
            width={45}
          ></Image>
          February 18, 2024
        </div>
        <p className="mt-3">
          The housing sector has long been a focal point for investors seeking
          stability and growth. Understanding the dynamics of housing stocks and
          effectively trading within this sector can lead to substantial gains.
        </p>
        <span className="mt-5 text-[#ffac37] text-xl">★★★★★</span>
      </div>
      <div>
        <div className="flex gap-3 items-center mt-5">
          <Image
            className="rounded-full"
            src={proImg}
            alt="proImg"
            width={45}
          ></Image>
          February 18, 2024
        </div>
        <p className="mt-3">
          The housing sector has long been a focal point for investors seeking
          stability and growth. Understanding the dynamics of housing stocks and
          effectively trading within this sector can lead to substantial gains.
        </p>
        <span className="mt-5 text-[#ffac37] text-xl">★★★★★</span>
      </div>
      <div className="flex gap-3 mt-5 justify-end">
        <button className="bg-white border border-gray-200 p-3 rounded-md shadow-md">
          <MdChevronLeft className="text-2xl text-[#ffac37]" />
        </button>
        <button className="bg-[#ffac37] p-3 rounded-md shadow-md">
          <MdChevronRight className="text-2xl text-white" />
        </button>
      </div>
    </div>
  );
};

export default RecentReview;
