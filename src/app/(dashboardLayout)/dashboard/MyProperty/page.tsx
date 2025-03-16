"use client";
import { AiOutlineDelete } from "react-icons/ai";
import useCurrentUser from "../../../../hooks/CurrentUser";
import {
  useDeletePropertyMutation,
  useGetPropertyQuery,
} from "../../../../redux/propertyApi/PropertyApi";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import UpdatePropertyModal from "../../../../components/Modal/UpdatePropertyModal";
import toast, { Toaster } from "react-hot-toast";
import { CiEdit } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { TPropertyTypes } from "../../../../types/types";

const MyProperty = () => {
  const { data: myData, refetch } = useGetPropertyQuery("");
  const currentUser = useCurrentUser();
  const data = useMemo(() => {
    return myData?.filter(
      (dt: TPropertyTypes) => dt.email === currentUser?.email
    );
  }, [myData, currentUser]);
  if (!currentUser) {
    <div className="flex items-center mt-36 justify-center">
      <p>Loading...</p>
    </div>;
  }

  const [deleteProperty] = useDeletePropertyMutation();
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [editById, setEditByid] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredData, setFilteredData] = useState<TPropertyTypes[]>(
    data || []
  );

  // delete modal
  const [isOpen, setIsOpen] = useState(false);
  const handleDelete = (id: string) => {
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
  // handle search
  const handleSearch = () => {
    if (typeof searchQuery !== "string" || searchQuery.trim() === "") {
      setFilteredData(data || []);
      return;
    }

    const filtered = data?.filter((property: TPropertyTypes) =>
      property.propertyName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered || []);
  };
  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [refetch]);
  return (
    <div className="">
      <div className="md:hidden bg-white p-5 border capitalize font-semibold text-seaBlue">
        <h5 className="">All Properties List</h5>
        <div className="mt-3 flex items-center ps-4 justify-between font-semibold bg-yellow rounded-md">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-[500px] py-3 ps-3 bg-[#f0f0f5] outline-none text-sm"
            placeholder="Search by property Title..."
          />
          <div
            onClick={handleSearch}
            className="bg-yellow py-3 px-5 rounded-r-md hover:bg-seaBlue transition-all duration-700 cursor-pointer"
          >
            <IoIosSearch className="text-xl font-bold text-white" />
          </div>
        </div>
      </div>
      <div className="px-3 md:px-0">
        <div className="w-full overflow-x-scroll scrollbar-hide md:px-10 md:p-5 text-seaBlue">
          <div className="w-[1200px] md:w-full overflow-x-auto mt-10">
            <div className="hidden md:flex justify-between items-center bg-white p-5 border capitalize font-semibold text-seaBlue">
              <h5 className="">All Properties List</h5>
              <div className="flex items-center justify-between ps-4 font-semibold bg-yellow rounded-md">
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="md:w-[500px] py-3 ps-3 bg-[#f0f0f5] outline-none text-sm"
                  placeholder="Search by property Title..."
                />
                <div
                  onClick={handleSearch}
                  className="bg-yellow py-3 px-5 rounded-r-md hover:bg-seaBlue transition-all duration-700 cursor-pointer"
                >
                  <IoIosSearch className="text-xl font-bold text-white" />
                </div>
              </div>
            </div>
            {/* property table*/}
            <table className="overflow-x-scroll w-[1600px] md:w-full border-collapse">
              <thead className="bg-[#f2f2f3]">
                <tr className=" flex justify-between font-medium p-2 px-5 border-s border-r">
                  <th className="py-2 text-left font-medium">*</th>
                  <th className="w-2/12 py-2 text-left font-medium">
                    Property Photo and Name
                  </th>
                  <th className="w-1/12 py-2 text-left font-medium">Size</th>
                  <th className="w-1/12 py-2 text-left font-medium">
                    Property Type
                  </th>
                  <th className="w-1/12 py-2 text-left font-medium">
                    Rent/Sale
                  </th>
                  <th className="w-1/12 py-2 text-left font-medium">
                    Bedrooms
                  </th>
                  <th className="w-1/12 py-2 text-left font-medium">
                    Bathrooms
                  </th>
                  <th className="w-1/12 py-2 text-left font-medium">
                    Location
                  </th>
                  <th className="w-1/12 py-2 text-left font-medium">Price</th>
                  <th className="w-1/12 py-2 text-left font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="overflow-x-scroll">
                {filteredData?.map((property, index) => (
                  <tr
                    key={index}
                    className="flex justify-between items-center p-2 border-s border-r border-b bg-white md:px-5"
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
                      <span className="font-medium">
                        {property.propertyName}
                      </span>
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
                        <Link href={`/dashboard/AllProperty/${property?._id}`}>
                          <button className="bg-[#ececec] p-2 rounded-md hover:bg-seaBlue hover:text-white transition-all duration-700">
                            <FiEye />
                          </button>
                        </Link>
                        <button
                          onClick={() => {
                            setEditByid(property._id);
                            handleUpdateModal();
                          }}
                          className="bg-[#ececec] p-2 rounded-md hover:bg-seaBlue hover:text-white transition-all duration-700"
                        >
                          <CiEdit />
                        </button>
                        <button
                          onClick={toggleModal}
                          className="bg-yellow text-white p-2 rounded-md hover:bg-seaBlue hover:text-white transition-all duration-700"
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
                              <IoMdClose className="p-1 rounded-md cursor-pointer bg-yellow hover:bg-seaBlue hover:text-white transition-all duration-700" />
                            </button>
                            <div className="flex justify-center mb-4 text-yellow text-4xl">
                              <AiOutlineDelete />
                            </div>
                            <p className="text-center text-gray-700 font-medium mb-6">
                              Are you sure you want to delete this product?
                            </p>
                            <div className="flex justify-center space-x-4">
                              <button
                                onClick={toggleModal}
                                className="bg-gray-100 text-seaBlue px-4 py-2 rounded-md hover:bg-seaBlue hover:text-white transition-all duration-700"
                              >
                                No, cancel
                              </button>
                              <button
                                onClick={() => handleDelete(property._id)}
                                className="bg-yellow text-white px-4 py-2 rounded-md hover:bg-seaBlue hover:text-white transition-all duration-700"
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
      </div>
    </div>
  );
};

export default MyProperty;
