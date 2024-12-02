"use client";
import { useGetPropertyQuery } from "../../redux/propertyApi/PropertyApi";
import ListingCard from "../../reusableCard/ListingCard";

const ListingByAgent = ({ email }) => {
  const { data } = useGetPropertyQuery("");
  const agentListing = data?.filter((dt) => dt.email === email);
  console.log(agentListing);
  return (
    <div className="grid grid-cols-3 gap-5 mt-10">
      {agentListing?.map((listing) => (
        <ListingCard
          key={listing._id}
          cardImg={listing?.propertyImage01}
          title={listing?.propertyName}
          price={listing?.price}
          bed={listing?.bedroom}
          bathroom={listing?.bathroom}
          sf={listing?.squareFoot}
        />
      ))}
    </div>
  );
};

export default ListingByAgent;
