"use client";
import { FaBed, FaChevronDown, FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import Container from "../../../components/Container/Container";
import { useGetPropertyQuery } from "../../../redux/propertyApi/PropertyApi";
import PropertyCard from "../../../reusableCard/PropertyCard";

const PropertyPage = () => {
  const { data } = useGetPropertyQuery("");
  const property = data?.filter(
    (dt) => dt.propertyFor === "Sale" || dt.propertyFor === "Rent"
  );
  return (
    <div>
      <div className="bg-[#F7F7F7] mt-10">
        <Container>
          <ul className="flex gap-2 py-7">
            <li className="flex items-center gap-3 p-3 pr-16 bg-white">
              <FaSearch />
              <input
                className="outline-none text-sm"
                placeholder="What are you looking for?"
              />
            </li>
            <li className="flex items-center gap-3 p-3 pr-16 bg-white">
              <FaLocationDot />
              <input
                className="outline-none text-sm"
                placeholder="All Locations"
              />
            </li>
            <li className="flex items-center gap-3 p-3 pr-16 bg-white">
              <MdCategory />
              <input
                className="outline-none text-sm"
                placeholder="Categories"
              />
            </li>
            <li className="flex items-center gap-3 p-3 pr-16 bg-white">
              <FaBed />
              <input className="outline-none text-sm" placeholder="Bedroom" />
            </li>
            <button className="flex items-center gap-3 p-3 px-7 bg-[#ffac37] text-white text-sm uppercase hover:bg-[#ffb958] hover:text-white transition-all duration-700">
              Search
            </button>
          </ul>
        </Container>
      </div>
      <Container>
        {/* card */}
        <div className="mt-16 flex justify-between border-b pb-5 font-semibold">
          <div className="flex gap-5">
            <span className="">All</span>
            <span className="border-b-2 border-[#ffac37]">For Sale</span>
            <span>For Rent</span>
          </div>
          <span className="capitalize flex gap-3 items-center">
            Short by : recent <FaChevronDown />
          </span>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-5">
          {property?.map((property, index) => (
            <PropertyCard
              key={index}
              propertyId={property?._id}
              propertyImage={property?.propertyImage01}
              propertyFor={property?.propertyFor}
              propertyName={property.propertyName}
              address={property.address}
              city={property.city}
              bedroom={property.bedroom}
              bathroom={property.bathroom}
              squareFoot={property.squareFoot}
              price={property.price}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PropertyPage;
