"use client";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import { useGetPropertyQuery } from "../../../../redux/propertyApi/PropertyApi";

const DashProperty = () => {
  const { data } = useGetPropertyQuery("");
  return (
    <div className="px-10 p-5 text-[#2A4766]">
      <div className="mt-10">
        <h5 className="bg-white p-5 border capitalize font-semibold text-[#2A4766]">
          All Properties List
        </h5>
        {/* users table*/}
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
                    <button className="bg-red-400 text-white p-2 rounded-md hover:bg-[#2A4766] hover:text-white transition-all duration-700">
                      <AiOutlineDelete />
                    </button>
                  </div>
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
