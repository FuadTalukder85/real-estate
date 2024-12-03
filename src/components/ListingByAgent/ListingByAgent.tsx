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
          {/*  */}
          {/* <div className="relative group rounded-lg overflow-hidden">
            <Image
              src={listing?.propertyImage01}
              alt="cardImg"
              width={400}
              height={400}
              className="rounded-lg bg-black bg-opacity-20 shadow-inner group-hover:scale-125 transition-all duration-700 ease-in-out"
            ></Image>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-lg group-hover:scale-125 transition-all duration-700 ease-in-out"></div>
            <div className="p-5 absolute bottom-0 text-white z-50">
              <p className="text-lg font-semibold">{listing?.propertyName}</p>
              <p className="text-2xl font-bold">${listing?.price}.00</p>
              <ul>
                <li>
                  {listing?.bedroom} bed | {listing?.bathroom} bathroom |{" "}
                  {listing?.squareFoot} SF
                </li>
              </ul>
            </div>
          </div> */}
        </Link>
      ))}
    </div>
  );
};

export default ListingByAgent;
