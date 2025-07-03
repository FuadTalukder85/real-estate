"use client";
import Link from "next/link";
import { useGetPropertyQuery } from "../redux/propertyApi/PropertyApi";
import ListingCard from "./ui/ListingCard";
import { TPropertyTypes } from "../types/types";

const ListingByAgent = ({ email }: { email: string }) => {
  const { data } = useGetPropertyQuery("");
  const agentListing = data?.filter((dt: TPropertyTypes) => dt.email === email);
  return (
    <div className="md:grid grid-cols-3 gap-5 md:mt-10 p-3 md:p-0">
      {agentListing?.map((listing: TPropertyTypes) => (
        <Link href={`/Property/${listing._id}`} key={listing._id}>
          <ListingCard
            cardImg={listing?.propertyImage01}
            title={listing?.propertyName}
            price={listing?.price}
            bed={listing?.bedroom}
            bathroom={listing?.bathroom}
            sf={listing?.squareFoot}
          />
        </Link>
      ))}
    </div>
  );
};

export default ListingByAgent;
