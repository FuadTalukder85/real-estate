"use client";
import React from "react";
import Container from "../Container/Container";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { useGetPropertyQuery } from "../../redux/propertyApi/PropertyApi";
import Link from "next/link";

const LatestSale = () => {
  const { data } = useGetPropertyQuery("");
  const recentProperty = data
    ? [...data].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )
    : [];
  console.log(recentProperty);
  return (
    <Container>
      <div className="mx-auto w-[550px] text-center text-[#2A4766]">
        <h2 className="mt-28 text-4xl font-semibold">LATEST FOR SALE</h2>
        <p className="mt-2 text-[#ABACB0]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          modi ad, autem quia commodi quisquam deserunt asperiores rerum vero
          fugiat nobis ex voluptatibus.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-3 gap-5">
        {recentProperty?.slice(0, 3).map((property, index) => (
          <Link href={`/Property/${property._id}`} key={index}>
            <div className="relative drop-shadow-xl bg-white">
              <Image
                src={property.propertyImage01}
                alt="property01"
                width={400}
                height={400}
                className="rounded-t-lg"
              ></Image>
              <div className="p-5">
                <h5 className="absolute top-3 right-3 bg-white py-1 px-3 rounded-lg text-[#2A4766] uppercase font-semibold">
                  For {property?.propertyFor}
                </h5>
                <h4 className="text-xl text-[#2A4766] py-2 font-semibold capitalize">
                  {property.propertyName}
                </h4>
                <div className="flex gap-3 items-center text-[#2A4766]">
                  <FaLocationDot />{" "}
                  <span>
                    {property.address}, {property.city}
                  </span>
                </div>
                <ul className="flex gap-3 mt-2 text-[#2A4766]">
                  <li className="flex items-center">
                    <span>
                      <b>{property.bedroom}</b> Beds
                    </span>
                    <span className="ps-3 border-r h-3"></span>
                  </li>
                  <li className="flex items-center">
                    <span>
                      <b>{property.bathroom}</b> Baths
                    </span>
                  </li>
                </ul>
              </div>
              <div className="border-t">
                <div className="py-2 px-5 flex gap-3 items-center justify-between text-[#2A4766]">
                  <span className="text-xl">
                    <b>{property.squareFoot}</b> Sqft
                  </span>
                  <h4 className="text-[#ffac37] text-2xl font-semibold">
                    ${property.price}.00
                  </h4>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default LatestSale;
