import React from "react";
import Container from "../Container/Container";
import Image from "next/image";
import recentSell01 from "../../assets/images/recentSell/recentSell01.png";
import recentSell02 from "../../assets/images/recentSell/recentSell02.png";
import recentSell03 from "../../assets/images/recentSell/recentSell03.png";
import { RxSize } from "react-icons/rx";
import { FaBath, FaBed } from "react-icons/fa";
import { BiSolidCarGarage } from "react-icons/bi";

const RecentSell = () => {
  return (
    <Container>
      <div className="grid grid-cols-12 gap-12 items-center mt-28">
        <div className="col-span-6">
          <div className="flex gap-5">
            <div className="overflow-hidden rounded-md">
              <Image
                className="rounded-md hover:scale-125 transition-all duration-700"
                src={recentSell01}
                alt="recentSell01"
                width={280}
              ></Image>
            </div>
            <div className="overflow-hidden rounded-md">
              <Image
                className="rounded-md hover:scale-125 transition-all duration-700"
                src={recentSell02}
                alt="recentSell02"
                width={280}
              ></Image>
            </div>
          </div>
          <div className="mt-4 overflow-hidden rounded-md">
            <Image
              className="rounded-md hover:scale-125 transition-all duration-700"
              src={recentSell03}
              alt="recentSell03"
            ></Image>
          </div>
        </div>
        <div className="col-span-6">
          <div className="text-[#2A4766]">
            <h2 className="text-4xl font-semibold">Recent Sells Properties</h2>
            <p className="mt-5 text-[#ABACB0]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don,t look even
              slightly believable. If you are going.
            </p>
          </div>
          {/*  */}
          <div className="mt-10">
            <li>Live Music Cocerts at Luviana</li>
            <li className="mt-5">Our SecretIsland Boat Tour is Just for You</li>
            <li className="mt-5">Publishing packages and web page editors</li>
            <li className="mt-5">Nemo enim ipsam voluptatem quia voluptas</li>
          </div>
          {/*  */}
          <div className="flex gap-10 mt-16">
            <div className="border-r">
              <span className="flex gap-3 items-center">
                2100 <RxSize />
              </span>
              <p className="pr-10">square Ft</p>
            </div>
            <div className="border-r">
              <span className="flex gap-3 items-center">
                5 <FaBed />
              </span>
              <p className="pr-10">Bedrooms</p>
            </div>
            <div className="border-r">
              <span className="flex gap-3 items-center">
                4 <FaBath />
              </span>
              <p className="pr-10">Bathrooms</p>
            </div>
            <div className="">
              <span className="flex gap-3 items-center">
                12 <BiSolidCarGarage />
              </span>
              <p>Car parking</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RecentSell;
