import Image from "next/image";
import React, { useEffect, useMemo } from "react";
import { useGetPropertyQuery } from "../../redux/propertyApi/PropertyApi";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { FiEye } from "react-icons/fi";

const NewListing = () => {
  const { data, refetch } = useGetPropertyQuery("");

  // Sorting the listings based on the posting date
  const newListing = useMemo(() => {
    return data
      ? [...data].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
      : [];
  }, [data]);

  // Handle the status toggle (approved / pending)
  const handleApproved = async (statusId: string, currentStatus: string) => {
    try {
      const newStatus = currentStatus === "approved" ? "pending" : "approved";
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/property/${statusId}`, // Use environment variable for API URL
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: newStatus,
          }),
        }
      );
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error:", errorText);
        toast.error("Failed to update property status", {
          position: "top-right",
        });
        return;
      }
      toast.success(`Property status updated`, {
        position: "top-right",
      });
    } catch (error) {
      console.error("Error updating property status:", error);
      toast.error("Error updating property status", { position: "top-right" });
    }
  };

  // Refetching data every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [refetch]);

  return (
    <div className="w-[290px] md:w-full overflow-x-scroll mt-10 text-seaBlue bg-white md:p-5 shadow-md">
      <Toaster />
      <h5 className="font-semibold ps-5 md:ps-0 mt-3 md:mt-0">New Listing</h5>
      <div className="border mt-5 rounded-md w-[800px] md:w-full">
        <div className="grid grid-cols-12 bg-gray-50 p-3 px-5 font-semibold">
          <div className="col-span-8">
            <p>Listing</p>
          </div>
          <div className="col-span-4 flex justify-evenly md:gap-16">
            <p>Status</p>
            <p>View</p>
          </div>
        </div>
        {/* Card container with scrollable content */}
        <div className="overflow-auto max-h-[500px]">
          {newListing?.slice(0, 2).map((listing) => (
            <div
              key={listing._id}
              className="grid grid-cols-12 items-center border-b"
            >
              <div className="col-span-8">
                <div className="flex items-center gap-5 border p-5">
                  <Image
                    className="rounded-md"
                    src={listing?.propertyImage01}
                    alt="house01"
                    width={200}
                    height={200}
                  />
                  <div>
                    <p className="font-semibold md:text-lg">
                      {listing?.propertyName}
                    </p>
                    <p className="md:mt-2">
                      <span className="font-semibold md:text-lg">
                        Posting date:{" "}
                      </span>
                      {listing?.date}
                    </p>
                    <p className="font-semibold md:text-lg md:mt-2">$5050,00</p>
                  </div>
                </div>
              </div>
              <div className="col-span-2 border h-full flex items-center justify-center">
                {listing?.status === "approved" ? (
                  <button
                    onClick={() => handleApproved(listing._id, listing.status)}
                    className="px-2 py-1 rounded-md text-sm bg-green-400 text-white hover:bg-seaBlue hover:text-white transition-all duration-700"
                  >
                    {listing?.status}
                  </button>
                ) : (
                  <button
                    onClick={() => handleApproved(listing._id, listing.status)}
                    className="px-2 py-1 rounded-md text-sm bg-red-400 text-white hover:bg-seaBlue hover:text-white transition-all duration-700"
                  >
                    {listing?.status}
                  </button>
                )}
              </div>
              <div className="col-span-2 border h-full flex items-center justify-center">
                <Link href={`/dashboard/AllProperty/${listing?._id}`}>
                  <button className="bg-[#ececec] p-2 rounded-md hover:bg-seaBlue hover:text-white transition-all duration-700">
                    <FiEye />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewListing;
