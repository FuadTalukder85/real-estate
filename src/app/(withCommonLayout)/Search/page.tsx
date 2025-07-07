"use client";
import React, { useEffect, useState } from "react";
import { useGetPropertyQuery } from "../../../redux/propertyApi/PropertyApi";
import Container from "../../../components/Container";
import { TPropertyTypes } from "../../../types/types";
import { useGetUserQuery } from "../../../redux/userApi/UserApi";
import PropertyCard from "../../../components/ui/PropertyCard";
const SearchPage = () => {
  const { data: properties } = useGetPropertyQuery("");
  const { data: userData } = useGetUserQuery("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    if (!properties) return;
    const searchParams = new URLSearchParams(window.location.search);
    const general = searchParams.get("general") || "";
    const location = searchParams.get("location") || "";
    const category = searchParams.get("category") || "";
    const bedroom = searchParams.get("bedroom") || "";

    const filtered = properties?.filter((prop: TPropertyTypes) => {
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
      <div className="md:mt-16 md:grid grid-cols-3 gap-5 p-3 md:p-0">
        {filteredData.length > 0 ? (
          filteredData.map((property: TPropertyTypes, index) => {
            const user = userData?.find(
              (user: any) => user.email === property.email
            );
            return (
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
                userName={user?.name || "Unknown"}
                userImage={user?.image || "/default-profile.png"}
              />
            );
          })
        ) : (
          <div className="col-span-3 text-center text-xl text-gray-500">
            No property found
          </div>
        )}
      </div>
    </Container>
  );
};

export default SearchPage;
