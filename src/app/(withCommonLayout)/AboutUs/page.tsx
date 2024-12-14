import React from "react";
import Container from "../../../components/Container/Container";
import Image from "next/image";
import { CiLocationArrow1 } from "react-icons/ci";
import aboutus from "../../../../public/aboutus.png";
import { FaArrowRightLong } from "react-icons/fa6";
import icon01 from "../../../assets/images/serviceIcon/icon01.png";
import icon02 from "../../../assets/images/serviceIcon/icon02.png";
import icon03 from "../../../assets/images/serviceIcon/icon03.png";
import { IoCheckmark } from "react-icons/io5";
import ReusableBtn from "../../../components/reusableBtn/reusableBtn";
import Link from "next/link";
import Testimonials from "../../../components/Testimonials/Testimonials";
import OurTeam from "../../../components/OurTeam/OurTeam";

const AboutUs = () => {
  return (
    <div>
      <div
        className="py-28"
        style={{
          backgroundImage: "url('/agents_hero.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <h5 className="text-white text-center font-semibold text-4xl">
            About us
          </h5>
          <p className="text-white text-center">
            Pairing the industry,s top technology with unsurpassed local
            expertise.
          </p>
        </Container>
      </div>
      <Container>
        {/* about us */}
        <div className="grid grid-cols-9 gap-10 items-center mt-16">
          <div className="col-span-4">
            <Image src={aboutus} alt="aboutus"></Image>
          </div>
          <div className="col-span-5">
            <span className="bg-[#ffe8d4] text-light font-semibold py-2 px-5 rounded-full ">
              About us
            </span>
            <h3 className="text-seaBlue text-4xl font-bold mt-6">
              The Leading Real Estate Rental Marketplace
            </h3>
            <p className="mt-5 text-light">
              Over 39,000 people work for us in more than 70 countries all over
              the This breadth of global coverage, combined with specialist
              services
            </p>
            <ul className="grid grid-cols-2 gap-2 mt-10">
              <li className="flex gap-3 items-center">
                <span className="p-1 border border-seaBlue text-light rounded-full hover:bg-seaBlue hover:text-white transition-all duration-500 cursor-pointer">
                  <CiLocationArrow1 className="" />
                </span>
                <span className="text-light font-semibold">
                  Smart Home Design
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="p-1 border border-seaBlue text-light rounded-full hover:bg-seaBlue hover:text-white transition-all duration-500 cursor-pointer">
                  <CiLocationArrow1 className="" />
                </span>
                <span className="text-light font-semibold">
                  Beautiful Scene Around
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="p-1 border border-seaBlue text-light rounded-full hover:bg-seaBlue hover:text-white transition-all duration-500 cursor-pointer">
                  <CiLocationArrow1 className="" />
                </span>
                <span className="text-light font-semibold">
                  Exceptional Lifestyle
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="p-1 border border-seaBlue text-light rounded-full hover:bg-seaBlue hover:text-white transition-all duration-500 cursor-pointer">
                  <CiLocationArrow1 className="" />
                </span>
                <span className="text-light font-semibold">
                  Complete 24/7 Security
                </span>
              </li>
            </ul>
            <p className="border-l-4 border-yellow bg-[#ffe8d4] text-light mt-10 pl-7 py-6 pr-28">
              Enimad minim veniam quis nostrud exercitation llamco laboris.
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        {/* why choose us */}
        <div className="grid grid-cols-2 gap-20 items-center mt-16">
          <div>
            <span className="bg-[#ffe8d4] text-light font-semibold py-2 px-5 rounded-full ">
              Our main focus
            </span>
            <h3 className="text-seaBlue text-4xl font-bold mt-6">
              Discover What Sets Our Real Estate Expertise Apart
            </h3>
            <p className="mt-5 text-light">
              At Homeya, our unwavering commitment lies in crafting unparalleled
              real estate journeys. Our seasoned professionals, armed with
              extensive market knowledge, walk alongside you through every phase
              of your property endeavor. We prioritize understanding your unique
              aspirations, tailoring our expertise to match your vision.
            </p>
            <ul className="grid grid-cols-2 gap-2 mt-10">
              <li className="flex gap-3 items-center">
                <span className="p-1 border bg-seaBlue text-white rounded-full hover:bg-seaBlue hover:text-white transition-all duration-500 cursor-pointer">
                  <IoCheckmark className="" />
                </span>
                <span className="text-light font-semibold">
                  Transparent Partnerships
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="p-1 border bg-seaBlue text-white rounded-full hover:bg-seaBlue hover:text-white transition-all duration-500 cursor-pointer">
                  <IoCheckmark className="" />
                </span>
                <span className="text-light font-semibold">
                  Proven Expertise
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="p-1 border bg-seaBlue text-white rounded-full hover:bg-seaBlue hover:text-white transition-all duration-500 cursor-pointer">
                  <IoCheckmark className="" />
                </span>
                <span className="text-light font-semibold">
                  Customized Solutions
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="p-1 border bg-seaBlue text-white rounded-full hover:bg-seaBlue hover:text-white transition-all duration-500 cursor-pointer">
                  <IoCheckmark className="" />
                </span>
                <span className="text-light font-semibold">
                  Local Area Knowledge
                </span>
              </li>
            </ul>
            <div className="mt-10">
              <Link href="/Contact">
                <ReusableBtn>Contact us</ReusableBtn>
              </Link>
            </div>
          </div>
          <div>
            {/* card 01 */}
            <div className="flex gap-5 items-center">
              <div>
                <Image
                  src={icon01}
                  alt="icon01"
                  width={200}
                  height={200}
                ></Image>
              </div>
              <div>
                <h5 className="text-seaBlue text-xl font-semibold mt-5">
                  Buy A New Home
                </h5>
                <p className="text-light mt-3">
                  Discover your dream home effortlessly. Explore diverse
                  properties and expert guidance for a seamless buying
                  experience.
                </p>
                <button className="text-light btn-learn-more flex gap-3 items-center mt-3 hover:border-b transition-all duration-700 border-red-600">
                  Learn more <FaArrowRightLong className="text-yellow" />
                </button>
              </div>
            </div>
            {/* card 02 */}
            <div className="flex gap-5 items-center">
              <div>
                <Image
                  src={icon02}
                  alt="icon01"
                  width={200}
                  height={200}
                ></Image>
              </div>
              <div>
                <h5 className="text-seaBlue text-xl font-semibold mt-5">
                  Rent a home
                </h5>
                <p className="text-light mt-3">
                  Discover your dream home effortlessly. Explore diverse
                  properties and expert guidance for a seamless buying
                  experience.
                </p>
                <button className="text-light btn-learn-more flex gap-3 items-center mt-3 hover:border-b transition-all duration-700 border-red-600">
                  Learn more <FaArrowRightLong className="text-yellow" />
                </button>
              </div>
            </div>
            {/* card 03 */}
            <div className="flex gap-5 items-center">
              <div>
                <Image
                  src={icon03}
                  alt="icon01"
                  width={200}
                  height={200}
                ></Image>
              </div>
              <div>
                <h5 className="text-seaBlue text-xl font-semibold mt-5">
                  Sell a home
                </h5>
                <p className="text-light mt-3">
                  Discover your dream home effortlessly. Explore diverse
                  properties and expert guidance for a seamless buying
                  experience.
                </p>
                <button className="text-light btn-learn-more flex gap-3 items-center mt-3 hover:border-b transition-all duration-700 border-red-600">
                  Learn more <FaArrowRightLong className="text-yellow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Testimonials></Testimonials>
      <OurTeam></OurTeam>
    </div>
  );
};

export default AboutUs;
