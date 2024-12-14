"use client";
import React, { useState } from "react";
import Container from "../Container/Container";
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { useGetUserQuery } from "../../redux/userApi/UserApi";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { LoginInputs } from "../../types/types";
const OurTeam = () => {
  const { data } = useGetUserQuery("");
  const allAgent = data?.filter((dt: LoginInputs) => dt.role === "Agent");

  // modal state
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<string | null>(null);

  const toggleModal = (content: string | null) => {
    if (isOpen && modalContent === content) {
      setIsOpen(false);
      setModalContent(null);
    } else {
      setIsOpen(true);
      setModalContent(content);
    }
  };
  return (
    <Container>
      <div className="text-center mt-28">
        <b className="uppercase text-[#ffac37]">Our Teams</b>
        <h2 className="text-4xl font-semibold text-[#2A4766]">
          Meet Our Agents
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-10">
        {allAgent?.map((agent: LoginInputs) => (
          <div key={agent._id}>
            <Link href={`/Agent/${agent._id}`}>
              <div className="relative group overflow-hidden flex items-center justify-center rounded-xl">
                <Image
                  src={agent?.image}
                  alt={agent?.name}
                  width={300}
                  height={300}
                  className="rounded-xl hover:scale-105 transition-all duration-700 ease-in-out"
                ></Image>

                <button className="opacity-0 absolute bottom-0 w-40 h-7 rounded-t-md flex items-center justify-center mx-auto p-5 text-lg font-semibold text-[#2A4766] bg-[#ffffff9c] backdrop-blur-sm group-hover:opacity-100 scale-105 transition-all duration-700 ease-in-out z-50">
                  More Details
                </button>
              </div>
            </Link>
            <div className="flex justify-between items-center mt-5">
              <div>
                <p className="text-lg font-semibold text-[#2A4766]">
                  {agent?.name}
                </p>
                <span className="text-[#ABACB0]">Administrative Staff</span>
              </div>
              <ul className="flex gap-3 text-[#ABACB0] text-lg">
                <li
                  onClick={() => toggleModal(`Call: ${agent?.number}`)}
                  className="p-3 border rounded-full hover:text-white hover:bg-[#ffac37] transition-all duration-700 cursor-pointer"
                >
                  <FiPhoneCall />
                </li>
                <li
                  onClick={() => toggleModal(`Email: ${agent?.email}`)}
                  className="p-3 border rounded-full hover:text-white hover:bg-[#ffac37] transition-all duration-700 cursor-pointer"
                >
                  <MdOutlineAttachEmail />
                </li>
              </ul>
            </div>
            {/* Modal */}
            {isOpen && modalContent && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-5 z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-sm relative">
                  {/* close button */}
                  <button
                    onClick={() => toggleModal(null)}
                    className="text-2xl absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  >
                    <IoMdClose className="p-1 rounded-md cursor-pointer hover:bg-[#ABACB0]" />
                  </button>
                  <p className="text-center">{modalContent}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link href="/Agent">
          <button className="bg-[#ffac37] text-white py-2 px-6 font-semibold uppercase rounded-lg hover:bg-[#2A4766] transition-all duration-700">
            View all Agent
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default OurTeam;
