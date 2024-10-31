import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Image from "next/image";
import profileImg from "../../assets/images/profileImg01.jpg";
const Testimonials = () => {
  return (
    <div className="bg-[#F7F7F7] py-28 mt-28">
      <div className="grid grid-cols-8 gap-10 items-center ml-[360px]">
        <div className="col-span-2">
          <b className="uppercase text-[#ffac37]">Top Properties</b>
          <h2 className="text-4xl font-semibold text-[#2A4766]">
            What’s people say’s
          </h2>
          <p className="mt-5 text-[#ABACB0]">
            Our seasoned team excels in real estate with years of successful
            market navigation, offering informed decisions and optimal results.
          </p>
          <div className="flex gap-3 mt-10">
            <button className="bg-white border border-gray-200 p-3 rounded-md shadow-md">
              <MdChevronLeft className="text-2xl text-[#ffac37]" />
            </button>
            <button className="bg-[#ffac37] p-3 rounded-md shadow-md">
              <MdChevronRight className="text-2xl text-white" />
            </button>
          </div>
        </div>
        {/* card 01 */}
        <div className="col-span-3 bg-white px-10 py-16 shadow-lg rounded-2xl">
          <p>
            My experience with property management services has exceeded
            expectations. They efficiently manage properties with a professional
            and attentive approach in every situation. I feel reassured that any
            issue will be resolved promptly and effectively.
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
        <div className="col-span-3 bg-white px-10 py-16 shadow-lg rounded-2xl">
          <p>
            My experience with property management services has exceeded
            expectations. They efficiently manage properties with a professional
            and attentive approach in every situation. I feel reassured that any
            issue will be resolved promptly and effectively.
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
      </div>
    </div>
  );
};

export default Testimonials;
