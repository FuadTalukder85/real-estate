import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { TPropertyCard } from "../../types/types";
import { FaBath, FaBed } from "react-icons/fa";
import { RxSize } from "react-icons/rx";

const PropertyCard = ({
  propertyId,
  propertyImage,
  propertyFor,
  propertyName,
  address,
  city,
  bedroom,
  bathroom,
  squareFoot,
  price,
  userName,
  userImage,
}: TPropertyCard) => {
  return (
    <div className="drop-shadow-xl bg-white rounded-lg">
      <div className="relative group rounded-t-lg overflow-hidden ">
        <Image
          src={propertyImage}
          alt="property01"
          width={400}
          height={400}
          className="rounded-t-lg group-hover:scale-125 transition-all duration-700 ease-in-out"
        ></Image>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-t-lg group-hover:scale-125 transition-all duration-700 ease-in-out"></div>
        <h5 className="absolute top-3 right-3 bg-[#2a476670] backdrop-blur-sm py-1 px-3 rounded-lg text-white uppercase font-semibold">
          For {propertyFor}
        </h5>
        <div className="absolute bottom-3 left-3 flex gap-3 items-center text-white">
          <FaLocationDot />
          <span>
            {address}, {city}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h4 className="text-yellow text-xl font-semibold">${price}.00</h4>
        <h4 className="text-xl text-seaBlue py-2 font-semibold capitalize">
          {propertyName}
        </h4>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-7 mt-2 text-light">
          <li className="font-semibold border-r pr-7">
            <span className="flex gap-2 items-center">
              {bedroom} <FaBed />
            </span>
            <span className="w-20">Bedrooms</span>
          </li>
          <li className="font-semibold border-r pr-7">
            <span className="flex gap-2 items-center">
              {bathroom} <FaBath />
            </span>
            <span className="w-20">Bathrooms</span>
          </li>
          <li className="font-semibold">
            <span className="flex gap-2 items-center">
              {squareFoot} <RxSize />
            </span>
            <span className="w-20">Square feet</span>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-center p-5 border-t">
        <div className="flex gap-3">
          <Image
            src={userImage}
            alt="userImage"
            width={50}
            height={50}
            className="rounded-2xl"
          ></Image>
          <div>
            <p className="text-seaBlue font-semibold">{userName}</p>
            <p className="text-light text-sm font-semibold">Property Agent</p>
          </div>
        </div>
        <div className="">
          <Link href={`/Property/${propertyId}`}>
            <button className="border border-yellow text-yellow py-1 px-4 font-semibold rounded-lg hover:text-white hover:border-seaBlue hover:bg-seaBlue transition-all duration-700">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
