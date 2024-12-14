"use client";
import Image from "next/image";
import proImg from "../../assets/images/profileImg01.jpg";
import { FaFacebook, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { useGetUserQuery } from "../../redux/userApi/UserApi";
import { LoginInputs } from "../../types/types";
type SingleProperty = {
  email: string;
};
const PropertyAgent = ({
  singleProperty,
}: {
  singleProperty: SingleProperty;
}) => {
  const { data } = useGetUserQuery("");
  //   find property agent
  const agent = data?.find(
    (dt: LoginInputs) => dt?.email === singleProperty?.email
  );
  return (
    <div className="">
      <p className="text-seaBlue font-semibold bg-gray-100 p-5 rounded-t-md">
        Property Agents Details
      </p>
      <div className="bg-white p-5 rounded-md">
        <div className="flex justify-center mt-5">
          <Image className="rounded-xl" src={proImg} alt="proImg"></Image>
        </div>
        <div className="text-seaBlue font-semibold text-center mt-3">
          {agent?.name}
          <p className="font-normal">( {agent?.role} )</p>
        </div>
        <div className="flex gap-3 justify-center mt-3">
          <p className="bg-seaBlue text-white p-2 rounded-md hover:bg-yellow transition-all duration-700 cursor-pointer">
            <FaFacebook />
          </p>
          <p className="bg-seaBlue text-white p-2 rounded-md hover:bg-yellow transition-all duration-700 cursor-pointer">
            <FaTwitterSquare />
          </p>
          <p className="bg-seaBlue text-white p-2 rounded-md hover:bg-yellow transition-all duration-700 cursor-pointer">
            <IoLogoYoutube />
          </p>
          <p className="bg-seaBlue text-white p-2 rounded-md hover:bg-yellow transition-all duration-700 cursor-pointer">
            <FaLinkedin />
          </p>
        </div>
        <p className="mt-5 text-center text-seaBlue">Email : {agent?.email}</p>
        <p className="text-center text-seaBlue">Number : {agent?.number}</p>
      </div>
    </div>
  );
};

export default PropertyAgent;
