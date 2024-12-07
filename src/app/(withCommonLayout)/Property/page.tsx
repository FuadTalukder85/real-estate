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
            // <div
            //   key={index}
            //   className="relative drop-shadow-xl bg-white overflow-hidden"
            // >
            //   <Link
            //     href={`/Property/${property._id}`}
            //     className="overflow-hidden"
            //   >
            //     <Image
            //       src={property.propertyImage01 || "/image"}
            //       alt="property01"
            //       width={400}
            //       height={400}
            //       className="rounded-t-lg hover:scale-125"
            //     ></Image>
            //   </Link>
            //   <h5 className="absolute top-3 right-3 bg-[#2a476670] backdrop-blur-sm py-1 px-3 rounded-lg text-red-500 uppercase font-semibold">
            //     For {property.propertyFor}
            //   </h5>
            //   <div className="p-5">
            //     <h4 className="text-xl text-[#2A4766] py-2 font-semibold capitalize">
            //       {property.propertyName}
            //     </h4>
            //     <div className="flex gap-3 items-center text-[#2A4766]">
            //       <FaLocationDot />
            //       <span>
            //         {property.address}, {property.city}
            //       </span>
            //     </div>
            //     <ul className="flex gap-3 mt-2 text-[#2A4766]">
            //       <li className="flex items-center">
            //         <span>
            //           <b>{property.bedroom}</b> Beds
            //         </span>
            //         <span className="ps-3 border-r h-3"></span>
            //       </li>
            //       <li className="flex items-center">
            //         <span>
            //           <b>{property.bathroom}</b> Baths
            //         </span>
            //       </li>
            //     </ul>
            //   </div>
            //   <div className="border-t">
            //     <div className="py-2 px-5 flex gap-3 items-center justify-between text-[#2A4766]">
            //       <span className="text-xl">
            //         <b>{property.squareFoot}</b> Sqft
            //       </span>
            //       <h4 className="text-[#ffac37] text-2xl font-semibold">
            //         ${property.price}.00
            //       </h4>
            //     </div>
            //   </div>
            // </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PropertyPage;
