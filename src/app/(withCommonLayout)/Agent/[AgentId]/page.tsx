import React from "react";
import Container from "../../../../components/Container/Container";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineAttachEmail } from "react-icons/md";
import Image from "next/image";
import agentImg from "../../../../assets/images/teamImg/agent01.jpg";
import { FaFacebook, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import ListingByAgent from "../../../../components/ListingByAgent/ListingByAgent";

const AgentDetails = async ({ params }) => {
  const { AgentId } = await params;
  const res = await fetch(`http://localhost:4900/users/${AgentId}`);
  const agent = await res.json();
  console.log("agent", agent);
  return (
    <Container>
      <div className="flex justify-between gap-10 text-[#2A4766] mt-16">
        <div className="w-8/12">
          <h3 className="text-4xl font-bold">{agent?.name}</h3>
          <p className="mt-1">Licensed Associate Real Estate Broker</p>
          <li className="flex gap-3 items-center mt-10">
            <FiPhoneCall className="text-lg" /> {agent?.number}
          </li>
          <li className="flex gap-3 items-center">
            <MdOutlineAttachEmail className="text-lg" />
            {agent?.email}
          </li>
          <button className="py-3 px-5 bg-[#2A4766] text-white font-semibold rounded-md uppercase mt-10">
            Work with {agent?.name}
          </button>
          {/* about */}
          <p className="text-xl font-bold mt-10 capitalize">
            About {agent?.name}
          </p>
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
            <li className="border border-[#2A4766] p-2 rounded-full hover:bg-[#2A4766] hover:text-white transition-all duration-700 ease-in-out cursor-pointer">
              <FaFacebook />
            </li>
            <li className="border border-[#2A4766] p-2 rounded-full hover:bg-[#2A4766] hover:text-white transition-all duration-700 ease-in-out cursor-pointer">
              <IoLogoYoutube />
            </li>
            <li className="border border-[#2A4766] p-2 rounded-full hover:bg-[#2A4766] hover:text-white transition-all duration-700 ease-in-out cursor-pointer">
              <FaLinkedinIn />
            </li>
            <li className="border border-[#2A4766] p-2 rounded-full hover:bg-[#2A4766] hover:text-white transition-all duration-700 ease-in-out cursor-pointer">
              <FaTwitterSquare />
            </li>
          </ul>
        </div>
      </div>
      {/* listing by */}
      <div className="">
        <h3 className="text-2xl font-bold text-[#2A4766]">
          Listing by {agent?.name}
        </h3>
        {/* card */}
        <ListingByAgent email={agent?.email}></ListingByAgent>
        {/* todo review */}
      </div>
    </Container>
  );
};

export default AgentDetails;
