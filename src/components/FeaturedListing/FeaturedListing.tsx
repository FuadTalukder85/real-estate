import React from "react";
import Container from "../Container/Container";
import Image from "next/image";
import feautredImg from "../../assets/images/propertyImg/featuredProperty01.jpg";
import { FaBath, FaBed } from "react-icons/fa";
import { BiSolidCarGarage } from "react-icons/bi";
import { RxSize } from "react-icons/rx";
import { FaLocationDot } from "react-icons/fa6";

const FeaturedListing = () => {
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
          <button className="bg-[#ffac37] text-white py-2 px-6 font-semibold uppercase rounded-sm">
            View all featured
          </button>
        </div>
      </div>
      {/* featured card */}
      <div className="flex gap-7 mt-10">
        {/* card 01 */}
        <div className="flex drop-shadow-md bg-white">
          <Image src={feautredImg} alt="feautredImg" width={300}></Image>
          <div>
            <div className="p-5 pr-5">
              <div className="flex gap-5 items-center text-[#ffac37]">
                <h5 className="text-xl font-semibold">$5000.00</h5>
                <span className="">Asking pice</span>
              </div>
              <h3 className="text-xl font-semibold text-[#2A4766]">
                Ravenslea Cafe London Road For Sale
              </h3>
              <ul className="text-[#ABACB0] mt-5">
                <li className="flex gap-5 items-center">
                  <FaBed /> <span className="w-20">Bedrooms</span>
                  <span>4</span>
                </li>
                <li className="flex gap-5 items-center">
                  <FaBath /> <span className="w-20">Bathrooms</span>
                  <span>3</span>
                </li>
                <li className="flex gap-5 items-center">
                  <BiSolidCarGarage /> <span className="w-20">Garage</span>
                  <span>1</span>
                </li>
                <li className="flex gap-5 items-center">
                  <RxSize /> <span className="w-20">SqFt</span>
                  <span>1500</span>
                </li>
              </ul>
            </div>
            <div className="mt-7 border-t text-[#ABACB0]">
              <p className="flex gap-3 items-center px-5 py-3">
                <FaLocationDot />
                London, United Kingdom
              </p>
            </div>
          </div>
        </div>
        {/* card 02 */}
        <div className="flex drop-shadow-md bg-white">
          <Image src={feautredImg} alt="feautredImg" width={300}></Image>
          <div>
            <div className="p-5 pr-5">
              <div className="flex gap-5 items-center text-[#ffac37]">
                <h5 className="text-xl font-semibold">$5000.00</h5>
                <span className="">Asking pice</span>
              </div>
              <h3 className="text-xl font-semibold text-[#2A4766]">
                Ravenslea Cafe London Road For Sale
              </h3>
              <ul className="text-[#ABACB0] mt-5">
                <li className="flex gap-5 items-center">
                  <FaBed /> <span className="w-20">Bedrooms</span>
                  <span>4</span>
                </li>
                <li className="flex gap-5 items-center">
                  <FaBath /> <span className="w-20">Bathrooms</span>
                  <span>3</span>
                </li>
                <li className="flex gap-5 items-center">
                  <BiSolidCarGarage /> <span className="w-20">Garage</span>
                  <span>1</span>
                </li>
                <li className="flex gap-5 items-center">
                  <RxSize /> <span className="w-20">SqFt</span>
                  <span>1500</span>
                </li>
              </ul>
            </div>
            <div className="mt-7 border-t text-[#ABACB0]">
              <p className="flex gap-3 items-center px-5 py-3">
                <FaLocationDot />
                London, United Kingdom
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FeaturedListing;
