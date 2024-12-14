import React from "react";
import Container from "../Container/Container";
import Image from "next/image";
import icon01 from "../../assets/images/serviceIcon/icon01.png";
import icon02 from "../../assets/images/serviceIcon/icon02.png";
import icon03 from "../../assets/images/serviceIcon/icon03.png";
import { FaArrowRightLong } from "react-icons/fa6";

const OurService = () => {
  return (
    <Container>
      <div className="w-[550px] mt-28">
        <b className="uppercase text-[#F1913D]">Our services</b>
        <h2 className="text-4xl font-semibold text-[#2A4766]">What We Do?</h2>
      </div>
      <div className="flex gap-10 mt-10">
        {/* Card 01 */}
        <div className="">
          <Image src={icon01} alt="icon01"></Image>
          <h5 className="text-[#2A4766] text-xl font-semibold mt-5">
            Buy A New Home
          </h5>
          <p className="text-[#77797a] mt-3">
            Discover your dream home effortlessly. Explore diverse properties
            and expert guidance for a seamless buying experience.
          </p>
          <button className="btn-learn-more flex gap-3 items-center mt-3 hover:border-b transition-all duration-700 border-red-600">
            Learn more <FaArrowRightLong className="text-[#F1913D]" />
          </button>
        </div>
        {/* Card 02 */}
        <div className="">
          <Image src={icon02} alt="icon01"></Image>
          <h5 className="text-[#2A4766] text-xl font-semibold mt-5">
            Rent a home
          </h5>
          <p className="text-[#77797a] mt-3">
            Discover your dream home effortlessly. Explore diverse properties
            and expert guidance for a seamless buying experience.
          </p>
          <button className="flex gap-3 items-center mt-3">
            Learn more <FaArrowRightLong className="text-[#F1913D]" />
          </button>
        </div>
        {/* Card 03 */}
        <div className="">
          <Image src={icon03} alt="icon01"></Image>
          <h5 className="text-[#2A4766] text-xl font-semibold mt-5">
            Sell a home
          </h5>
          <p className="text-[#77797a] mt-3">
            Discover your dream home effortlessly. Explore diverse properties
            and expert guidance for a seamless buying experience.
          </p>
          <button className="flex gap-3 items-center mt-3">
            Learn more <FaArrowRightLong className="text-[#F1913D]" />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default OurService;
