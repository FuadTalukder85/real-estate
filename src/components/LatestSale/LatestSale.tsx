import React from "react";
import Container from "../Container/Container";
import Image from "next/image";
import property01 from "../../assets/images/propertyImg/property01.jpg";
import { FaLocationDot } from "react-icons/fa6";

const LatestSale = () => {
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
      <div className="mt-10 flex gap-5">
        {/* card 01 */}
        <div className="drop-shadow-xl bg-white">
          <Image src={property01} alt="property01"></Image>
          <div className="p-5">
            <h5 className="text-[#ffac37] font-semibold">For Sale</h5>
            <h4 className="text-xl text-[#2A4766] py-2 font-semibold capitalize">
              South seller court
            </h4>
            <div className="flex gap-3 items-center text-[#2A4766]">
              <FaLocationDot /> <span>Uttor Kashipur, Narayanganj</span>
            </div>
            <ul className="flex gap-3 mt-2 text-[#2A4766]">
              <li className="flex items-center">
                <span>
                  <b>3</b> Beds
                </span>
                <span className="ps-3 border-r h-3"></span>
              </li>
              <li className="flex items-center">
                <span>
                  <b>2</b> Baths
                </span>
              </li>
            </ul>
          </div>
          <div className="border-t">
            <div className="py-2 px-5 flex gap-3 items-center justify-between text-[#2A4766]">
              <span className="text-xl">
                <b>150</b> Sqft
              </span>
              <h4 className="text-[#ffac37] text-2xl font-semibold">
                $1200.00
              </h4>
            </div>
          </div>
        </div>
        {/* card 02 */}
        <div className="drop-shadow-xl bg-white">
          <Image src={property01} alt="property01"></Image>
          <div className="p-5">
            <h5 className="text-[#ffac37] font-semibold">For Sale</h5>
            <h4 className="text-xl text-[#2A4766] py-2 font-semibold capitalize">
              South seller court
            </h4>
            <div className="flex gap-3 items-center text-[#2A4766]">
              <FaLocationDot /> <span>Uttor Kashipur, Narayanganj</span>
            </div>
            <ul className="flex gap-3 mt-2 text-[#2A4766]">
              <li className="flex items-center">
                <span>
                  <b>3</b> Beds
                </span>
                <span className="ps-3 border-r h-3"></span>
              </li>
              <li className="flex items-center">
                <span>
                  <b>2</b> Baths
                </span>
              </li>
            </ul>
          </div>
          <div className="border-t">
            <div className="py-2 px-5 flex gap-3 items-center justify-between text-[#2A4766]">
              <span className="text-xl">
                <b>150</b> Sqft
              </span>
              <h4 className="text-[#ffac37] text-2xl font-semibold">
                $1200.00
              </h4>
            </div>
          </div>
        </div>
        {/* card 03 */}
        <div className="drop-shadow-xl bg-white">
          <Image src={property01} alt="property01"></Image>
          <div className="p-5">
            <h5 className="text-[#ffac37] font-semibold">For Sale</h5>
            <h4 className="text-xl text-[#2A4766] py-2 font-semibold capitalize">
              South seller court
            </h4>
            <div className="flex gap-3 items-center text-[#2A4766]">
              <FaLocationDot /> <span>Uttor Kashipur, Narayanganj</span>
            </div>
            <ul className="flex gap-3 mt-2 text-[#2A4766]">
              <li className="flex items-center">
                <span>
                  <b>3</b> Beds
                </span>
                <span className="ps-3 border-r h-3"></span>
              </li>
              <li className="flex items-center">
                <span>
                  <b>2</b> Baths
                </span>
              </li>
            </ul>
          </div>
          <div className="border-t">
            <div className="py-2 px-5 flex gap-3 items-center justify-between text-[#2A4766]">
              <span className="text-xl">
                <b>150</b> Sqft
              </span>
              <h4 className="text-[#ffac37] text-2xl font-semibold">
                $1200.00
              </h4>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LatestSale;
