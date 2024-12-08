"use client";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import {
  useDeletePropertyMutation,
  useGetPropertyQuery,
} from "../../../../redux/propertyApi/PropertyApi";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoMdClose, IoIosSearch } from "react-icons/io";
import UpdatePropertyModal from "../../../../components/Modal/UpdatePropertyModal";
import Link from "next/link";
type Property = {
  _id: string;
  propertyName: string;
  propertyImage01: string;
  squareFoot: number;
  propertyCategory: string;
  propertyFor: string;
  bedroom: number;
  bathroom: number;
  city: string;
  price: number;
  postBy: string;
  status: "approved" | "pending";
};

const DashProperty = () => {
  const { data, refetch } = useGetPropertyQuery("");
  const [deleteProperty] = useDeletePropertyMutation();
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [editById, setEditByid] = useState(null);
  const [searchQuery, setSearchQuery] = useState([]);
  const [filteredData, setFilteredData] = useState<Property[]>([]);
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
  // handle property update modal
  const handleUpdateModal = () => {
    setShowUpdateModal(!showUpdateModal);
  };
  // handle property approved - pending
  const handleApproved = async (statusId, currentStatus) => {
    try {
      const newStatus = currentStatus === "approved" ? "pending" : "approved";
      const response = await fetch(
        `http://localhost:4900/property/${statusId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: newStatus,
          }),
        }
      );
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error:", errorText);
        toast.error("Failed to update property status", {
          position: "top-right",
        });
        return;
      }
      const data = await response.json();
      toast.success(`Property status updated`, {
        position: "top-right",
      });
      refetch();
    } catch (error) {
      console.error("Error updating property status:", error);
      toast.error("Error updating property status", { position: "top-right" });
    }
  };
  // handle search
  const handleSearch = () => {
    if (typeof searchQuery !== "string" || searchQuery.trim() === "") {
      setFilteredData(data || []); // Show all data when searchQuery is empty
      return;
    }

    const filtered = data?.filter((property) =>
      property.propertyName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered || []);
  };
  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);
  // refetch
  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [refetch]);
  return (
    <div className="px-10 p-5 text-[#2A4766]">
      <div className="mt-10">
        <div className="flex justify-between items-center bg-white p-5 border capitalize font-semibold text-[#2A4766]">
          <h5 className="text-xl">All Properties List</h5>
          <div className="flex items-center justify-between ps-4 font-semibold bg-[#ffac37] rounded-md">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[500px] py-3 ps-3 bg-[#f0f0f5] outline-none text-sm"
              placeholder="Search by property Title..."
            />
            <div
              onClick={handleSearch}
              className="bg-[#ffac37] py-3 px-5 rounded-r-md hover:bg-[#2A4766] transition-all duration-700 cursor-pointer"
            >
              <IoIosSearch className="text-xl font-bold text-white" />
            </div>
          </div>
        </div>

        {/* property table*/}
        <table className="w-full border-collapse">
          <thead className="bg-[#f2f2f3]">
            <tr className="flex justify-between font-medium p-2 px-5 border-s border-r">
              <th className="py-2 text-left font-medium">*</th>
              <th className="w-2/12 py-2 text-left font-medium">
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
              <th className="w-1/12 py-2 text-left font-medium">Post By</th>
              <th className="w-1/12 py-2 text-left font-medium">Status</th>
              <th className="w-1/12 py-2 text-left font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData?.map((property, index) => (
              <tr
                key={index}
                className="flex justify-between items-center p-2 border-s border-r border-b bg-white px-5"
              >
                <td className="pr-2">{index + 1}.</td>
                <td className="w-2/12 flex items-center space-x-3">
                  <Image
                    className="rounded-lg"
                    src={property.propertyImage01 || "/image"}
                    alt="propertyImage01"
                    width={60}
                    height={60}
                  ></Image>
                  <span className="font-medium">{property.propertyName}</span>
                </td>
                <td className="w-1/12">{property.squareFoot} SqFt</td>
                <td className="w-1/12">{property.propertyCategory}</td>
                <td className="w-1/12">{property.propertyFor}</td>
                <td className="w-1/12">0{property.bedroom}</td>
                <td className="w-1/12">0{property.bathroom}</td>
                <td className="w-1/12">{property.city}</td>
                <td className="w-1/12">${property.price}.00</td>
                <td className="w-1/12">
                  {property.postBy === "Admin" ? (
                    <button className="bg-green-400 text-white py-1 px-2 rounded-md hover:bg-[#2A4766] hover:text-white transition-all duration-700">
                      {property.postBy}
                    </button>
                  ) : (
                    <button className="bg-red-400 text-white py-1 px-2 rounded-md hover:bg-[#2A4766] hover:text-white transition-all duration-700">
                      {property.postBy}
                    </button>
                  )}
                </td>
                <td className="w-1/12">
                  {property?.status === "approved" ? (
                    <button
                      onClick={() =>
                        handleApproved(property._id, property.status)
                      }
                      className="bg-green-400 text-white py-1 px-2 rounded-md hover:bg-[#2A4766] hover:text-white transition-all duration-700"
                    >
                      {property?.status}
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        handleApproved(property._id, property.status)
                      }
                      className="bg-red-400 text-white py-1 px-2 rounded-md hover:bg-[#2A4766] hover:text-white transition-all duration-700"
                    >
                      {property?.status}
                    </button>
                  )}
                </td>
                <td className="w-1/12">
                  <div className="flex gap-5">
                    <Link href={`/dashboard/AllProperty/${property?._id}`}>
                      <button className="bg-[#ececec] p-2 rounded-md hover:bg-[#2A4766] hover:text-white transition-all duration-700">
                        <FiEye />
                      </button>
                    </Link>
                    <button
                      onClick={() => {
                        setEditByid(property._id);
                        handleUpdateModal();
                      }}
                      className="bg-[#ececec] p-2 rounded-md hover:bg-[#2A4766] hover:text-white transition-all duration-700"
                    >
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
                  {showUpdateModal && (
                    <UpdatePropertyModal
                      onClose={() => {
                        setShowUpdateModal(false);
                      }}
                      propertyId={editById}
                    />
                  )}
                </td>

                {/* Delete modal */}
                <td className="flex justify-center items-center">
                  {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-5 z-50">
                      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-sm relative">
                        {/* Close button */}
                        <button
                          onClick={toggleModal}
                          className="text-2xl absolute top-2 right-2 text-white"
                        >
                          <IoMdClose className="p-1 rounded-md cursor-pointer bg-red-500 hover:bg-gray-200 hover:text-black transition-all duration-700" />
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
