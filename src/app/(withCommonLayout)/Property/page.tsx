import React from "react";
import { FaBed, FaChevronDown, FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import Container from "../../../components/Container/Container";
import property01 from "../../../assets/images/propertyImg/property01.jpg";
import Image from "next/image";

const PropertyPage = () => {
  return (
    <div>
      <div className="bg-[#F7F7F7] mt-10">
        <Container>
          <ul className="flex gap-2 py-7">
            <li className="flex items-center gap-3 p-3 pr-16 bg-white">
              {" "}
              <FaSearch />
              <input
                className="outline-none text-sm"
                placeholder="What are you looking for?"
              />
            </li>
            <li className="flex items-center gap-3 p-3 pr-16 bg-white">
              {" "}
              <FaLocationDot />
              <input
                className="outline-none text-sm"
                placeholder="All Locations"
              />
            </li>
            <li className="flex items-center gap-3 p-3 pr-16 bg-white">
              {" "}
              <MdCategory />
              <input
                className="outline-none text-sm"
                placeholder="Categories"
              />
            </li>
            <li className="flex items-center gap-3 p-3 pr-16 bg-white">
              {" "}
              <FaBed />
              <input className="outline-none text-sm" placeholder="Bedroom" />
            </li>
            <button className="flex items-center gap-3 p-3 px-7 bg-[#ffac37] text-white text-sm uppercase hover:bg-[#ffb958] hover:text-white transition-all duration-700">
              {" "}
              Search
            </button>
          </ul>
        </Container>
      </div>
      <Container>
        {/* card */}
        <div className="mt-16 flex justify-between border-b pb-5 font-semibold">
          <div className="flex gap-5">
            <span className="">All</span>
            <span className="border-b-2 border-[#ffac37]">For Sale</span>
            <span>For Rent</span>
          </div>
          <span className="capitalize flex gap-3 items-center">
            Short by : recent <FaChevronDown />
          </span>
        </div>
        <div className="mt-16 flex gap-5">
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
        {/*  */}
        <div className="mt-5 flex gap-5">
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
    </div>
  );
};

export default PropertyPage;
