import Image from "next/image";
import bannerImg from "../../../../../assets/images/bannerImg/banner01.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { FaBath, FaBed } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { RxSize } from "react-icons/rx";
import { MdOutlineReviews } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import PropertyAgent from "../../../../../dashboardComponent/PropertyAgent/PropertyAgent";
import { TParams } from "../../../../../types/types";

const DashPropertyDetails = async ({ params }: { params: TParams }) => {
  const { AllPropertyId } = await params;
  const res = await fetch(`http://localhost:4900/property/${AllPropertyId}`);
  const singleProperty = await res.json();
  console.log("single", singleProperty.email);
  return (
    <div className="p-10">
      <p className="text-[#2A4766] font-semibold text-xl">Property Overview</p>
      <div className="grid grid-cols-12 gap-5 mt-5">
        <div className="col-span-3">
          <PropertyAgent singleProperty={singleProperty}></PropertyAgent>
        </div>
        <div className="col-span-9">
          <Image className="rounded-md" src={bannerImg} alt="bannerImg"></Image>
          <h3 className="text-[#2A4766] font-semibold text-xl mt-5">
            {singleProperty?.propertyName}
          </h3>
          <li className="flex gap-2 items-center mt-2 text-[#2A4766] font-medium hover:text-[#F1913D] transition-all duration-700">
            <IoLocationOutline className="text-[#F1913D] text-lg" />{" "}
            {singleProperty?.address}, {singleProperty?.city}
          </li>
          <p className="flex items-center justify-between text-[#2A4766] font-semibold text-xl mt-5">
            <span>$80,675.00</span>
            <span className="flex items-center gap-2">
              <SlCalender /> {singleProperty?.date}
            </span>
          </p>
          <ul className="flex justify-between bg-white text-[#2A4766] font-semibold p-3 px-8 mt-5 rounded-md">
            <li className="flex gap-8 items-center">
              <p className="flex gap-2 items-center">
                <FaBed className="text-[#F1913D]" />{" "}
                <span>{singleProperty?.bedroom}</span>
                <span>Bedroom</span>
              </p>
              <span className="border-r h-3"></span>
            </li>
            <li className="flex gap-8 items-center">
              <p className="flex gap-2 items-center">
                <FaBath className="text-[#F1913D]" />
                <span>{singleProperty?.bathroom}</span>
                <span>Bathroom</span>
              </p>
              <span className="border-r h-3"></span>
            </li>
            <li className="flex gap-8 items-center">
              <p className="flex gap-2 items-center">
                <RxSize className="text-[#F1913D]" /> <span>2</span>
                <span>sqft</span>
              </p>
              <span className="border-r h-3"></span>
            </li>
            <li className="flex gap-8 items-center">
              <p className="flex gap-2 items-center">
                <RxSize className="text-[#F1913D]" />
                <span>{singleProperty?.buildYear}</span>
                <span>Build year</span>
              </p>
              <span className="border-r h-3"></span>
            </li>
            <li className="flex gap-8 items-center">
              <p className="flex gap-2 items-center">
                <MdOutlineReviews className="text-[#F1913D]" /> <span>2</span>
                <span>Review</span>
              </p>
              <span className="border-r h-3"></span>
            </li>
            <li className="">
              <p className="flex gap-2 items-center">
                <GiCheckMark className="text-[#F1913D]" /> <span>2</span>
                <span>For Sale</span>
              </p>
            </li>
          </ul>
          <p className="text-[#2A4766] font-semibold mt-5">
            Property Details :
          </p>
          <p className="text-[#2A4766] pr-36">{singleProperty?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DashPropertyDetails;
