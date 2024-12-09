import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

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
}) => {
  return (
    <div className="relative drop-shadow-xl bg-white rounded-lg">
      <Link href={`/Property/${propertyId}`}>
        <Image
          src={propertyImage}
          alt="property01"
          width={400}
          height={400}
          className="rounded-t-lg"
        ></Image>
      </Link>
      <div className="p-5">
        <h5 className="absolute top-3 right-3 bg-[#2a476670] backdrop-blur-sm py-1 px-3 rounded-lg text-white uppercase font-semibold">
          For {propertyFor}
        </h5>
        <h4 className="text-xl text-[#2A4766] py-2 font-semibold capitalize">
          {propertyName}
        </h4>
        <div className="flex gap-3 items-center text-[#2A4766]">
          <FaLocationDot />
          <span>
            {address}, {city}
          </span>
        </div>
        <ul className="flex gap-3 mt-2 text-[#2A4766]">
          <li className="flex items-center">
            <span>
              <b>{bedroom}</b> Beds
            </span>
            <span className="ps-3 border-r h-3"></span>
          </li>
          <li className="flex items-center">
            <span>
              <b>{bathroom}</b> Baths
            </span>
          </li>
        </ul>
      </div>
      <div className="border-t">
        <div className="py-2 px-5 flex gap-3 items-center justify-between text-[#2A4766] font-semibold">
          <span className="text-xl">
            <span>{squareFoot}</span> Sqft
          </span>
          <h4 className="text-xl">${price}.00</h4>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
