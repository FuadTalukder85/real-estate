import Image from "next/image";
import React, { useEffect } from "react";
import { useGetPropertyQuery } from "../../redux/propertyApi/PropertyApi";
import toast, { Toaster } from "react-hot-toast";

const NewListing = () => {
  const { data, refetch } = useGetPropertyQuery("");
  const newListing = data
    ? [...data].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )
    : [];
  // handle property approved - pending
  const handleApproved = async (statusId, currentStatus) => {
    try {
      const newStatus = currentStatus === "approved" ? "pending" : "approved";
      const response = await fetch(
        `http://localhost:4900/property/${statusId}`,
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
      const data = await response.json();
      toast.success(`Property status updated`, {
        position: "top-right",
      });
    } catch (error) {
      console.error("Error updating property status:", error);
      toast.error("Error updating property status", { position: "top-right" });
    }
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [refetch]);

  return (
    <div className="mt-10 text-[#2A4766] bg-white p-5">
      <Toaster />
      <h5 className="font-semibold">New Listing</h5>
      <div className="border mt-5 rounded-md">
        <div className="grid grid-cols-12 bg-[#F9F9FC] p-3 px-5 font-semibold">
          <div className="col-span-8">
            <p>Listing</p>
          </div>
          <div className="col-span-4 flex justify-evenly gap-16">
            <p>Status</p>
            <p>Action</p>
          </div>
        </div>
        {/* card */}
        {newListing?.slice(0, 2).map((listing) => (
          <div key={listing._id} className="grid grid-cols-12 items-center">
            <div className="col-span-8">
              <div className="flex items-center gap-5 border p-5">
                <Image
                  className="rounded-md"
                  src={listing?.propertyImage01}
                  alt="house01"
                  width={200}
                  height={200}
                ></Image>
                <div>
                  <p className="font-semibold text-lg">
                    {listing?.propertyName}
                  </p>
                  <p className="mt-2">
                    <span className="font-semibold text-lg">
                      Posting date:{" "}
                    </span>
                    {listing?.date}
                  </p>
                  <p className="font-semibold text-lg mt-2">$5050,00</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 border h-full flex items-center justify-center">
              {listing?.status === "approved" ? (
                <button
                  onClick={() => handleApproved(listing._id, listing.status)}
                  className="px-2 py-1 rounded-md tex-sm bg-green-400 text-white"
                >
                  {listing?.status}
                </button>
              ) : (
                <button
                  onClick={() => handleApproved(listing._id, listing.status)}
                  className="px-2 py-1 rounded-md tex-sm bg-red-400 text-white"
                >
                  {listing?.status}
                </button>
              )}
            </div>
            <div className="col-span-2 border h-full flex items-center justify-center">
              <button className="px-2 py-1 rounded-md tex-sm bg-[#198754] text-white">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewListing;
