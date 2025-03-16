import React from "react";
import Container from "./Container";
import Image from "next/image";
import icon01 from "../assets/images/serviceIcon/icon01.png";
import icon02 from "../assets/images/serviceIcon/icon02.png";
import icon03 from "../assets/images/serviceIcon/icon03.png";
import { FaArrowRightLong } from "react-icons/fa6";

const OurService = () => {
  return (
    <Container>
      <div className="md:w-[550px] mt-28 p-5 md:p-0">
        <b className="uppercase text-yellow">Our services</b>
        <h2 className="text-2xl md:text-4xl font-semibold text-seaBlue">
          What We Do?
        </h2>
      </div>
      <div className="md:flex gap-10 md:mt-10 p-5 md:p-0">
        {/* Card 01 */}
        <div className="">
          <Image src={icon01} alt="icon01"></Image>
          <h5 className="text-seaBlue text-xl font-semibold md:mt-5">
            Buy A New Home
          </h5>
          <p className="text-light mt-3">
            Discover your dream home effortlessly. Explore diverse properties
            and expert guidance for a seamless buying experience.
          </p>
          <button className="text-light btn-learn-more flex gap-3 items-center mt-3 hover:text-yellow transition-all duration-700">
            Learn more <FaArrowRightLong className="text-yellow" />
          </button>
        </div>
        {/* Card 02 */}
        <div className="mt-3 md:mt-0">
          <Image src={icon02} alt="icon01"></Image>
          <h5 className="text-seaBlue text-xl font-semibold md:mt-5">
            Rent a home
          </h5>
          <p className="text-light mt-3">
            Discover your dream home effortlessly. Explore diverse properties
            and expert guidance for a seamless buying experience.
          </p>
          <button className="text-light btn-learn-more flex gap-3 items-center mt-3 hover:text-yellow transition-all duration-700">
            Learn more <FaArrowRightLong className="text-yellow" />
          </button>
        </div>
        {/* Card 03 */}
        <div className="mt-3 md:mt-0">
          <Image src={icon03} alt="icon01"></Image>
          <h5 className="text-seaBlue text-xl font-semibold md:mt-5">
            Sell a home
          </h5>
          <p className="text-light mt-3">
            Discover your dream home effortlessly. Explore diverse properties
            and expert guidance for a seamless buying experience.
          </p>
          <button className="text-light btn-learn-more flex gap-3 items-center mt-3 hover:text-yellow transition-all duration-700">
            Learn more <FaArrowRightLong className="text-yellow" />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default OurService;
