"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import {
  useGetContactQuery,
  useGetSingleContactQuery,
} from "../../../../redux/contactApi/ContactApi";
import proImg from "../../../../assets/images/profileImg01.jpg";
import { MdClose } from "react-icons/md";
const MessagePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState(null);
  const { data } = useGetContactQuery("");
  const { data: singleContact } = useGetSingleContactQuery(selectedContactId, {
    skip: !selectedContactId,
  });
  //   handle show modal
  const handleShowModal = (id) => {
    setSelectedContactId(id);
    setShowModal(!showModal);
  };

  return (
    <div className="px-10 p-5 text-[#2A4766]">
      <div className="mt-10">
        <h5 className="bg-white p-5 border capitalize font-semibold text-[#2A4766]">
          All message list
        </h5>
        {/* users table*/}
        <table className="w-full border-collapse">
          <thead className="bg-[#f2f2f3]">
            <tr className="flex gap-3 justify-between font-medium p-2 px-5 pr-16 border-s border-r">
              <th className="py-2 text-left font-medium">*</th>
              <th className="w-3/12 py-2 text-left font-medium">
                Person Photo and Name
              </th>
              <th className="w-2/12 py-2 text-left font-medium">Email</th>
              <th className="w-2/12 py-2 text-left font-medium">Date</th>
              <th className="w-2/12 py-2 text-left font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((contact, index) => (
              <tr
                key={index}
                className="flex gap-3 justify-between items-center p-2 border-s border-r border-b bg-white px-5 pr-16"
              >
                <td className="">{index + 1}.</td>
                <td className="w-3/12 flex items-center space-x-3">
                  <Image
                    className="rounded-lg"
                    src={proImg}
                    alt="proImg"
                    width={40}
                    height={40}
                  ></Image>
                  <div>
                    <span className="font-medium">{contact?.name}</span>
                    <p className="w-56 truncate">{contact?.subject}</p>
                  </div>
                </td>
                <td className="w-2/12">{contact?.email}</td>
                <td className="w-2/12">{contact?.date}</td>
                <td className="w-2/12">
                  <div className="flex gap-5">
                    <button
                      onClick={() => handleShowModal(contact._id)}
                      className="bg-[#ececec] p-2 rounded-md hover:bg-[#2A4766] hover:text-white transition-all duration-700"
                    >
                      <FiEye />
                    </button>
                    <button className="bg-red-400 text-white p-2 rounded-md hover:bg-[#2A4766] hover:text-white transition-all duration-700">
                      <AiOutlineDelete />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showModal && (
          <div className="fixed inset-0 text-[#2A4766] bg-black bg-opacity-5 z-50">
            <div className="w-[580px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 z-60">
              <div className="flex justify-end items-center mb-4">
                <button
                  onClick={() => {
                    setShowModal(false);
                    setSelectedContactId(null);
                  }}
                  className="text-white bg-red-500 hover:bg-gray-200 hover:text-black transition-all duration-700 rounded px-2 py-1"
                >
                  <MdClose />
                </button>
              </div>
              <div>
                <p className="font-semibold">
                  Subject:
                  <span className="ps-2 font-normal">
                    {singleContact?.subject}
                  </span>
                </p>
                <p className="mt-3">{singleContact?.message}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagePage;
