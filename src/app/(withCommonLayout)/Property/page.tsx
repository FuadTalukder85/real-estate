"use client";
import { useEffect, useMemo, useState } from "react";
import { FaBed, FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import Container from "../../../components/Container/Container";
import { useGetPropertyQuery } from "../../../redux/propertyApi/PropertyApi";
import PropertyCard from "../../../components/reusableCard/PropertyCard";

const PropertyPage = () => {
  const { data } = useGetPropertyQuery("");
  const [generalQuery, setGeneralQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [categoryQuery, setCategoryQuery] = useState("");
  const [bedroomQuery, setBedroomQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [sortOption, setSortOption] = useState("");
  // filter properties for sale or rent
  const property = useMemo(
    () =>
      data?.filter(
        (dt) => dt.propertyFor === "Sale" || dt.propertyFor === "Rent"
      ),
    [data]
  );
  // handle search
  const handleSearch = () => {
    const filtered = property?.filter((prop) => {
      const matchesGeneral =
        generalQuery.trim() === "" ||
        prop.propertyName.toLowerCase().includes(generalQuery.toLowerCase());
      const matchesLocation =
        locationQuery.trim() === "" ||
        prop.city.toLowerCase().includes(locationQuery.toLowerCase());
      const matchesCategory =
        categoryQuery.trim() === "" ||
        prop.propertyCategory
          .toLowerCase()
          .includes(categoryQuery.toLowerCase());
      const matchesBedroom =
        bedroomQuery.trim() === "" ||
        prop.bedroom.toString().includes(bedroomQuery);

      return (
        matchesGeneral && matchesLocation && matchesCategory && matchesBedroom
      );
    });

    setFilteredData(filtered || []);
  };

  // handle sort
  const handleSort = (option) => {
    if (option === "Sale") {
      setFilteredData(
        (property || []).filter((prop) => prop.propertyFor === "Sale")
      );
    } else if (option === "Rent") {
      setFilteredData(
        (property || []).filter((prop) => prop.propertyFor === "Rent")
      );
    } else {
      setFilteredData(property || []);
    }
  };

  useEffect(() => {
    handleSort(sortOption);
  }, [sortOption, property]);

  useEffect(() => {
    if (property) {
      setFilteredData(property);
    }
  }, [property]);

  return (
    <div>
      <div className="bg-[#F7F7F7] mt-10">
        <Container>
          <ul className="flex justify-between gap-2 py-7">
            <li className="flex items-center gap-3 p-3 bg-white">
              <FaSearch />
              <input
                value={generalQuery}
                onChange={(e) => setGeneralQuery(e.target.value)}
                className="outline-none text-sm w-52"
                placeholder="What are you looking for?"
              />
            </li>
            <li className="flex items-center gap-3 p-3 bg-white">
              <FaLocationDot />
              <input
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
                className="outline-none text-sm w-52"
                placeholder="All Locations"
              />
            </li>
            <li className="flex items-center gap-3 p-3 bg-white">
              <MdCategory />
              <input
                value={categoryQuery}
                onChange={(e) => setCategoryQuery(e.target.value)}
                className="outline-none text-sm w-52"
                placeholder="Categories"
              />
            </li>
            <li className="flex items-center gap-3 p-3 bg-white">
              <FaBed />
              <input
                type="number"
                value={bedroomQuery}
                onChange={(e) => setBedroomQuery(e.target.value)}
                className="outline-none text-sm w-52"
                placeholder="Bedroom"
              />
            </li>
            <button
              onClick={handleSearch}
              className="flex items-center gap-3 p-3 px-7 bg-[#ffac37] text-white text-sm uppercase hover:bg-[#2A4766] transition-all duration-700"
            >
              Search
            </button>
          </ul>
        </Container>
      </div>
      <Container>
        {/* Card section */}
        <div className="mt-16 flex justify-between border-b pb-5 font-semibold">
          <div className="flex gap-5">
            <span className="border-b-2 border-[#ffac37]">All property</span>
          </div>
          <select
            className="mt-1 block p-2 border-b border-[#ffac37] rounded-md shadow-sm outline-none"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Short by</option>
            <option value="Sale">For Sale</option>
            <option value="Rent">For Rent</option>
          </select>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-5">
          {filteredData.length > 0 ? (
            filteredData.map((property, index) => (
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
            ))
          ) : (
            <div className="col-span-3 text-center text-xl text-gray-500">
              No data found
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default PropertyPage;
