"use client";
import Link from "next/link";
import { useGetPropertyQuery } from "../../redux/propertyApi/PropertyApi";
import ListingCard from "../../reusableCard/ListingCard";

const ListingByAgent = ({ email }) => {
  const { data } = useGetPropertyQuery("");
  const agentListing = data?.filter((dt) => dt.email === email);
  return (
    <div className="grid grid-cols-3 gap-5 mt-10">
      {agentListing?.map((listing) => (
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
