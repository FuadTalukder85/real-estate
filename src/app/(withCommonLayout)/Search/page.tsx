"use client";
import React, { useEffect, useState } from "react";
import { useGetPropertyQuery } from "../../../redux/propertyApi/PropertyApi";
import Container from "../../../components/Container/Container";
import PropertyCard from "../../../components/reusableCard/PropertyCard";
const SearchPage = () => {
  const { data: properties } = useGetPropertyQuery("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    if (!properties) return;
    const searchParams = new URLSearchParams(window.location.search);
    const general = searchParams.get("general") || "";
    const location = searchParams.get("location") || "";
    const category = searchParams.get("category") || "";
    const bedroom = searchParams.get("bedroom") || "";

    const filtered = properties?.filter((prop) => {
      const matchesGeneral =
        general.trim() === "" ||
        prop.propertyName.toLowerCase().includes(general.toLowerCase());
      const matchesLocation =
        location.trim() === "" ||
        prop.city.toLowerCase().includes(location.toLowerCase());
      const matchesCategory =
        category.trim() === "" ||
        prop.propertyCategory.toLowerCase().includes(category.toLowerCase());
      const matchesBedroom =
        bedroom.trim() === "" || prop.bedroom.toString().includes(bedroom);

      return (
        matchesGeneral && matchesLocation && matchesCategory && matchesBedroom
      );
    });

    setFilteredData(filtered || []);
  }, [properties]);

  return (
    <Container>
      {filteredData.length > 0 ? (
        <div key={filteredData._id}>
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
        </div>
      ) : (
        <p>No properties found.</p>
      )}
    </Container>
  );
};

export default SearchPage;
