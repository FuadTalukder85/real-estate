import Image from "next/image";
import proImg from "../../../../../assets/images/profileImg01.jpg";
import { FaFacebook, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import ListingByAgent from "../../../../../components/ListingByAgent/ListingByAgent";
import { TParams } from "../../../../../types/types";

const AgentDetailsPage = async ({ params }: { params: TParams }) => {
  const { AgentDetailsId } = await params;
  const res = await fetch(`http://localhost:4900/users/${AgentDetailsId}`);
  const singleAgent = await res.json();
  return (
    <div className="p-10">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3">
          <p className="text-seaBlue font-semibold bg-gray-100 p-5 rounded-t-md">
            Property Agents Details
          </p>
          <div className="bg-white p-5 rounded-md py-10">
            <div className="flex justify-center">
              <Image
                className="rounded-xl"
                src={singleAgent?.image}
                alt="image"
                width={100}
                height={100}
              ></Image>
            </div>
            <div className="text-seaBlue font-semibold text-center mt-3">
              {singleAgent?.name}
              <span className="font-normal"> ( {singleAgent?.role} )</span>
            </div>
            <p className="mt-5 text-center text-seaBlue">
              Email : {singleAgent?.email}
            </p>
            <p className="text-center text-seaBlue">
              Number : {singleAgent?.number}
            </p>
            <p className="text-center text-seaBlue">
              Address : {singleAgent?.address}
            </p>
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
          </div>
        </div>
        <div className="col-span-9">
          <p className="text-seaBlue font-semibold">
            {singleAgent?.name},s property
          </p>
          <ListingByAgent email={singleAgent.email} />
        </div>
      </div>
    </div>
  );
};

export default AgentDetailsPage;
