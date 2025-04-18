"use client";
import React, { useState } from "react";
import Container from "../../../components/Container";
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { useGetUserQuery } from "../../../redux/userApi/UserApi";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { LoginInputs } from "../../../types/types";
import ReusableBtn from "../../../components/reusableBtn/reusableBtn";

const AgentPage = () => {
  const { data } = useGetUserQuery("");
  const allAgent = data?.filter((dt: LoginInputs) => dt.role === "Agent");

  // modal state
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
    <div>
      <div
        className="py-10 md:py-36"
        style={{
          backgroundImage: "url('/agents_hero.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <h5 className="text-white text-center font-semibold text-2xl md:text-4xl">
            Our All Agents
          </h5>
          <p className="text-white text-center">
            Pairing the industry,s top technology with unsurpassed local
            expertise.
          </p>
        </Container>
      </div>
      <div className="text-center mt-10 md:mt-16">
        <b className="uppercase text-yellow">Our Teams</b>
        <h2 className="text-2xl md:text-4xl font-semibold text-seaBlue">
          Meet Our Agents
        </h2>
      </div>
      <Container>
        <div className="md:grid grid-cols-4 gap-5 mt-3 md:mt-10 p-3 md:p-0">
          {allAgent?.map((agent: LoginInputs) => (
            <div key={agent._id} className="mt-5 md:mt-0">
              <Link href={`/Agent/${agent._id}`}>
                <div className="relative group overflow-hidden flex items-center justify-center rounded-xl">
                  <Image
                    src={agent?.image}
                    alt={agent?.name}
                    width={300}
                    height={300}
                    className="rounded-xl hover:scale-105 transition-all duration-700 ease-in-out"
                  ></Image>

                  <button className="opacity-0 absolute bottom-0 w-40 h-7 rounded-t-md flex items-center justify-center mx-auto p-5 text-lg font-semibold text-seaBlue bg-[#ffffff9c] backdrop-blur-sm group-hover:opacity-100 scale-105 transition-all duration-700 ease-in-out">
                    More Details
                  </button>
                </div>
              </Link>
              <div className="flex justify-between items-center mt-5">
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
                    onClick={() => toggleModal(`Call: ${agent?.number}`)}
                    className="text-seaBlue border border-seaBlue p-3 rounded-full hover:bg-seaBlue hover:text-white transition-all duration-700 ease-in-out cursor-pointer"
                  >
                    <FiPhoneCall />
                  </li>
                  <li
                    onClick={() => toggleModal(`Email: ${agent?.email}`)}
                    className="text-seaBlue border border-seaBlue p-3 rounded-full hover:bg-seaBlue hover:text-white transition-all duration-700 ease-in-out cursor-pointer"
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
                      <IoMdClose className="p-1 rounded-md cursor-pointer hover:bg-light" />
                    </button>
                    <p className="text-center">{modalContent}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <ReusableBtn>Load more</ReusableBtn>
        </div>
      </Container>
    </div>
  );
};

export default AgentPage;
