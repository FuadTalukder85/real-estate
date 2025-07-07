"use client";
import React, { useState } from "react";
import Container from "./Container";
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { useGetUserQuery } from "../redux/userApi/UserApi";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { LoginInputs } from "../types/types";
import ReusableBtn from "./ui/reusableBtn";
const OurTeam = () => {
  const { data } = useGetUserQuery("");
  const allAgent = data?.filter((dt: LoginInputs) => dt.role === "Agent");

  // modal state
  const [openAgentId, setOpenAgentId] = useState<string | null>(null);
  const [modalContent, setModalContent] = useState<string | null>(null);

  const toggleModal = (agentId: string, content: string | null) => {
    if (openAgentId === agentId && modalContent === content) {
      setOpenAgentId(null);
      setModalContent(null);
    } else {
      setOpenAgentId(agentId);
      setModalContent(content);
    }
  };
  return (
    <Container>
      <div className="text-center mt-10 md:mt-28">
        <b className="uppercase text-yellow">Our Teams</b>
        <h2 className="text-2xl md:text-4xl font-semibold text-seaBlue">
          Meet Our Agents
        </h2>
      </div>
      <div className="relative">
        <div className="md:grid grid-cols-4 gap-5 mt-3 md:mt-10 p-3 md:p-0">
          {allAgent?.map((agent: LoginInputs) => (
            <div key={agent._id} className="mt-5 md:mt-0 relative">
              <Link href={`/Agent/${agent._id}`}>
                <div className="relative group overflow-hidden flex items-center justify-center rounded-xl">
                  <Image
                    src={agent?.image}
                    alt={agent?.name}
                    width={300}
                    height={300}
                    className="rounded-xl hover:scale-105 transition-all duration-700 ease-in-out"
                  />
                  <button className="opacity-0 absolute bottom-0 w-40 h-7 rounded-t-md flex items-center justify-center mx-auto p-5 text-lg font-semibold text-seaBlue bg-[#ffffff9c] backdrop-blur-sm group-hover:opacity-100 scale-105 transition-all duration-700 ease-in-out">
                    More Details
                  </button>
                </div>
              </Link>

              <div className="flex justify-between items-center mt-2 md:p-2">
                <div>
                  <p className="text-lg font-semibold text-seaBlue">
                    {agent?.name}
                  </p>
                  <span className="font-semibold text-sm text-light">
                    Administrative Staff
                  </span>
                </div>
                <ul className="flex gap-3 text-light text-lg">
                  <li
                    onClick={() =>
                      toggleModal(agent._id, `Call: ${agent?.number}`)
                    }
                    className="text-seaBlue border border-seaBlue p-3 rounded-full hover:bg-seaBlue hover:text-white transition-all duration-700 ease-in-out cursor-pointer"
                  >
                    <FiPhoneCall />
                  </li>
                  <li
                    onClick={() =>
                      toggleModal(agent._id, ` Email: ${agent?.email}`)
                    }
                    className="text-xl text-seaBlue border border-seaBlue p-3 rounded-full hover:bg-seaBlue hover:text-white transition-all duration-700 ease-in-out cursor-pointer"
                  >
                    <MdOutlineAttachEmail />
                  </li>
                </ul>
              </div>

              {/* modal content */}
              {openAgentId === agent._id && modalContent && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#2a476680] backdrop-blur-sm z-10 rounded-xl">
                  <div className="bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-xs relative text-center">
                    {/* Close button */}
                    <button
                      onClick={() => toggleModal(agent._id, null)}
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    >
                      <IoMdClose className="text-2xl" />
                    </button>

                    {/* Icon */}
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                      {modalContent?.startsWith("Call") ? (
                        <FiPhoneCall className="text-xl text-blue-500" />
                      ) : (
                        <MdOutlineAttachEmail className="text-xl text-blue-500" />
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-seaBlue font-semibold text-lg mb-1">
                      Contact Information
                    </h3>

                    {/* Info Text */}
                    <p className="text-seaBlue text-md font-semibold mb-5">
                      {modalContent}
                    </p>

                    {/* Close Button */}
                    <div onClick={() => toggleModal(agent._id, null)}>
                      <ReusableBtn> Close</ReusableBtn>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Link href="/Agent">
          <ReusableBtn>View all Agent</ReusableBtn>
        </Link>
      </div>
    </Container>
  );
};

export default OurTeam;
