"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import {
  useDeleteContactMutation,
  useGetContactQuery,
  useGetSingleContactQuery,
} from "../../../../redux/contactApi/ContactApi";
import proImg from "../../../../assets/images/profileImg01.jpg";
import { MdClose } from "react-icons/md";
import { LoginInputs } from "../../../../types/types";
import toast, { Toaster } from "react-hot-toast";
import { IoMdClose } from "react-icons/io";

const MessagePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState<string | null>(
    null
  );
  const { data, refetch } = useGetContactQuery("");
  const { data: singleContact } = useGetSingleContactQuery(selectedContactId, {
    skip: !selectedContactId,
  });
  const [deleteContact] = useDeleteContactMutation();
  //   handle show modal
  const handleShowModal = (id: string) => {
    setSelectedContactId(id);
    setShowModal(!showModal);
  };
  // delete modal
  const [isOpen, setIsOpen] = useState(false);
  const handleDelete = (id: string) => {
    deleteContact(id);
    refetch();
    toast.success("Message deleted successed", { position: "top-right" });
    setIsOpen(false);
  };
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="px-10 p-5 text-seaBlue">
      <Toaster />
      <div className="mt-10">
        <h5 className="bg-white p-5 border capitalize font-semibold text-seaBlue">
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
            {data?.map((contact: LoginInputs, index: number) => (
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
                      className="bg-[#ececec] p-2 rounded-md hover:bg-seaBlue hover:text-white transition-all duration-700"
                    >
                      <FiEye />
                    </button>
                    <button
                      onClick={toggleModal}
                      className="bg-yellow text-white p-2 rounded-md hover:bg-seaBlue hover:text-white transition-all duration-700"
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                  {/* Delete modal */}
                  <div className="flex justify-center items-center">
                    {isOpen && (
                      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-5 z-50">
                        <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-sm relative">
                          {/* Close button */}
                          <button
                            onClick={toggleModal}
                            className="text-2xl absolute top-2 right-2 text-white"
                          >
                            <IoMdClose className="p-1 rounded-md cursor-pointer bg-yellow hover:bg-seaBlue hover:text-white transition-all duration-700" />
                          </button>
                          <div className="flex justify-center mb-4 text-yellow text-4xl">
                            <AiOutlineDelete />
                          </div>
                          <p className="text-center text-seaBlue font-medium mb-6">
                            Are you sure you want to delete this message?
                          </p>
                          <div className="flex justify-center space-x-4">
                            <button
                              onClick={toggleModal}
                              className="bg-gray-100 text-seaBlue px-4 py-2 rounded-md hover:bg-seaBlue hover:text-white transition-all duration-700"
                            >
                              No, cancel
                            </button>
                            <button
                              onClick={() => handleDelete(contact._id)}
                              className="bg-yellow text-white px-4 py-2 rounded-md hover:bg-seaBlue hover:text-white transition-all duration-700"
                            >
                              Yes, I,m sure
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showModal && (
          <div className="fixed inset-0 text-seaBlue bg-black bg-opacity-5 z-50">
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
