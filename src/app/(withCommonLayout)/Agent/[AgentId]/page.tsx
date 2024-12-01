import React from "react";
import Container from "../../../../components/Container/Container";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineAttachEmail } from "react-icons/md";
import Image from "next/image";
import agentImg from "../../../../assets/images/teamImg/agent01.jpg";
import { FaFacebook, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const AgentDetails = () => {
  return (
    <Container>
      <div className="flex justify-between gap-10 text-[#2A4766] mt-16">
        <div className="w-8/12">
          <h3 className="text-4xl font-bold">Fuad Taludker</h3>
          <p className="mt-1">Licensed Associate Real Estate Broker</p>
          <li className="flex gap-3 items-center mt-10">
            <FiPhoneCall className="text-lg" /> 01756-867585
          </li>
          <li className="flex gap-3 items-center">
            <MdOutlineAttachEmail className="text-lg" />
            webfuadtk@gmail.com
          </li>
          <button className="py-3 px-5 bg-[#2A4766] text-white font-semibold rounded-md uppercase mt-10">
            Work with fuad talukder
          </button>
          {/* about */}
          <p className="text-xl font-bold mt-10">About fuad talukder</p>
          <p className="mt-3">
            Award winner and nominee, Erika Tillman, is one of NYC’s top
            producing agents. In 2016 she was a Top Producer Individual by sales
            volume and GCI. This high achiever received, among other
            recognitions, a Quadruple Platinum Award and was cover of Outfront
            Magazine in December 2016.
          </p>
        </div>
        <div className="">
          <Image
            src={agentImg}
            alt="agentImg"
            height={300}
            width={300}
            className="rounded-lg"
          ></Image>
          <p className="text-xl font-bold mt-5">Specialities</p>
          <p className="mt-3">International Buyers and Sellers Investors</p>
          <p className="text-xl font-bold mt-5">Social Media</p>
          <ul className="flex gap-3 mt-3">
            <li className="border border-[#2A4766] p-2 rounded-full">
              <FaFacebook />
            </li>
            <li className="border border-[#2A4766] p-2 rounded-full">
              <IoLogoYoutube />
            </li>
            <li className="border border-[#2A4766] p-2 rounded-full">
              <FaLinkedinIn />
            </li>
            <li className="border border-[#2A4766] p-2 rounded-full">
              <FaTwitterSquare />
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default AgentDetails;
