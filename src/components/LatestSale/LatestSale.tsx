"use client";
import React from "react";
import Container from "../Container/Container";
import { useGetPropertyQuery } from "../../redux/propertyApi/PropertyApi";
import PropertyCard from "../reusableCard/PropertyCard";
import { useGetUserQuery } from "../../redux/userApi/UserApi";

const LatestSale = () => {
  const { data } = useGetPropertyQuery("");
  const { data: userData } = useGetUserQuery("");
  const recentProperty = data
    ? [...data].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )
    : [];
  console.log(recentProperty);
  return (
    <Container>
      <div className="mx-auto w-[550px] text-center text-[#2A4766]">
        <h2 className="mt-28 text-4xl font-semibold">LATEST FOR SALE</h2>
        <p className="mt-2 text-[#ABACB0]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          modi ad, autem quia commodi quisquam deserunt asperiores rerum vero
          fugiat nobis ex voluptatibus.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-3 gap-5">
        {recentProperty?.slice(0, 3).map((property, index) => {
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
        })}
      </div>
    </Container>
  );
};

export default LatestSale;
