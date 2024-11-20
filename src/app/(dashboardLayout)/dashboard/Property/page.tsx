"use client";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import {
  useDeletePropertyMutation,
  useGetPropertyQuery,
} from "../../../../redux/propertyApi/PropertyApi";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoMdClose } from "react-icons/io";

const DashProperty = () => {
  const { data, refetch } = useGetPropertyQuery("");
  const [deleteProperty] = useDeletePropertyMutation();
  // delete modal
  const [isOpen, setIsOpen] = useState(false);
  const handleDelete = (id) => {
    deleteProperty(id);
    refetch();
    toast.success("Product deleted successed", { position: "top-right" });
    setIsOpen(false);
  };
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-10 p-5 text-[#2A4766]">
      <div className="mt-10">
        <h5 className="bg-white p-5 border capitalize font-semibold text-[#2A4766]">
          All Properties List
        </h5>
        {/* property table*/}
        <table className="w-full border-collapse">
          <thead className="bg-[#f2f2f3]">
            <tr className="flex justify-between font-medium p-2 px-5 pr-16 border-s border-r">
              <th className="py-2 text-left font-medium">*</th>
              <th className="w-3/12 py-2 text-left font-medium">
                Property Photo and Name
              </th>
              <th className="w-1/12 py-2 text-left font-medium">Size</th>
              <th className="w-1/12 py-2 text-left font-medium">
                Property Type
              </th>
              <th className="w-1/12 py-2 text-left font-medium">Rent/Sale</th>
              <th className="w-1/12 py-2 text-left font-medium">Bedrooms</th>
              <th className="w-1/12 py-2 text-left font-medium">Bathrooms</th>
              <th className="w-1/12 py-2 text-left font-medium">Location</th>
              <th className="w-1/12 py-2 text-left font-medium">Price</th>
              <th className="w-1/12 py-2 text-left font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((property, index) => (
              <tr
                key={index}
                className="flex justify-between items-center p-2 border-s border-r border-b bg-white px-5 pr-16"
              >
                <td className="">{index + 1}.</td>
                <td className="w-3/12 flex items-center space-x-3">
                  <Image
                    className="rounded-lg"
                    src={property.propertyImage01}
                    alt="propertyImage01"
                    width={60}
                    height={60}
                  ></Image>
                  <span className=" font-medium">{property.propertyName}</span>
                </td>
                <td className="w-1/12">{property.squareFoot} SqFt</td>
                <td className="w-1/12">{property.propertyCategory}</td>
                <td className="w-1/12">{property.propertyFor}</td>
                <td className="w-1/12">0{property.bedroom}</td>
                <td className="w-1/12">0{property.bathroom}</td>
                <td className="w-1/12">{property.city}</td>
                <td className="w-1/12">${property.price}.00</td>
                <td className="w-1/12">
                  <div className="flex gap-5">
                    <button className="bg-[#ececec] p-2 rounded-md hover:bg-[#2A4766] hover:text-white transition-all duration-700">
                      <FiEye />
                    </button>
                    <button className="bg-[#ececec] p-2 rounded-md hover:bg-[#2A4766] hover:text-white transition-all duration-700">
                      <CiEdit />
                    </button>
                    <button
                      onClick={toggleModal}
                      className="bg-red-400 text-white p-2 rounded-md hover:bg-[#2A4766] hover:text-white transition-all duration-700"
                      id="deleteBtn"
                    >
                      <AiOutlineDelete />
                    </button>
                    <Toaster />
                  </div>
                </td>
                {/* Delete modal */}
                <td className="flex justify-center items-center">
                  {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-5 z-50">
                      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-sm relative">
                        {/* Close button */}
                        <button
                          onClick={toggleModal}
                          className="text-2xl absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                          <IoMdClose className="p-1 rounded-md cursor-pointer hover:bg-[#ABACB0]" />
                        </button>
                        <div className="flex justify-center mb-4 text-red-500 text-4xl">
                          <AiOutlineDelete />
                        </div>
                        <p className="text-center text-gray-700 font-medium mb-6">
                          Are you sure you want to delete this product?
                        </p>
                        <div className="flex justify-center space-x-4">
                          <button
                            onClick={toggleModal}
                            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 focus:outline-none"
                          >
                            No, cancel
                          </button>
                          <button
                            onClick={() => handleDelete(property._id)}
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
                          >
                            Yes, I,m sure
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default DashProperty;
